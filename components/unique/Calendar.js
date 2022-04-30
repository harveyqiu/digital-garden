import React, { useState } from "react";
import dayjs from 'dayjs'
import Link from 'next/link'

export default function Calendar({updateDates}) {
    const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
    const [monthBase, setMonthBase] = useState(dayjs());

    function Placeholder () {
        const weekDayOfFirstDayOfMonth = monthBase.date(1).day()
        let elements = []
        for(let i =0;i<weekDayOfFirstDayOfMonth;i++) {
            elements.push(<div className="day-container"></div>)
        }
        return elements;
    }

    function Day() {
        const endDayOfThisMonth = monthBase.endOf('month')
        let elements = []
        for(let i =1;i<=endDayOfThisMonth.date();i++) {
            const day = monthBase.date(i).format('YYYY-MM-DD')
            const formated = monthBase.date(i).format('YYYYMMDD')
            if (updateDates.includes(day)) {
                elements.push(<div key={i} className="day-container">
                    <div className="day highlight">
                        <Link href={`/${formated}`}><div>{i}</div></Link>
                    </div>
                </div>)
            } else {
                elements.push(<div className="day-container" key={i}><div className="day">{i}</div></div>)
            }
        }
        return elements;
    }

    return (
        <div>
            <div className="calendar-header">
                <div className="action" onClick={() => {setMonthBase(monthBase.subtract(1, 'month'))}}>
                    Previous Month
                </div>
                <div className="month">
                    {months[monthBase.month()]}
                </div>
                <div className="action" onClick={() => {setMonthBase(monthBase.add(1, 'month'))}}>
                    Next Month
                </div>
            </div>    
            <div className="calendar-week">
                <div>
                    SUN
                </div>
                <div>
                    MON
                </div>
                <div>
                    TUE
                </div>
                <div>
                    WED
                </div>
                <div>
                    THU
                </div>
                <div>
                    FRI
                </div>
                <div>
                    SAT
                </div>
            </div>
            <div className="calendar-main">
                <Placeholder />
                <Day />
            </div>
        </div>
    )
}