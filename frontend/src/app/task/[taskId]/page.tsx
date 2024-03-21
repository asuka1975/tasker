import TaskDetailSsr from "@/app/_components/organism/TaskDetailSsr"

type Props = {
    params: {
        taskId: number
    }
}

export default function Page({ params }: Props) {
    return (
        <div className="w-screen h-screen px-[20%]">
            <div className="h-screen py-4">
                <TaskDetailSsr id={params.taskId} />
            </div>
        </div>
    )
}