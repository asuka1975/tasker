"use client"

import ModalPanel from "@/app/_components/molecule/ModalPanel";
import Modal from "@/app/_components/organism/Modal";
import TaskDetail from "@/app/_components/organism/TaskDetail";
import { useRouter } from "next/navigation";

type Props = {
    params: {
        taskId: number
    }
}

export default function TaskDetailPage({ params }: Props) {
    const { back } = useRouter();

    return (
        <Modal>
            <ModalPanel onClose={back} className="w-[50vw] h-[80vh]">
                <TaskDetail id={params.taskId} />
            </ModalPanel>
        </Modal>
    )
}