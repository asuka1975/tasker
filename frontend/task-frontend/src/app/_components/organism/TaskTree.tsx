"use client"

import { useRef, useState } from "react";
import Marker from "../atom/Marker";
import TaskItem from "../molecule/TaskItem";
import { TaskRepository } from "@/app/_domain/repository/TaskRepository";
import MenuIconButton from "../atom/MenuIconButton";
import ContextMenu from "../molecule/ContextMenu";
import MenuItem from "../atom/MenuItem";

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
    const [subtasks_, _] = useState(subtasks.map(i => getSubtask(i, taskRepository)));
    const [menuOpened, setMenuOpened] = useState<boolean>(false);

    return (
        <div className="">
            <div className="grid grid-cols-[0.5em_1fr_0.5em] items-center gap-2">
                { subtasks.length > 0 ? <div className={opened ? "transition rotate-90 duration-100" : ""} onClick={() => { setOpened(v => !v) }}><Marker /></div> : <></> }
                <div className="col-start-2">
                    <TaskItem id={id} title={title} priority={priority} limitAt={limitAt}></TaskItem>
                </div>
                <div>
                    <MenuIconButton className="w-6 h-6" onClick={() => { setMenuOpened(v => !v) }} />
                    {
                        menuOpened ?
                            <ContextMenu className="absolute" close={() => setMenuOpened(false)} tabIndex={0}>
                                <MenuItem name="sample1" action={() => {}} />
                                <MenuItem name="sample2" action={() => {}} />
                                <MenuItem name="sample3" action={() => {}} />
                            </ContextMenu>
                          : null
                    }
                </div>
            </div>
            {opened ?
                <div className="transition pl-[0.5em] duration-100">
                    {subtasks_.map(subtask => {
                        return <TaskTree key={subtask.id} { ...subtask } taskRepository={taskRepository} />;
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