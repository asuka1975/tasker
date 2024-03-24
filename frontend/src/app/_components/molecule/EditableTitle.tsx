"use client"

import { useState } from "react";
import Heading1 from "../atom/Heading1";
import Button from "../atom/Button";

type Props = {
    title: string;
    onSave: (title: string) => void;
}

export default function EditableTitle({ title, onSave }: Props) {
    const [editable, setEditable] = useState<boolean>(false);
    const [editValue, setEditValue] = useState<string>(title);

    return (
        !editable ?
            <div className="transition duration-200 rounded-lg border-white border-2 hover:border-black truncate" onClick={() => { setEditable(true) }}>
                <Heading1>{editValue}</Heading1>
            </div>
          : <div className="grid grid-cols-[1fr_8rem]">
                <input value={editValue} onChange={e => { setEditValue(e.target.value) }} className="text-3xl" />
                <Button className="justify-self-end" onClick={() => {
                    onSave(editValue);
                    setEditable(false);
                    setEditValue(editValue);
                }}>保存</Button>
            </div>
    )
}
