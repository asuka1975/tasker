import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

type Props = ComponentProps<"button">;

export default function Button({ children, className, ...props }: Props) {
    return (
        <button className={twMerge("px-4 py-2 text-lg bg-sky-400 text-white rounded-md", className)} { ...props }>{children}</button>
    )
}