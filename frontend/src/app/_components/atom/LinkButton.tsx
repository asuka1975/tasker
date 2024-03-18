import { ComponentProps, ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import Link, { LinkProps } from "next/link"

type Props = LinkProps & {
    children: ReactNode;
    className: string
};

export default function LinkButton({ children, className, ...props }: Props) {
    return (
        <Link className={twMerge("px-4 py-2 text-lg bg-sky-400 text-white rounded-md hover:bg-sky-500 flex justify-center items-center", className)} { ...props }>{children}</Link>
    )
}