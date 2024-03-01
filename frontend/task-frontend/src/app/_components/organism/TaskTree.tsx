"use client"

import { useState } from "react";
import Marker from "../atom/Marker";
import TaskItem from "../molecule/TaskItem";
import dayjs from "dayjs";
import { TaskRepository } from "@/app/_domain/repository/TaskRepository";

type Props = {
    id: number;
    title: string;
    priority: number;
    limitAt: Date;
    subtasks: number[];
    taskRepository: TaskRepository;
};

export default function TaskTree({ id, title, priority, limitAt, subtasks, taskRepository }: Props) {
    const [opened, setOpened] = useState<boolean>(false);

    return (
        <div className="">
            <div className="grid grid-cols-[0.5em_1fr] items-center gap-2" onClick={() => { setOpened(v => !v) }}>
                { subtasks.length > 0 ? <Marker /> : <></> }
                <div className="col-start-2">
                    <TaskItem id={id} title={title} priority={priority} limitAt={limitAt}></TaskItem>
                </div>
            </div>
            {opened ?
                <div className="pl-[0.5em]">
                    {subtasks.map(i => {
                        return <TaskTree { ...getSubtask(id, taskRepository) } taskRepository={taskRepository} />;
                    })}
                </div>
              : <></>
            }
        </div>
    )
}

function getSubtask(taskId: number, taskRepository: TaskRepository) {
    const task = taskRepository.getTask(taskId);
    const subtasks = taskRepository.getSubtasks(taskId);

    return {
        id: taskId,
        title: task.title,
        priority: task.priority,
        limitAt: task.limitAt,
        subtasks: subtasks.map(task => task.id)
    }
}