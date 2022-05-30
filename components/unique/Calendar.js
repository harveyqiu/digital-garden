import React, { useState } from "react";
import dayjs from 'dayjs'
import Link from 'next/link'
import styled from "styled-components";

export default function Calendar({updateDates}) {
    const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
    const [monthBase, setMonthBase] = useState(dayjs());

    function Placeholder () {
        const weekDayOfFirstDayOfMonth = monthBase.date(1).day()
        let elements = []
        for(let i =0;i<weekDayOfFirstDayOfMonth;i++) {
            elements.push(<DayContainer></DayContainer>)
        }
        return elements;
    }

    function Days() {
        const endDayOfThisMonth = monthBase.endOf('month')
        let elements = []
        for(let i =1;i<=endDayOfThisMonth.date();i++) {
            const day = monthBase.date(i).format('YYYY-MM-DD')
            const formated = monthBase.date(i).format('YYYYMMDD')
            if (updateDates.includes(day)) {
                elements.push(<DayContainer key={i} >
                    <HighlightedDay>
                        <Link href={`/${formated}`}><div>{i}</div></Link>
                    </HighlightedDay>
                </DayContainer>)
            } else {
                elements.push(<DayContainer key={i}>
                    <Day>{i}</Day>
                </DayContainer>)
            }
        }
        return elements;
    }

    return (
        <>
            <CalendarHeader>
                <Action onClick={() => {setMonthBase(monthBase.subtract(1, 'month'))}}>
                    Previous Month
                </Action>
                <Month>
                    {months[monthBase.month()]}
                </Month>
                <Action onClick={() => {setMonthBase(monthBase.add(1, 'month'))}}>
                    Next Month
                </Action>
            </CalendarHeader>    
            <CalendarWeek>
                <CalendarWeekday>
                    SUN
                </CalendarWeekday>
                <CalendarWeekday>
                    MON
                </CalendarWeekday>
                <CalendarWeekday>
                    TUE
                </CalendarWeekday>
                <CalendarWeekday>
                    WED
                </CalendarWeekday>
                <CalendarWeekday>
                    THU
                </CalendarWeekday>
                <CalendarWeekday>
                    FRI
                </CalendarWeekday>
                <CalendarWeekday>
                    SAT
                </CalendarWeekday>
            </CalendarWeek>
            <CalendarMain>
                <Placeholder />
                <Days />
            </CalendarMain>
            <TipsEnglish>
                Click the date to check my diaries posted on that date.  
            </TipsEnglish>
            <TipsChinese>
                点击日期查看当天发布的「无意识日记」。
            </TipsChinese>
        </>
    )
}


const TipsEnglish = styled.div`
    padding-top: 50px;
    text-align: center;
    font-family: "LXGW Bright";
`

const TipsChinese = styled.div`
    padding: 20px;
    text-align: center;
`

const DayContainer = styled.div`
    width: 14.28%;
    height: 60px;
    display: inline-block;
    text-align: center;
    align-self: center;
    line-height: 60px;
`

const HighlightedDay = styled.div`
    font-family: "EB Garamond";
    height: 60px;
    margin: auto;
    width: 60px;
    background-color: #04A5BB;
    border-radius: 30px;
    color: aliceblue;
`

const Day = styled.div`
    font-family: "EB Garamond";
    height: 60px;
    margin: auto;
    width: 60px;
`

const Action  = styled.div`
    align-content: center;
    font-size: 1.2em;
`

const Month = styled.div`
    font-size: 2em;
    margin-top: -20px;
`

const CalendarHeader  =styled.div`
    height: 60px;
    display: flex;
    justify-content: space-evenly;
    font-family: "EB Garamond";
`

const CalendarWeek  = styled.div`
    width: 100%;
    height: 50px;
`

const CalendarWeekday = styled.div`
    width: 14.28%;
    height: 50px;
    display: inline-block;
    text-align: center;
    font-family: "EB Garamond";
`

const CalendarMain  = styled.div`
    width: 100%;
`