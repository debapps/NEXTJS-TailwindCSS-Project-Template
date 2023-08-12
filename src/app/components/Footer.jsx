import Link from "next/link";
import Logo from "./Logo";

export default function Footer() {
    return (
        <footer
            className="p-2 border-t-[0.5px] bg-white
                flex flex-row sm:flex-col justify-between items-center">
            <div
                className="flex flex-row sm:flex-col sm:justify-center justify-start 
                items-center sm:space-y-4 space-x-5 m-2">
                <Logo />
                {/* Virtical Divider */}
                <span className="block sm:hidden border-l-2 border-l-gray-400/70 h-20"></span>
                {/* Copyright Text */}
                <p className="font-sans font-light text-xs text-dark-color">
                    {new Date().getFullYear()} &copy; All Rights Reserved -
                    Debaditya Bhar
                </p>
            </div>
            <div className="m-2">
                <Link
                    href={`mailto:bhar.debaditya@gmail.com`}
                    className="font-sans font-bold text-sm 
                    dark:text-light-color m-1">
                    Email: bhar.debaditya@gmail.com
                </Link>
                <p
                    className="font-sans font-bold text-sm
                    dark:text-light-color m-1">
                    Mob: +91-629-009-3829
                </p>
            </div>
        </footer>
    );
}
