import { MouseEvent } from "react"

type Props = {
    onClick: (event: MouseEvent<HTMLButtonElement>) => void
}

export default function CloseIconButton({ onClick }: Props) {
    return (
        <button onClick={onClick} className="transition duration-500 bg-white hover:bg-gray-100 active:bg-gray-50 active:duration-75 rounded-full p-2 text-gray-500">
            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" fill="currentColor"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>
        </button>
    )
}