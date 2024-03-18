"use client"

import ModalPanel from "@/app/_components/molecule/ModalPanel";
import Modal from "@/app/_components/organism/Modal";
import TaskFrom from "@/app/_components/organism/TaskForm";
import { useRouter } from "next/navigation";

type Props = {
}

export default function TaskFormPage({ }: Props) {
    const router = useRouter();

    return (
        <Modal>
            <ModalPanel onClose={() => { 
                router.push("/"); 
                router.refresh(); 
                }} className="w-[50vw] h-[80vh]">
                    <TaskFrom />
            </ModalPanel>
        </Modal>
    )
}