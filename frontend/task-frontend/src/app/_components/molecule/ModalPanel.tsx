import { ReactNode } from "react"
import CloseIconButton from "../atom/CloseIconButton";
import { twMerge } from "tailwind-merge";

type Props = {
    children: ReactNode;
    onClose: () => void;
    className?: string | undefined;
}

export default function ModalPanel({ children, onClose, className = "" }: Props) {

    return (
        <div className="grid grid-cols-[1fr_2em] grid-rows-[2em_1fr] bg-white rounded-lg p-8 gap-4">
            <div className="col-start-2 row-start-1"><CloseIconButton onClick={onClose} /></div>
            <div className="col-span-2 row-start-2">
                <div className={className}>
                    {children}
                </div>
            </div>
        </div>
    )
}