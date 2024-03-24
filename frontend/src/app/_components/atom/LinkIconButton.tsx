import { ReactNode, ComponentProps } from "react";
import { twMerge } from "tailwind-merge";
import Link, { LinkProps } from "next/link"

export type LinkIconButtonProps = {
    children?: ReactNode;
    className: string
} & LinkProps;

export default function LinkIconButton({ children, className, ...props }: LinkIconButtonProps) {
    return (
        <Link className={twMerge("transition duration-500 bg-white hover:bg-gray-100 active:bg-gray-50 active:duration-75 rounded-full text-gray-500 inline-block", className)} { ...props }>{children}</Link>
    )
}