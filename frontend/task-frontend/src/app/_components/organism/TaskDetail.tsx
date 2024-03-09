import { MockTaskRepository } from "@/app/_domain/repository/MockTaskRepository"
import { Task } from "@/app/_domain/types/Task"
import Heading1 from "../atom/Heading1";
import Heading2 from "../atom/Heading2";
import EditableTitle from "../molecule/EditableTitle";
import EditableText from "../molecule/EditableText";
import TaskItem from "../molecule/TaskItem";
import Subtext from "../atom/Subtext";
import DateTimeInput from "../atom/DateTimeInput";
import DateTimeView from "../atom/DateTimeView";
import dayjs from "dayjs";
import AddIconButton from "../atom/AddIconButton";
import Button from "../atom/Button";

type Props = {
    id: number
}

export default async function TaskDetail({ id }: Props) {
    const task = await getTaskDetail(id);
    const subtasks = await getTaskChildren(id);

    return (
        <div className="flex flex-col w-full h-full">
            <div className="mb-8"><EditableTitle onSave={() => {}} title={task.title} /></div>
            <div className="grow grid grid-cols-[2fr_1fr] gap-2">
                <div className=" grid grid-rows-[1fr_1fr_3rem]">
                    <div className="flex flex-col">
                        <Heading2>説明</Heading2>
                        <div className="grow">
                            <EditableText onSave={() => {}} content={task.description} />
                        </div>
                    </div>
                    <div>
                        <div className="grid grid-cols-[1fr_3rem]">
                            <Heading2>子タスク一覧</Heading2>
                            <div>
                                <AddIconButton className="p-2" />
                            </div>
                        </div>
                        <div className="grid divide-y px-2 shadow-md rounded-md shadow-gray-200 divide-gray-200">
                            {subtasks.map(task => <div key={task.id} className="py-2"><TaskItem { ...task } /></div>)}
                        </div>
                    </div>
                    <div>
                        <Button>完了</Button>
                    </div>
                </div>
                <div className="flex flex-col gap-2 border-gray-300 border-[1px] rounded-md p-4">
                    <div className="grid grid-cols-[1fr_2fr]">
                        <Subtext>作成日</Subtext>
                        <DateTimeView>{dayjs()}</DateTimeView>
                    </div>
                    <div className="grid grid-cols-[1fr_2fr]">
                        <Subtext>編集日</Subtext>
                        <DateTimeView>{dayjs()}</DateTimeView>
                    </div>
                    <div className="grid grid-cols-[1fr_2fr]">
                        <Subtext>期限</Subtext>
                        <DateTimeInput />
                    </div>
                </div>
            </div>
        </div>
    )
}

async function getTaskDetail(id: number): Promise<Task> {
    const r = new MockTaskRepository();
    return r.getTask(id);
}

async function getTaskChildren(id: number): Promise<Task[]> {
    const r = new MockTaskRepository();
    return r.getSubtasks(id);
}