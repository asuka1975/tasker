import { MockTaskRepository } from "@/app/_domain/repository/MockTaskRepository"
import { Task } from "@/app/_domain/types/Task"
import Heading1 from "../atom/Heading1";
import Heading2 from "../atom/Heading2";

type Props = {
    id: number
}

export default async function TaskDetail({ id }: Props) {
    const task = await getTaskDetail(id);

    return (
        <div className="grid grid-cols-1 gap-8 w-full">
            <div className="transition duration-200 rounded-lg border-white border-2 hover:border-black">
                <Heading1>{task.title}</Heading1>
            </div>
            <div>
                <Heading2>説明</Heading2>
                <div className="transition duration-200 rounded-lg border-white border-2 hover:border-black">
                    {task.description}
                </div>
            </div>

            <div>
                <Heading2>子タスク一覧</Heading2>
            </div>
        </div>
    )
}

async function getTaskDetail(id: number): Promise<Task> {
    const r = new MockTaskRepository();
    return r.getTask(id);
}