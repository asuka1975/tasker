"use client"

import { useState } from "react";
import Heading1 from "../atom/Heading1";
import Button from "../atom/Button";

type Props = {
    content: string;
    onSave: (title: string) => void;
}

export default function EditableText({ content, onSave }: Props) {
    const [editable, setEditable] = useState<boolean>(false);
    const [editValue, setEditValue] = useState<string>(content);

    return (
        !editable ?
            <div className="transition duration-200 rounded-lg border-white border-2 hover:border-black h-full" onClick={() => { setEditable(true) }}>
                {editValue}
            </div>
          : <div className="flex flex-col h-full gap-2">
                <div className="flex grow self-stretch">
                    <textarea className="w-full p-1 self-stretch" value={editValue} onChange={e => { setEditValue(e.target.value) }} />
                </div>
                <div className="flex flex-row-reverse">
                    <Button className="" onClick={() => {
                        onSave(editValue);
                        setEditable(false);
                        setEditValue(editValue);
                    }}>保存</Button>
                </div>
            </div>
    )
}