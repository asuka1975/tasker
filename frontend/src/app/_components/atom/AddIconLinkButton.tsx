import { ComponentProps, MouseEvent } from "react"
import IconButton from "./IconButton"
import LinkIconButton from "./LinkIconButton"

type Props = ComponentProps<"a">

export default function AddLinkIconButton({ ...props }: Props) {
    return (
        <LinkIconButton {...props}>
            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"/></svg>
        </LinkIconButton>
    )
}