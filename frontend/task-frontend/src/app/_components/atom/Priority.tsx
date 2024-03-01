"use client"

type Props = {
    priority: number
};

const statusColors = [
    "bg-gray-300",
    "bg-blue-300",
    "bg-cyan-300",
    "bg-emerald-300",
    "bg-lime-300",
    "bg-amber-300",
    "bg-orange-300",
    "bg-red-300",
]

export default function Priority({ priority }: Props) {
    const statusColor = statusColors[Math.max(0, Math.min(priority, 7))]
    return (
        <div className={`w-2 h-2 rounded-full ${statusColor}`}></div>
    )
}