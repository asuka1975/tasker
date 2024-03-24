import { ComponentProps, MouseEvent } from "react"
import IconButton from "./IconButton"
import LinkIconButton, { LinkIconButtonProps } from "./LinkIconButton"
import { twMerge } from "tailwind-merge";


type Props = {
    className: string
} & ComponentProps<"a">;

export default function CloseLinkIconButton({ className, ...props }: Props) {
    return (
        <a className={twMerge("transition duration-500 bg-white hover:bg-gray-100 active:bg-gray-50 active:duration-75 rounded-full text-gray-500 inline-block", className)} { ...props }>
            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" fill="currentColor"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>
        </a>
    )
}