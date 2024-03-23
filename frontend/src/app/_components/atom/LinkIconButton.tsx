import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";
import Link, { LinkProps } from "next/link"

type Props = ComponentProps<"a">

export default function LinkIconButton({ children, className, ...props }: Props) {
    return (
        <a className={twMerge("transition duration-500 bg-white hover:bg-gray-100 active:bg-gray-50 active:duration-75 rounded-full text-gray-500 inline-block", className)} { ...props }>{children}</a>
    )
}