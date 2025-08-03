// React core imports
import React, { useEffect, useState, useRef } from "react";
import "./Analog.css";

// =======================
// CircleRing Component
// =======================

/**
 * Renders a circular ring of labels (e.g., seconds, minutes, etc.).
 * Props:
 * - count: number of items in the circle
 * - size: distance from the center
 * - activeIndex: which item is currently active
 * - className: CSS class to apply
 * - style: additional styles
 * - startFromOne: whether to start labels from 1
 * - renderLabel: custom label rendering function
 */
const CircleRing = ({ count, size, activeIndex, className, style, startFromOne = false, renderLabel }) => {
    const items = [];
    const step = 360 / count;

    for (let i = 0; i < count; i++) {
        const angle = (i * step - activeIndex * step + 360) % 360;

        // Opacity: brighter on the right (0°), dimmer on the left (180°)
        const angleRad = angle * (Math.PI / 180);
        const cosine = Math.cos(angleRad);
        const opacity = 0.2 + 0.8 * ((cosine + 1) / 2);

        const label = renderLabel
            ? renderLabel(i)
            : String(startFromOne ? i + 1 : i).padStart(2, '0');

        items.push(
            <span
                key={i}
                className={i === activeIndex ? "active-second" : ""}
                style={{ transform: `rotate(${i * step}deg) translateX(${size}px)`, opacity }}
            >
                {label}
            </span>
        );
    }

    return (
        <div className={`${className} centered-children`} style={style}>
            {items}
        </div>
    );
};

// =======================
// AnalogRing Component
// =======================

