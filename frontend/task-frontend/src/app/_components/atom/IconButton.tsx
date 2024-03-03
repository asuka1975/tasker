import { ComponentProps } from "react"
import { twMerge } from "tailwind-merge";

type Props = ComponentProps<"button">;

export default function IconButton({ className, children, ...props }: Props) {
    return (
        <button className={twMerge("transition duration-500 bg-white hover:bg-gray-100 active:bg-gray-50 active:duration-75 rounded-full text-gray-500", className)} { ...props }>
            {children}
        </button>
    )
}