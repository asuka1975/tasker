import { Task, taskArraySchema, taskSchema } from "@/app/_domain/types/Task"
import Heading2 from "../atom/Heading2";
import EditableTitle from "../molecule/EditableTitle";
import EditableText from "../molecule/EditableText";
import TaskItem from "../molecule/TaskItem";
import DateTimeInput from "../atom/DateTimeInput";
import DateTimeView from "../atom/DateTimeView";
import dayjs from "dayjs";
import AddIconButton from "../atom/AddIconButton";
import Button from "../atom/Button";
import ComponentWithLabel from "../molecule/ComponentWithLabel";
import PriorityInput from "../atom/PriorityInput";
import CompletedHeading1 from "../atom/CompletedHeading1";
import TaskDetail from "./TaskDetail";

type Props = {
    id: number;
}

export default async function TaskDetailSsr({ id }: Props) {
    const task = await getTaskDetail(id);
    const subtasks = await getTaskChildren(id);

    return (
        <TaskDetail task={task} subtasks={subtasks} />
    )
}

async function getTaskDetail(id: number): Promise<Task> {
    const task = await fetch(`http://task-service-runner:3000/api/v1/task/${id}`, {
        next: {
            revalidate: 20
        }
    })
    .then(r => r.json())
    .then(j => taskSchema.parse(j))

    return task;
}

async function getTaskChildren(id: number): Promise<Task[]> {
    const tasks = await fetch(`http://task-service-runner:3000/api/v1/task/${id}/children`, {
        next: {
            revalidate: 20
        }
    })
    .then(r => r.json())
    .then(j => taskArraySchema.parse(j))

    return tasks;
}