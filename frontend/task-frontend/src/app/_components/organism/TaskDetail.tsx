import { MockTaskRepository } from "@/app/_domain/repository/MockTaskRepository"
import { Task } from "@/app/_domain/types/Task"
import Heading1 from "../atom/Heading1";
import Heading2 from "../atom/Heading2";
import EditableTitle from "../molecule/EditableTitle";
import EditableText from "../molecule/EditableText";
import TaskItem from "../molecule/TaskItem";

type Props = {
    id: number
}

export default async function TaskDetail({ id }: Props) {
    const task = await getTaskDetail(id);
    const subtasks = await getTaskChildren(id);

    return (
        <div className="flex flex-col w-full h-full">
            <div className="mb-8"><EditableTitle onSave={() => {}} title={task.title} /></div>
            <div className="grow grid grid-rows-[1fr_1fr]">
                <div className="flex flex-col">
                    <Heading2>説明</Heading2>
                    <div className="grow">
                        <EditableText onSave={() => {}} content={task.description} />
                    </div>
                </div>
                <div>
                    <Heading2>子タスク一覧</Heading2>
                    <div className="grid divide-y px-2 shadow-md rounded-md shadow-gray-200 divide-gray-200">
                        {subtasks.map(task => <div key={task.id} className="py-2"><TaskItem { ...task } /></div>)}
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