export default function AnalogRing() {
    // -------------------------------
    // Constants
    // -------------------------------
    const weekdayNames = [ "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat" ];
    const monthNames = [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ];

    const getDaysInMonth = (year, month) => new Date(year, month + 1, 0).getDate();

    // -------------------------------
    // State: Time values
    // -------------------------------
    const now = new Date();
    const [ second, setSecond ] = useState(now.getSeconds());
    const [ minute, setMinute ] = useState(now.getMinutes());
    const [ hour, setHour ] = useState(now.getHours());
    const [ day, setDay ] = useState(now.getDate());
    const [ month, setMonth ] = useState(now.getMonth());
    const [ weekday, setWeekday ] = useState(now.getDay());

    // -------------------------------
    // State: Ring rotations
    // -------------------------------
    const [ secondsRotation, setSecondsRotation ] = useState((-360 / 60) * second);
    const [ minutesRotation, setMinutesRotation ] = useState((-360 / 60) * minute);
    const [ hoursRotation, setHoursRotation ] = useState((-360 / 24) * hour);
    const [ monthsRotation, setMonthsRotation ] = useState((-360 / 12) * month);
    const [ weekdayRotation, setWeekdayRotation ] = useState((-360 / 7) * weekday);

    const initialDay = now.getDate();
    const initialDaysInMonth = getDaysInMonth(now.getFullYear(), now.getMonth());
    const initialDayStep = 360 / initialDaysInMonth;
    const [ daysRotation, setDaysRotation ] = useState(-initialDayStep * (initialDay - 1));

    // -------------------------------
    // Refs to track previous time
    // -------------------------------
    const prevSecondRef = useRef(second);
    const prevMinuteRef = useRef(minute);
    const prevHourRef = useRef(hour);
    const prevMonthRef = useRef(month);
    const prevWeekdayRef = useRef(weekday);

    // -------------------------------
    // Effect: Update time every second
    // -------------------------------
    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date();

            // Current time values
            const currentSecond = now.getSeconds();
            const currentMinute = now.getMinutes();
            const currentHour = now.getHours();
            const currentDay = now.getDate();
            const currentMonth = now.getMonth();
            const currentWeekday = now.getDay();

            // Previous values
            const prevSecond = prevSecondRef.current;
            const prevMinute = prevMinuteRef.current;
            const prevHour = prevHourRef.current;
            const prevMonth = prevMonthRef.current;
            const prevWeekday = prevWeekdayRef.current;

            // Calculate diffs
            let secondsDiff = currentSecond - prevSecond;
            let minutesDiff = currentMinute - prevMinute;
            let hoursDiff = currentHour - prevHour;
            let monthsDiff = currentMonth - prevMonth;
            let weekdayDiff = currentWeekday - prevWeekday;

            // Handle wrap-around cases
            if (prevSecond === 59 && currentSecond === 0) secondsDiff = 1;
            if (prevMinute === 59 && currentMinute === 0) minutesDiff = 1;
            if (prevHour === 23 && currentHour === 0) hoursDiff = 1;
            if (prevMonth === 11 && currentMonth === 0) monthsDiff = 1;
            if (prevWeekday === 6 && currentWeekday === 0) weekdayDiff = 1;

            // Update seconds ring
            if (secondsDiff === 1 || secondsDiff === -59) {
                setSecondsRotation((prev) => prev - 360 / 60);
                setSecond(currentSecond);
                prevSecondRef.current = currentSecond;
            }

            // Update minutes ring
            if (minutesDiff === 1 || minutesDiff === -59) {
                setMinutesRotation((prev) => prev - 360 / 60);
                setMinute(currentMinute);
                prevMinuteRef.current = currentMinute;
            }

            // Update hours ring
            if (hoursDiff === 1 || hoursDiff === -23) {
                setHoursRotation((prev) => prev - 360 / 24);
                setHour(currentHour);
                prevHourRef.current = currentHour;
            }

            // Update weekday ring
            if (weekdayDiff === 1 || weekdayDiff === -6) {
                setWeekdayRotation((prev) => prev - 360 / 7);
                setWeekday(currentWeekday);
                prevWeekdayRef.current = currentWeekday;
            }

            // Update days ring (rotation based on number of days in the current month)
            const daysInMonth = getDaysInMonth(now.getFullYear(), now.getMonth());
            const step = 360 / daysInMonth;
            setDaysRotation(-step * (currentDay - 1));
            setDay(currentDay);

            // Update months ring
            if (monthsDiff === 1 || monthsDiff === -11) {
                setMonthsRotation((prev) => prev - 360 / 12);
                setMonth(currentMonth);
                prevMonthRef.current = currentMonth;
            }
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    // -------------------------------
    // Render Clock Rings
    // -------------------------------
    return (
        <div>
            {/* Decorative Elements */}
            <div className="clock-highlight-box"/>
            <div className="colon-indicator" style={{ transform: "translate(375px, -55%)" }}>:</div>
            <div className="colon-indicator" style={{ transform: "translate(325px, -55%)" }}>:</div>
            <div style={{ fontSize: 50, fontWeight: "bold" }}>{new Date().getFullYear()}</div>

            {/* Seconds Ring */}
            <CircleRing
                count={60}
                size={400}
                activeIndex={second}
                className="second"
                style={{ transform: `rotate(${secondsRotation}deg)` }}
            />

            {/* Minutes Ring */}
            <CircleRing
                count={60}
                size={350}
                activeIndex={minute}
                className="second"
                style={{ transform: `rotate(${minutesRotation}deg)` }}
            />

            {/* Hours Ring */}
            <CircleRing
                count={24}
                size={300}
                activeIndex={hour}
                className="second"
                style={{ transform: `rotate(${hoursRotation}deg)` }}
            />

            {/* Days Ring */}
            <CircleRing
                count={getDaysInMonth(new Date().getFullYear(), new Date().getMonth())}
                size={175}
                activeIndex={day - 1}
                className="second"
                style={{ transform: `rotate(${daysRotation}deg)` }}
                startFromOne={true}
            />

            {/* Months Ring */}
            <CircleRing
                count={12}
                size={100}
                activeIndex={month}
                className="second"
                style={{ transform: `rotate(${monthsRotation}deg)` }}
                startFromOne={true}
                renderLabel={(i) => monthNames[i]}
            />

            {/* Weekdays Ring */}
            <CircleRing
                count={7}
                size={230}
                activeIndex={weekday}
                className="second"
                style={{ transform: `rotate(${weekdayRotation}deg)` }}
                startFromOne={true}
                renderLabel={(i) => weekdayNames[i]}
            />
        </div>
    );
}