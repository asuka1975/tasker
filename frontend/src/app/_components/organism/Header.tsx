import { ReactNode } from "react"
import LinkButton from "../atom/LinkButton"

type Props = {
    children?: ReactNode
}

export default function Header({ children }: Props) {
    return (
        <div className="grid grid-cols-[5rem_1fr_5rem] gap-4 p-4 mb-4 w-full shadow-md shadow-gray-500">
            {children}
        </div>
    )
}