"use client"

import { ComponentProps } from "react"
import { twMerge } from "tailwind-merge";

type Props = {
    close: () => void;
} & ComponentProps<"div">;

export default function ContextMenu({ close, className, children, ...props }: Props) {
    return (
        <div className={twMerge("grid divide-y bg-white shadow-md", className)} { ...props } tabIndex={0} onBlur={close} ref={(node) => node?.focus()} onClick={close} >
            {children}
        </div>
    )
}