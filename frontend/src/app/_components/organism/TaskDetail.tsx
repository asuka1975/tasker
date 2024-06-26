"use client"

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
import AddLinkIconButton from "../atom/AddIconLinkButton";
import { useRouter } from "next/navigation";
import EditableMarkdown from "../molecule/EditableMarkdown";

type Props = {
    task: Task;
    subtasks: Task[];
}

export default async function TaskDetail({ task, subtasks }: Props) {
    const router = useRouter();

    return (
        <div className="flex flex-col w-full h-full">
            <div className="mb-8">
                {
                    !task?.completed ?
                        <EditableTitle onSave={(title: string) => {updateTask(task.id, { title: title })}} title={task?.title} />
                      : <CompletedHeading1>{task?.title}</CompletedHeading1>
                }
            </div>
            <div className="grow grid grid-cols-[2fr_1fr] gap-2">
                <div className=" grid grid-rows-[1fr_1fr_3rem]">
                    <div className="flex flex-col">
                        <Heading2>説明</Heading2>
                        <div className="grow">
                            <EditableMarkdown onSave={(description: string) => { updateTask(task.id, { description: description }) }} content={task?.description} />
                        </div>
                    </div>
                    <div>
                        <div className="grid grid-cols-[1fr_3rem]">
                            <Heading2>子タスク一覧</Heading2>
                            <div>
                                <AddLinkIconButton className="p-2" href={`/task/${task.id}/create`} />
                            </div>
                        </div>
                        <div className="grid divide-y px-2 shadow-md rounded-md shadow-gray-200 divide-gray-200">
                            {subtasks.map(task => <div key={task?.id} className="py-2"><TaskItem { ...task } /></div>)}
                        </div>
                    </div>
                    <div>
                        <Button onClick={() => {
                            updateTask(task.id, { completed: !task.completed })
                            router.push("/");
                            router.refresh();
                        }}>{!task.completed ? "完了" : "再オープン"}</Button>
                    </div>
                </div>
                <div className="flex flex-col gap-2 border-gray-300 border-[1px] rounded-md p-4">
                    <ComponentWithLabel label="作成日"><DateTimeView>{dayjs(task.createdAt)}</DateTimeView></ComponentWithLabel>
                    <ComponentWithLabel label="編集日"><DateTimeView>{dayjs(task.updatedAt)}</DateTimeView></ComponentWithLabel>
                    <ComponentWithLabel label="期限"><DateTimeInput datetime={task.limitAt} onChange={(datetime) => updateTask(task.id, { limitAt: datetime.toDate() })}/></ComponentWithLabel>
                    <ComponentWithLabel label="優先度"><PriorityInput priority={task?.priority} onChange={(p: number) => { updateTask(task.id, { priority: p }) }} /></ComponentWithLabel>
                </div>
            </div>
        </div>
    )
}

async function updateTask(id: number, task: { title?: string; description?: string; limitAt?: Date; priority?: number, completed?: boolean }) {
    await fetch(`/api/v1/task/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(task)
    })
}