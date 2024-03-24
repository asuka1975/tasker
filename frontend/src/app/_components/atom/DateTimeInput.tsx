"use client"

import dayjs from "dayjs"
import { useState } from "react";
import CalendarIcon from "./CalendarIcon";
import TimeIcon from "./TimeIcon";
import DateTimeView from "./DateTimeView";

type Props = {
    onChange: (datetime: dayjs.Dayjs) => void
    datetime: Date
}

export default function DateTimeInput({onChange, datetime}: Props) {
    const [datetime_, setDatetime] = useState<dayjs.Dayjs>(dayjs(datetime));

    return (
        <div>
            <input type="datetime-local" onChange={e => {
                const datetime = dayjs(e.target.value)
                onChange(datetime)
                setDatetime(datetime)
            }} value={datetime_.format('YYYY-MM-DDTHH:mm')}></input>
        </div>
    )
}