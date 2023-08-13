import Link from "next/link";
import Logo from "./Logo";
import SocialIcons from "./SocialIcons";

export default function Footer() {
    return (
        <footer
            className="py-2 px-4 border-t-[0.5px] bg-white overflow-hidden w-full
                flex flex-row sm:flex-col justify-between items-center">
            {/* Logo and copyright text. */}
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

            {/* Contact Information */}
            <div className="m-2">
                <Link
                    href={`mailto:bhar.debaditya@gmail.com`}
                    className="font-sans font-bold text-sm italic
                    text-pallete-color3 m-1">
                    Email: bhar.debaditya@gmail.com
                </Link>
                <p
                    className="font-sans font-bold text-sm italic
                    text-pallete-color3 m-1">
                    Mob: +91-629-009-3829
                </p>
            </div>

            {/* Social media icons */}
            <SocialIcons />
        </footer>
    );
}
