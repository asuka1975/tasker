import { ComponentProps, MouseEvent } from "react"
import IconButton from "./IconButton"
import LinkIconButton from "./LinkIconButton"

type Props = ComponentProps<"a">

export default function ALinkIconButton({ ...props }: Props) {
    return (
        <LinkIconButton {...props}>
            a
        </LinkIconButton>
    )
}