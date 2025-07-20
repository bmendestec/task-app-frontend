import { useState } from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import { NavbarComponent } from "../../../components/commons/Navbar";

export function TaskCalendar() {
    const [value, onChange] = useState(new Date);

    return (
        <div>
            <NavbarComponent />
            <Calendar className={"calendar-ui"} calendarType="gregory" onChange={onChange} value={value} />
        </div>
    )
}