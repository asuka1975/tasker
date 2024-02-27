import { ComponentProps } from "react";

type Props = {

} & ComponentProps<"span">;

export default function Subtext({ children, ...props }: Props) {
    return (
        <span className="text-sm text-gray-400 truncate" { ... props } >{children}</span>
    );
}