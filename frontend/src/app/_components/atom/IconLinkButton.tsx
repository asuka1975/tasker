import { ReactNode } from "react"
import { twMerge } from "tailwind-merge";
import Link, { LinkProps } from "next/link";

type Props = LinkProps & {
    className?: string | undefined
    children: ReactNode
};

export default function IconLinkButton({ className, children, ...props }: Props) {
    return (
        <Link className={twMerge("transition duration-500 bg-white hover:bg-gray-100 active:bg-gray-50 active:duration-75 rounded-full text-gray-500", className)} { ...props }>
            {children}
        </Link>
    )
}