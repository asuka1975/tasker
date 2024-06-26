"use client"

import { useEffect, useRef, useState } from "react";
import Marker from "../atom/Marker";
import { TaskRepository } from "@/app/_domain/repository/TaskRepository";
import MenuIconButton from "../atom/MenuIconButton";
import ContextMenu from "../molecule/ContextMenu";
import MenuItem from "../atom/MenuItem";
import { z } from "zod";
import { taskArraySchema, taskSchema } from "@/app/_domain/types/Task";
import TaskItemContextMenu from "./TaskItemContextMenu";
import { useDrop } from "react-dnd";
import DraggableTaskItem from "./DraggableTaskItem";

const taskDtoSchema = z.object({
    id: z.number(),
    title: z.string(),
    priority: z.number(),
    limitAt: z.coerce.date(),
    completed: z.boolean(),
    subtasks: z.array(z.number())
})

const taskDtoArraySchema = z.array(taskDtoSchema);

type Props = {
    id: number;
    title: string;
    priority: number;
    limitAt: Date;
    completed: boolean;
    subtasks: number[];
};

export default function TaskTree({ id, title, priority, limitAt, completed, subtasks }: Props) {
    const [opened, setOpened] = useState<boolean>(false);
    const [subtasks_, setSubtasks] = useState<z.infer<typeof taskDtoArraySchema>>([]);

    const [{ isOver }, drop] = useDrop<{ id: number }, unknown, { isOver: boolean }>(() => ({
        accept: "task",
        drop: (item) => {
            fetch(`/api/v1/task/${item.id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ parentId: id })
            })
        },
        collect: monitor => ({
            isOver: !!monitor.isOver() && !!monitor.canDrop(),
        }),
        canDrop: (item, monitor) => item.id != id
    }), [id])

    useEffect(() => {
        if(opened) {
            getSubtasks(subtasks)
                .then((tasks: any) => {
                    setSubtasks(tasks)
                })
        }
    }, [opened])

    useEffect(() => {
        const deferedOpen = async () => {
            if(!isOver) return;
            await new Promise(resolve => setTimeout(resolve, 1000));
            if(isOver) {
                setOpened(true);
            }
        }
        deferedOpen();
    })

    return (
        <div className="">
            <div className="grid grid-cols-[0.5em_1fr_0.5em] items-center gap-2" >
                { subtasks.length > 0 ? <div className={opened ? "transition rotate-90 duration-100" : ""} onClick={() => { setOpened(v => !v) }}><Marker /></div> : <></> }
                <div className={`col-start-2 ${isOver ? "bg-gray-200" : "bg-white"}`} ref={drop}>
                    <DraggableTaskItem id={id} title={title} priority={priority} limitAt={limitAt} completed={completed}></DraggableTaskItem>
                </div>
                <TaskItemContextMenu id={id} />
            </div>
            {opened ?
                <div className="transition pl-[0.5em] duration-100">
                    {subtasks_.map(subtask => {
                        return <TaskTree key={subtask.id} { ...subtask } />;
                    })}
                </div>
              : <></>
            }
        </div>
    )
}

async function getSubtask(taskId: number) {
    const task = await fetch(`/api/v1/task/${taskId}`, { 
        next: {
            revalidate: 0
        }
    })
    .then(r => r.json())
    .then(j => taskSchema.parse(j))
    const subtasks = await fetch(`/api/v1/task/${taskId}/children`, {
        next: {
            revalidate: 0
        }
    })
    .then(r => r.json())
    .then(j => taskArraySchema.parse(j))

    return {
        id: taskId,
        title: task.title,
        priority: task.priority,
        limitAt: task.limitAt,
        completed: task.completed,
        subtasks: subtasks.map((task: any) => task.id)
    }
}

async function getSubtasks(taskIds: number[]) {
    const subtasks = []

    for(const id of taskIds) {
        subtasks.push(await getSubtask(id))
    }

    return subtasks;
}