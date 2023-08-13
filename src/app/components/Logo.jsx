import Link from "next/link";
import LogoImg from "../../../public/images/Logo_Image.png";
import Image from "next/image";
import GradientText from "./GradientText";

export default function Logo({ text }) {
    return (
        <Link className="flex flex-row sm:flex-col items-center" href="/">
            <Image
                className="w-16 h-16 rounded-full"
                src={LogoImg}
                alt="logo-image"
            />
            {text && (
                <GradientText
                    sx="text-3xl md:text-2xl sm:text-xl ml-2 sm:ml-0 sm:mt-2 
                    font-bold font-ubuntu p-1">
                    {text}
                </GradientText>
            )}
        </Link>
    );
}
