"use client"

import ModalPanel from "@/app/_components/molecule/ModalPanel";
import Modal from "@/app/_components/organism/Modal";
import TaskDetail from "@/app/_components/organism/TaskDetail";
import { mockTaskRepository } from "@/app/_domain/repository/MockTaskRepository";
import { useRouter } from "next/navigation";
import { useState } from "react";

type Props = {
    params: {
        taskId: number
    }
}

export default function TaskDetailPage({ params }: Props) {
    const router = useRouter();

    return (
        <Modal>
            <ModalPanel onClose={() => { 
                router.push("/cookbook/"); 
                router.refresh(); 
                }} className="w-[50vw] h-[80vh]">
                <TaskDetail id={params.taskId} />
            </ModalPanel>
        </Modal>
    )
}