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

type Props = {
    task: Task;
    subtasks: Task[];
}

export default async function TaskDetail({ task, subtasks }: Props) {

    return (
        <div className="flex flex-col w-full h-full">
            <div className="mb-8">
                {
                    !task?.completed ?
                        <EditableTitle onSave={() => {}} title={task?.title} />
                      : <CompletedHeading1>{task?.title}</CompletedHeading1>
                }
            </div>
            <div className="grow grid grid-cols-[2fr_1fr] gap-2">
                <div className=" grid grid-rows-[1fr_1fr_3rem]">
                    <div className="flex flex-col">
                        <Heading2>説明</Heading2>
                        <div className="grow">
                            <EditableText onSave={() => {}} content={task?.description} />
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
                        <Button>完了</Button>
                    </div>
                </div>
                <div className="flex flex-col gap-2 border-gray-300 border-[1px] rounded-md p-4">
                    <ComponentWithLabel label="作成日"><DateTimeView>{dayjs()}</DateTimeView></ComponentWithLabel>
                    <ComponentWithLabel label="編集日"><DateTimeView>{dayjs()}</DateTimeView></ComponentWithLabel>
                    <ComponentWithLabel label="期限"><DateTimeInput/></ComponentWithLabel>
                    <ComponentWithLabel label="優先度"><PriorityInput priority={task?.priority} onChange={(p) => {}} /></ComponentWithLabel>
                </div>
            </div>
        </div>
    )
}
