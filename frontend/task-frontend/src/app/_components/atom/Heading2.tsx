type Props = {
    children: string;
}

export default function Heading2({ children }: Props) {
    return (
    <h1 className="text-2xl">{children}</h1>
    )
}