type Props = {
    children: string;
}

export default function CompletedHeading1({ children }: Props) {
    return (
    <h1 className="text-3xl text-gray-400 line-through">{children}</h1>
    )
}