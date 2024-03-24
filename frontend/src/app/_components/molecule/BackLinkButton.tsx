import { ReactNode } from "react";
import { LinkProps } from "next/link";
import LinkIconButton, { LinkIconButtonProps } from "../atom/LinkIconButton";
import BackIcon from "../atom/BackIcon";

type Props = LinkIconButtonProps;

export default function BackLinkButton({ children, ...props }: Props) {
    return (
        <LinkIconButton {...props}>
            <BackIcon />
            {children}
        </LinkIconButton>
    )
}