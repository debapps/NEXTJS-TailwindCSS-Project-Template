"use client";

import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Link from "next/link";

export default function SocialIcons() {
    return (
        <section
            className="flex flex-row justify-between items-center space-x-2
            p-2 border-2 border-pallete-color3 rounded-md">
            <Link href={`https://github.com/debapps`} target="_blank">
                <GitHubIcon
                    className="text-github-color cursor-pointer hover:-translate-y-1"
                    fontSize="large"
                />
            </Link>
            <Link
                href={`https://www.linkedin.com/in/debaditya-bhar-6a00074a/`}
                target="_blank">
                <LinkedInIcon
                    className="text-linkedin-color cursor-pointer hover:-translate-y-1"
                    fontSize="large"
                />
            </Link>
            <Link
                href={`https://www.facebook.com/debadityabhar`}
                target="_blank">
                <FacebookIcon
                    className="text-facebook-color cursor-pointer hover:-translate-y-1"
                    fontSize="large"
                />
            </Link>
            <Link
                href={`https://www.instagram.com/debadityabhar14/?hl=en`}
                target="_blank">
                <InstagramIcon
                    className="text-insta-color cursor-pointer hover:-translate-y-1"
                    fontSize="large"
                />
            </Link>
        </section>
    );
}
