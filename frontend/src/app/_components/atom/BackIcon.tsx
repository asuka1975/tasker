import { ComponentProps } from "react";

type Props = {

} & ComponentProps<"svg">;

export default function BackIcon(props: Props) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor" {...props}><path d="M640-80 240-480l400-400 71 71-329 329 329 329-71 71Z"/></svg>
    )
}