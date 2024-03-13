"use client"

import { useState } from "react";
import ContextMenu from "../molecule/ContextMenu";
import MenuItem from "../atom/MenuItem";
import { taskSchema } from "@/app/_domain/types/Task";
import MenuIconButton from "../atom/MenuIconButton";

type Props = {
    id: number
}


export default function TaskItemContextMenu({ id }: Props) {
    const [menuOpened, setMenuOpened] = useState(false);


    return (
        <div>
            <MenuIconButton className="w-6 h-6" onClick={() => { setMenuOpened(v => !v) }} />
            {
                menuOpened ?
                    <ContextMenu className="absolute" close={() => setMenuOpened(false)} tabIndex={0}>
                        <MenuItem name="追加" action={async () => {
                            const task = await fetch(`/api/v1/cookbook/task/${id}/children`, {
                                method: 'POST',
                                body: JSON.stringify({
                                    title: "untitled",
                                    description: "",
                                    priority: 0,
                                    limitAt: new Date()
                                })
                            })
                            .then(r => r.json())
                            .then(j => taskSchema.parse(j))
                        }} />
                        <MenuItem name="削除" action={() => {}} />
                    </ContextMenu>
                    : null
            }
        </div>
    )
}