import { ReactNode } from "react"

type Props = {
    children: ReactNode
}

export default function Modal({ children }: Props) {
    return (
        <div className="flex items-center justify-center fixed w-screen h-screen top-0 left-0 bg-black bg-opacity-20">
            {children}
        </div>
    )
}