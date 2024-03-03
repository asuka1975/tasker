import { ComponentProps, MouseEvent } from "react"
import IconButton from "./IconButton"

type Props = ComponentProps<"button">

export default function CloseIconButton({ ...props }: Props) {
    return (
        <IconButton {...props}>
            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" fill="currentColor"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>
        </IconButton>
    )
}