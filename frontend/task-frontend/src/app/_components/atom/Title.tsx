"use client"

type Props = {
    children: string
};

export default function Title({ children }: Props) {
    return (
        <span className="text-md text-black truncate">{children}</span>
    )
}