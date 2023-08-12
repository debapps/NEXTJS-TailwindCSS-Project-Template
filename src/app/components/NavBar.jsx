"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavBar({ navData }) {
    // Get the current pathname.
    const path = usePathname();

    return (
        <nav className="w-1/3 flex flex-row justify-between items-center px-4">
            {navData.map((navItem, idx) => {
                return (
                    <Link
                        className="font-karla text-xl font-semibold text-pallete-color3 relative group"
                        key={idx}
                        href={navItem.href}>
                        {navItem.title}
                        <span
                            className={`inline-block h-[2px] bg-pallete-color1 absolute left-0 bottom-0
                            group-hover:w-full transition-[width] duration-300 ease-linear ${
                                path === navItem.href ? "w-full" : "w-0"
                            }`}>
                            &nbsp;
                        </span>
                    </Link>
                );
            })}
        </nav>
    );
}
