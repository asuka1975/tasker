"use client"

import { ReactNode } from "react"
import { DndProvider } from "react-dnd"
import { HTML5Backend } from "react-dnd-html5-backend"

type Props = {
    children: ReactNode
}

export default function TaskDndProvider({ children }: Props) {
    return (
        <DndProvider backend={HTML5Backend}>
            {children}
        </DndProvider>
    )
}