import { useState } from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';

export function TaskCalendar() {
    const [value, onChange] = useState(new Date);

    return (
        <div>
            <Calendar onChange={onChange} value={value} />
        </div>
    )
}