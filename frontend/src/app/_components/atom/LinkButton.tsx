import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

type Props = ComponentProps<"a">;

export default function LinkButton({ children, className, ...props }: Props) {
    return (
        <a className={twMerge("px-4 py-2 text-lg bg-sky-400 text-white rounded-md hover:bg-sky-500 flex justify-center items-center", className)} { ...props }>{children}</a>
    )
}