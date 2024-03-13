import { ReactNode } from "react";
import Subtext from "../atom/Subtext";

type Props = {
    label: string;
    children: ReactNode;
}

export default function ComponentWithLabel({ label, children }: Props) {
    return (
        <div className="grid grid-cols-[1fr_2fr]">
            <Subtext>{label}</Subtext>
            {children}
        </div>
    )
}