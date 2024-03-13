import { statusColors } from "./Priority"

type Props = {
    priority: number;
}

export default function PriorityView({ priority }: Props) {
    return (
        <div className="grid grid-cols-8">
            {
                statusColors
                    .map((v, i) => i <= priority ? statusColors[priority] : "")
                    .map(v => <div className={`${v}`} />)
            }
        </div>
    )
}