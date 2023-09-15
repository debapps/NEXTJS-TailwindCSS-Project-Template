"use client";

import { useEffect } from "react";
import GradientText from "./components/GradientText";

export default function GlobalError({ error, reset }) {
    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <html>
            <body>
                <main
                    className="w-full min-h-screen bg-light-color dark:bg-dark-color 
            px-20 sm:px-10 py-40 sm:py-5 flex flex-col items-center justify-center overflow-x-hidden">
                    <GradientText sx="text-7xl font-ubuntu">
                        OPPS!! Something went wrong!
                    </GradientText>
                    <p>Please check your connection ...</p>
                    <button
                        className="text-xl font-bold font-karla bg-dark-color text-light-color p-5
                        rounded-md hover:opacity-80 shadow-md active:scale-95"
                        onClick={() => reset()}>
                        Try Again
                    </button>
                </main>
            </body>
        </html>
    );
}
