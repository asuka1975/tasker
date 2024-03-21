import Link from "next/link"

type Props = {
    name: string
    href: string
}

export default function LinkMenuItem({ name, href }: Props) {
    return (
        <Link className="transition hover:bg-gray-100 active:bg-gray-50 duration-100 px-4 py-2" href={href}>
            {name}
        </Link>
    )
}