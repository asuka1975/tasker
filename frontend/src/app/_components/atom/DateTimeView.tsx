import dayjs from "dayjs"

type Props = {
    children: dayjs.Dayjs
}

export default function DateTimeView({ children }: Props) {
    return (
        <>{children.format('YYYY/MM/DD HH:mm')}</>
    )
}