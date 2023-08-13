"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function NavBar({ navData }) {
    // Get the current pathname.
    const path = usePathname();

    // Hamburger menu open/close state.
    const [isOpen, setIsOpen] = useState(false);

    // This function toggles the open/close state of the hamburger menu.
    function toggleMenu() {
        setIsOpen(!isOpen);
    }

    // This function generates the navigation links from the navidation data.
    function getNavLinks(menu = false) {
        return navData.map((navItem, idx) => {
            return (
                <Link
                    className="font-karla text-xl font-semibold text-pallete-color3 
                    dark:text-pallete-color5 relative group"
                    key={idx}
                    href={navItem.href}
                    onClick={() => {
                        menu ? toggleMenu() : null;
                    }}>
                    {navItem.title}
                    <span
                        className={`inline-block h-[2px] bg-pallete-color1 absolute 
                        left-0 bottom-0 group-hover:w-full transition-[width] duration-300 
                        ease-linear ${
                            path === navItem.href ? "w-full" : "w-0"
                        }`}
                    />
                </Link>
            );
        });
    }

    return (
        <>
            {/* Hamburger Menu for the small and Medium screens (Mobiles and Tablets). */}
            <button
                className="lg:hidden flex flex-col justify-center items-center relative"
                onClick={toggleMenu}>
                <span
                    className={`block w-5 h-0.5 bg-dark-color dark:bg-pallete-color5  ${
                        isOpen ? "rotate-45 translate-y-1/2" : "-translate-y-1"
                    }`}></span>
                <span
                    className={`w-5 h-0.5 bg-dark-color dark:bg-pallete-color5 ${
                        isOpen ? "hidden" : "block"
                    }`}></span>
                <span
                    className={`block w-5 h-0.5 bg-dark-color dark:bg-pallete-color5 ${
                        isOpen ? "-rotate-45 -translate-y-1/2" : "translate-y-1"
                    }`}></span>
            </button>

            {/* Navigation Menu for the small and Medium screens (Mobiles and Tablets). */}
            <nav
                className={`${
                    isOpen ? "block" : "hidden"
                } flex flex-col justify-between items-center space-y-4 p-5 z-10 w-[50vw] h-auto
                fixed top-64 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-pallete-color5/90 
                rounded-lg`}>
                {getNavLinks(true)}
            </nav>

            {/* Navigation Bar for large screen (Laptops and Desktops). */}
            <nav
                className="w-1/3 flex flex-row justify-between items-center space-x-8
                 px-4 md:hidden sm:hidden">
                {getNavLinks()}
            </nav>
        </>
    );
}
