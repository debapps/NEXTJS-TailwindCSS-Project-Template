"use client";
import React from "react";
import AnimateHeading from "../components/AnimatedHeading";
import { signIn } from "next-auth/react";

export default function Login() {
    return (
        <main
            className="w-full min-h-screen bg-light-color dark:bg-dark-color 
            px-20 sm:px-10 py-40 sm:py-20 flex flex-col items-center justify-center overflow-x-hidden">
            <AnimateHeading text="Login with Social Apps." />
            <section
                className="w-[75vw] h-auto overflow-hidden bg-light-color/80 p-10
                border-2 border-solid border-dark-color rounded-xl shadow-lg shadow-pallete-color5
                flex flex-col justify-center items-center">
                <button
                    onClick={() => {
                        signIn("google", {
                            callbackUrl: "/dashboard",
                        });
                    }}
                    className="bg-red-600 hover:bg-red-600/80 text-white p-5 w-1/2 sm:w-full text-xl md:text-lg 
                    sm:text-base font-ubuntu font-bold border-2 border-solid border-dark-color 
                    rounded-lg">
                    Login by GOOGLE
                </button>
            </section>
        </main>
    );
}
