import { ReactNode } from "react";
import { LinkProps } from "next/link";
import LinkIconButton, { LinkIconButtonProps } from "../atom/LinkIconButton";
import BackIcon from "../atom/BackIcon";
import { twMerge } from "tailwind-merge";
import LinkButton from "../atom/LinkButton";

type Props = LinkIconButtonProps;

export default function BackLinkButton({ children, className, ...props }: Props) {
    return (
        <LinkButton className={twMerge("flex text-black bg-white hover:bg-gray-50", className)} {...props}>
            <BackIcon className="w-6 h-6" />
            {children}
        </LinkButton>
    )
}