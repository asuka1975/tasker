import { ReactNode } from "react"
import CloseIconButton from "../atom/CloseIconButton";

type Props = {
    children: ReactNode;
    onClose: () => void;
}

export default function ModalPanel({ children, onClose }: Props) {
    return (
        <div className="grid grid-cols-[1fr_2em] grid-rows-[2em_1fr] bg-white rounded-lg p-4">
            <div className="col-start-2 row-start-1"><CloseIconButton onClick={onClose} /></div>
            <div className="col-span-2 row-start-2">
                {children}
            </div>
        </div>
    )
}