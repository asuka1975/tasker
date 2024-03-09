type Props = {
    name: string
    action: () => void;
}

export default function MenuItem({ name, action }: Props) {
    return (
        <div className="transition hover:bg-gray-100 active:bg-gray-50 duration-100 px-4 py-2" onClick={action}>
            {name}
        </div>
    )
}