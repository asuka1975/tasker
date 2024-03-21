"use client"

import { useState } from "react";
import ContextMenu from "../molecule/ContextMenu";
import MenuItem from "../atom/MenuItem";
import { taskSchema } from "@/app/_domain/types/Task";
import MenuIconButton from "../atom/MenuIconButton";
import LinkMenuItem from "../atom/LinkMenuItem";

type Props = {
    id: number
}


export default function TaskItemContextMenu({ id }: Props) {
    const [menuOpened, setMenuOpened] = useState(false);


    return (
        <div className="flex items-center w-6 h-full">
            <MenuIconButton className="w-6 h-6" onClick={() => { setMenuOpened(v => !v) }} />
            {
                menuOpened ?
                    <ContextMenu className="absolute" close={() => setMenuOpened(false)} tabIndex={-1}>
                        <LinkMenuItem name="追加" href={`/task/${id}/create`} />
                        <MenuItem name="削除" action={() => {}} />
                    </ContextMenu>
                    : null
            }
        </div>
    )
}