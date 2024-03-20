import { ReactNode } from "react"
import CloseIconButton from "../atom/CloseIconButton";
import { twMerge } from "tailwind-merge";
import CloseLinkIconButton from "../atom/CloseLinkIconButton";

type Props = {
    children: ReactNode;
    closeLink: string;
    className?: string | undefined;
}

export default function ModalPanel({ children, closeLink, className = "" }: Props) {

    return (
        <div className="grid grid-cols-[1fr_2em] grid-rows-[2em_1fr] bg-white rounded-lg p-8 gap-4">
            <div className="col-start-2 row-start-1">
                <CloseLinkIconButton className="p-2 w-full h-full" href={closeLink} />
            </div>
            <div className="col-span-2 row-start-2">
                <div className={className}>
                    {children}
                </div>
            </div>
        </div>
    )
}