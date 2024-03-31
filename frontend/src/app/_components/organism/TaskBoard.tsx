"use client"

import { Task } from "@/app/_domain/types/Task"
import TaskTree from "./TaskTree";
import TaskDndProvider from "@/app/_contexts/TaskDndProvider";

type Props = {
    rootTasks: Task[];
    subtasks: Map<number, number[]>;
}

export default function TaskBoard({ rootTasks, subtasks }: Props) {
    return (
        <TaskDndProvider>
            {
                rootTasks.map((task) => (
                    <TaskTree id={task.id} title={task.title} priority={task.priority} limitAt={task.limitAt} completed={task.completed} subtasks={subtasks?.get(task.id) ?? []} key={task.id} />
                ))
            }
        </TaskDndProvider>
    )
}