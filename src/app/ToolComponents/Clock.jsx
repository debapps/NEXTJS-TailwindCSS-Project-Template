"use client";
import { getFormattedDate, getFormattedTime } from "@/utilities/formatDate";
import { useEffect, useRef, useState } from "react";

export default function Clock() {
    // All the references.
    // const hourNeedle = useRef(null);
    // const minuteNeedle = useRef(null);
    // const secondNeedle = useRef(null);

    // The time & date hooks.
    const [time, setTime] = useState(null);
    const [date, setDate] = useState(null);
    const [hourAngle, setHourAngle] = useState(null);
    const [minuteAngle, setMinuteAngle] = useState(null);
    const [secondAngle, setSecondAngle] = useState(null);

    // Get the real time and date.
    useEffect(() => {
        // Get the time on each and every minute.
        setInterval(() => {
            const currentDateTime = new Date();
            setTime(getFormattedTime(currentDateTime));
            setMinuteAngle(6 * currentDateTime.getMinutes());
            // Get the current hour.
            let hour = currentDateTime.getHours();

            if (hour > 12) {
                hour = hour - 12;
            }

            setHourAngle(hour * 30 + currentDateTime.getMinutes() / 12);
        }, 60);

        setInterval(() => {
            const currentDateTime = new Date();
            setSecondAngle(6 * currentDateTime.getSeconds());
        }, 1);

        // Get the date on each and every hour.
        setInterval(() => {
            setDate(getFormattedDate(new Date()));
        }, 3600);
    }, [time, date]);

    return (
        <div
            className="w-full flex justify-center items-center animate-zoom-in 
            py-16 md:py-10 sm:py-5 z-0">
            <div className="flex flex-col justify-between items-center">
                {/* Analog Clock */}
                <div
                    className="w-52 h-52 rounded-full m-14 border-4 border-solid border-dark-color
                  dark:border-light-color bg-white dark:bg-dark-color relative 
                    shadow-lg shadow-dark-color dark:shadow-pallete-color1">
                    <div
                        className="w-[2px] h-12 absolute top-1/2 left-1/2 
                        bg-black dark:bg-white"
                        style={{
                            transformOrigin: "bottom center",
                            transform: `translate(-50%, -100%) rotate(${hourAngle}deg)`,
                        }}
                    />
                    <div
                        className="w-[2px] h-[75px] absolute top-1/2 left-1/2 
                        bg-black dark:bg-white"
                        style={{
                            transformOrigin: "bottom center",
                            transform: `translate(-50%, -100%) rotate(${minuteAngle}deg)`,
                        }}
                    />
                    <div
                        className="w-[2px] h-24 absolute top-1/2 left-1/2 
                        bg-pallete-color1"
                        style={{
                            transformOrigin: "bottom center",
                            transform: `translate(-50%, -100%) rotate(${secondAngle}deg)`,
                        }}
                    />
                    <div
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                        w-2 h-2 rounded-full border-2 border-solid border-red-700"
                    />
                </div>

                {/* Digital Clock. */}
                <div className="text-xl font-ubuntu px-2 py-4 m-2 bg-dark-color dark:bg-pallete-color1 text-light-color">
                    {time}
                </div>
                <div className="text-lg font-ubuntu px-2 py-4 m-2 text-pallete-color3 dark:text-pallete-color1">
                    {date}
                </div>
            </div>
        </div>
    );
}
