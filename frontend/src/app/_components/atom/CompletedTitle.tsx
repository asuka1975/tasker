"use client"

type Props = {
    children: string
};

export default function CompletedTitle({ children }: Props) {
    return (
        <span className="text-md text-gray-400 truncate line-through">{children}</span>
    )
}