"use client";

import { useState } from "react";

export default function BlurryLoading() {
    const imageURL =
        "https://images.unsplash.com/photo-1460904577954-8fadb262612c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2180&q=80";

    const [percent, setPercent] = useState(0);

    // This function maps one ranges of numbers
    // to another range of numbers.
    function scaleRange(number, inMin, inMax, outMin, outMax) {
        return (
            ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin
        );
    }

    function handleLoad(event) {
        // Get the DOM elements.
        const bg = event.target;
        const loadText = event.target.children[0];

        // Initialize the load value.
        let load = 0;

        // This function perform the blur effect.
        function blurEffect() {
            // Increment load counter.
            load++;

            if (load > 99) {
                //Stop the effect.
                clearInterval(intervalID);
            }

            // Increment the load counter.
            setPercent(load);

            // Blur the load counter.
            loadText.style.opacity = `${scaleRange(load, 0, 101, 0.5, 1)}`;

            // Visible the image.
            if (bg.classList.contains("blur-md")) {
                bg.classList.remove("blur-md");
            }
            bg.style.filter = `blur(${scaleRange(load, 0, 100, 50, 0)}px)`;
        }

        // Perform the blur effect on every 30 milli-seconds.
        const intervalID = setInterval(blurEffect, 30);
    }

    function getInitialState(event) {
        // Get the DOM elements.
        const bg = event.target;
        const loadText = event.target.children[0];

        bg.style.filter = `blur(50px)`;
        loadText.style.opacity = 0.5;

        setPercent(0);
    }

    return (
        <div className="flex justify-center items-center overflow-hidden">
            <div
                onMouseOver={handleLoad}
                onMouseOut={getInitialState}
                className="w-[1200px] h-[400px] rounded-lg relative blur-md"
                style={{
                    backgroundImage: `url('${imageURL}')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                }}>
                <p
                    className="text-pallete-color1 font-karla font-bold text-3xl 
                    absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    {`${percent}%`}
                </p>
            </div>
        </div>
    );
}
