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
                    .map((v, i) => <div key={i} className={`${v}`} />)
            }
        </div>
    )
}