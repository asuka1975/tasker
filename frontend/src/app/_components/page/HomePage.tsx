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
import LinkButton from "../atom/LinkButton";
import TaskBoard from "../organism/TaskBoard";

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
            <Header>
                <LinkButton href="/task/create" className="col-start-3">追加</LinkButton>
            </Header>
            <div className="pl-1 w-96">
                <TaskBoard rootTasks={rootTasks} subtasks={subtasks} />
            </div>
        </main>
    );
}

async function getRootTasks() {
    const rootTasks = await fetch(`http://task-service-runner:3000/api/v1/task?onlyRoot=true`, {
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