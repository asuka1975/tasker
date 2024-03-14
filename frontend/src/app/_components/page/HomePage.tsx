import Subtext from "../../_components/atom/Subtext";
import Priority from "../../_components/atom/Priority";
import Marker from "../../_components/atom/Marker";
import Title from "../../_components/atom/Title";
import TaskItem from "../../_components/molecule/TaskItem";
import dayjs from "dayjs";
import LimitWarningIcon from "../../_components/atom/LimitWarningIcon";
import LimitOverIcon from "../../_components/atom/LimitOverIcon";
import LimitInfoIcon from "../../_components/atom/LimitInfoIcon";
import TaskTree from "../../_components/organism/TaskTree";
import CloseIconButton from "../../_components/atom/CloseIconButton";
import ModalPanel from "../../_components/molecule/ModalPanel";
import Link from "next/link";
import { Task, taskArraySchema, taskSchema } from "../../_domain/types/Task";
import Header from "../organism/Header";

const limits: Date[] = [
    dayjs().subtract(1, 'd').toDate(),
    dayjs().add(2, 'd').toDate(),
    dayjs().add(6, 'd').toDate(),
    dayjs().add(10, 'd').toDate(),
    dayjs().add(14, 'd').toDate(),
    dayjs().add(18, 'd').toDate(),
    dayjs().add(20, 'd').toDate(),
    dayjs().add(24, 'd').toDate(),
]

export default async function HomePage() {
    const rootTasks = await getRootTasks();
    const subtasks = new Map<number, number[]>();
    for(const task of rootTasks) {
        const tasks = await getSubtasks(task.id);
        subtasks.set(task.id, tasks.map(t => t.id));
    }


    return (
        <main>
            <Header />
            <div className="pl-1 w-96">
                {
                    rootTasks.map((task) => (
                        <TaskTree id={task.id} title={task.title} priority={task.priority} limitAt={task.limitAt} completed={task.completed} subtasks={subtasks?.get(task.id) ?? []} key={task.id} />
                    ))
                }
            </div>
        </main>
    );
}

async function getRootTasks() {
    const rootTasks = await fetch(`http://task-service-runner:3000/api/v1/task?rootOnly=true`, {
        next: {
            revalidate: 20
        }
    })
    .then(r => r.json())
    .then(j => taskArraySchema.parse(j))

    return rootTasks;
}

async function getSubtasks(id: number) {
    const task = await fetch(`http://task-service-runner:3000/api/v1/task/${id}/children`, {
        next: {
            revalidate: 20
        }
    })
    .then(r => r.json())
    .then(j => taskArraySchema.parse(j))

    return task;
}