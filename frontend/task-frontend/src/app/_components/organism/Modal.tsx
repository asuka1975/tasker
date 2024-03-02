import { ReactNode } from "react"

type Props = {
    children: ReactNode
}

export default function Modal({ children }: Props) {
    return (
        <div className="fixed w-screen h-screen top-0 left-0">
            {children}
        </div>
    )
}