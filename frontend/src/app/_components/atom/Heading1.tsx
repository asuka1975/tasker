

type Props = {
    children: string;
}

export default function Heading1({ children }: Props) {
    return (
    <h1 className="text-3xl">{children}</h1>
    )
}