import LinkButton from "../atom/LinkButton"

type Props = {

}

export default function Header({  }: Props) {
    return (
        <div className="grid grid-cols-[5rem_1fr_5rem] gap-4 p-4 w-full shadow-md shadow-gray-500">
            <LinkButton href="/task/create" className="col-start-3">追加</LinkButton>
        </div>
    )
}