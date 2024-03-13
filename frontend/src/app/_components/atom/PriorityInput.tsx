"use client"

import { useState } from "react";
import { statusColors } from "./Priority";

type Props = {
    priority: number;
    onChange: (p: number) => void;
};

export default function PriorityInput({ priority, onChange }: Props) {
    const [priorityValue, setPriorityValue] = useState(priority);

    return (
        <div className="grid grid-cols-8">
            {
                statusColors
                    .map((v, i) => i <= priorityValue ? statusColors[priorityValue] : "")
                    .map((v, i) => <div key={i} className={`${v} hover:${calcHoverColor(v)}`} onClick={() => {
                        setPriorityValue(i)
                        onChange(i);
                    }} />)
            }
        </div>
    )
}

function calcHoverColor(colorClass: string): string {
    return "bg-gray-200";
}