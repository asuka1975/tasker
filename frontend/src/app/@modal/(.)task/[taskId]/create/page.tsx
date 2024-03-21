import ModalPanel from "@/app/_components/molecule/ModalPanel";
import Modal from "@/app/_components/organism/Modal";
import SubtaskForm from "@/app/_components/organism/SubtaskForm";
import TaskFrom from "@/app/_components/organism/TaskForm";
import { useRouter } from "next/navigation";

type Props = {
    params: {
        taskId: number
    }
}

export default function TaskFormPage({ params }: Props) {
    return (
        <Modal>
            <ModalPanel closeLink="/" className="w-[50vw] h-[80vh]">
                <SubtaskForm parentId={params.taskId} />
            </ModalPanel>
        </Modal>
    )
}