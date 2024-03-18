type Props = {
    children: string
}

export default function Label({ children }: Props) {
    return (
        <div className="font-bold pt-4 pb-2">{children}</div>
    )
}