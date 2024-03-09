"use client"

import dayjs from "dayjs"
import { useState } from "react";
import CalendarIcon from "./CalendarIcon";
import TimeIcon from "./TimeIcon";
import DateTimeView from "./DateTimeView";

type Props = {

}

export default function DateTimeInput({}: Props) {
    const [datetime, setDatetime] = useState<dayjs.Dayjs>(dayjs());

    return (
        <div>
            <input type="datetime-local" onChange={e => setDatetime(dayjs(e.target.value))} value={datetime.format('YYYY-MM-DDTHH:mm')}></input>
        </div>
    )
}