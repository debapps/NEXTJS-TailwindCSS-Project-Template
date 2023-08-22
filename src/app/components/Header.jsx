"use client";
import Logo from "./Logo";
import ModeIcons from "./ModeIcons";
import NavBar from "./NavBar";
import { navData } from "../../../public/data/navData";
import { useEffect, useState } from "react";

export default function Header() {
    // The scroll position hook.
    const [y, setY] = useState(0);

    // The scroll direction hook.
    const [scrollUP, setScrollUP] = useState(true);

    // Tracking the window scroll event.
    useEffect(() => {
        window.addEventListener("scroll", (e) => handleScroll(e));
    });

    // This function determines if scrolling up or down.
    function handleScroll(event) {
        const window = event.currentTarget;

        if (y > window.scrollY) {
            setScrollUP(true);
        } else if (y < window.scrollY) {
            setScrollUP(false);
        }

        setY(window.scrollY);
    }

    return (
        <header
            className={`px-4 py-8 w-full bg-light-color/90 dark:bg-dark-color/90 
            flex flex-row justify-between items-center overflow-hidden fixed z-50
            shadow-lg shadow-pallete-color4 dark:shadow-pallete-color5
            ${scrollUP ? "block" : "hidden"}`}>
            <div className="order-1 md:order-2 sm:order-2">
                <Logo text="Debaditya Bhar" />
            </div>
            <div className="order-2 md:order-1 sm:order-1">
                <NavBar navData={navData} />
            </div>
            <div className="order-3">
                <ModeIcons />
            </div>
        </header>
    );
}
