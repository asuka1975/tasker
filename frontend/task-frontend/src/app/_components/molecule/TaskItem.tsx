import Marker from "../atom/Marker";
import Priority from "../atom/Priority";
import Title from "../atom/Title";

type Props = {
    title: string;
    priority: number;
    limitAt: Date;
}

export default function TaskItem({ title, priority }: Props) {
    return (
        <div className="grid grid-cols-[0.5rem_1fr_0.5rem] items-center gap-2">
            <Marker />
            <Title>{title}</Title>
            <Priority priority={priority} />
        </div>
    )
}