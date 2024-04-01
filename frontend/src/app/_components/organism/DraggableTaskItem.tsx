import { useDrag } from "react-dnd";
import TaskItem from "../molecule/TaskItem";

type Props = {
    id: number;
    title: string;
    priority: number;
    limitAt: Date;
    completed: boolean;
}

export default function DraggableTaskItem(props: Props) {
    const [{isDragging}, drag] = useDrag(() => ({
        type: "task",
        item: { id: props.id },
        collect: monitor => ({
            isDragging: !!monitor.isDragging(),
        })
    }))


    return (
        <div ref={drag} className={`${isDragging ? "hidden" : ""}`}>
            <TaskItem {...props} />
        </div>
    )
}