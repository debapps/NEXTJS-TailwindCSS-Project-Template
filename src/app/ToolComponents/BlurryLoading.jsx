"use client";

import { useEffect, useRef, useState } from "react";

export default function BlurryLoading() {
    // The Image URL.
    const imageURL =
        "https://images.unsplash.com/photo-1460904577954-8fadb262612c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2180&q=80";

    // The Parcentage Loading hook
    const [percent, setPercent] = useState(0);

    // The blurry image reference.
    const blurryImg = useRef(null);

    // Load Image initially.
    useEffect(() => {
        getInitialState();
        handleLoad();
    }, []);

    // This function handles the loading of the image.
    function handleLoad() {
        // Get the DOM elements.
        const bg = blurryImg.current;
        const loadText = blurryImg.current.children[0];

        // Initialize the load value.
        let load = 0;

        // Perform the blur effect on every 30 milli-seconds.
        const intervalID = setInterval(blurEffect, 30);

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
            bg.style.filter = `blur(${scaleRange(load, 0, 100, 30, 0)}px)`;
        }
    }

    // This function maps one ranges of numbers
    // to another range of numbers.
    function scaleRange(number, inMin, inMax, outMin, outMax) {
        return (
            ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin
        );
    }

    // This function make the image in its initial state.
    function getInitialState() {
        // Get the DOM elements.
        const bg = blurryImg.current;
        const loadText = blurryImg.current.children[0];

        // Set the initial style.
        bg.style.filter = `blur(30px)`;
        loadText.style.opacity = 0.5;

        // Set the percentage loading to zero.
        setPercent(0);
    }

    return (
        <div className="flex justify-center items-center overflow-hidden">
            <div
                ref={blurryImg}
                // onMouseOver={handleLoad}
                onClick={handleLoad}
                className="w-[85vw] h-[400px] rounded-lg relative"
                style={{
                    backgroundImage: `url('${imageURL}')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                }}>
                <p
                    className="text-pallete-color1/80 font-karla font-bold text-3xl 
                    absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    {`${percent}%`}
                </p>
            </div>
        </div>
    );
}
