type Props = {
    title: string
};

export default function Title({ title }: Props) {
    return (
        <span className="text-md text-black">{title}</span>
    )
}