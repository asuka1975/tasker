"use client"

import dayjs from "dayjs";
import LimitInfoIcon from "../atom/LimitInfoIcon";
import Priority from "../atom/Priority";
import Title from "../atom/Title";
import LimitOverIcon from "../atom/LimitOverIcon";
import LimitWarningIcon from "../atom/LimitWarningIcon";
import Link from "next/link";

type Props = {
    id: number;
    title: string;
    priority: number;
    limitAt: Date;
}

export default function TaskItem({ id, title, priority, limitAt }: Props) {
    const now = dayjs(new Date());
    const diff = dayjs(limitAt).diff(now, 'day');

    return (
        (now.isBefore(limitAt) && diff >= 14) ?
            <div className="grid grid-cols-[1fr_0.5rem] items-center gap-2">
                <Title>{title}</Title>
                <Priority priority={priority} />
            </div>
          : <div className="grid grid-cols-[1rem_1fr_0.5rem] items-center gap-2">
                {
                    now.isAfter(limitAt) ? 
                        <LimitOverIcon />
                      : diff < 7 ? <LimitWarningIcon />
                          : <LimitInfoIcon />
                }
                <Link href={`/cookbook/task/${id}`}>
                    <Title>
                        {title}
                    </Title>
                </Link>
                <Priority priority={priority} />
            </div>

    )
}