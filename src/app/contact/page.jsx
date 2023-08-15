import Image from "next/image";
import AnimateHeading from "../components/AnimatedHeading";
import contactImg from "../../../public/images/contact-image.jpg";
import Link from "next/link";
import SocialIcons from "../components/SocialIcons";

export const metadata = {
    title: "Contact | NEXT JS + Tailwind CSS",
    description:
        "This is starter template of NEXT JS and Tailwind CSS project.",
};

export default function Contact() {
    return (
        <main
            className="w-full min-h-screen bg-light-color dark:bg-dark-color 
            px-20 sm:px-10 py-40 sm:py-52 flex flex-col items-start justify-center">
            <AnimateHeading text="Feel free to reach me out ..." />
            <section
                className="flex flex-row md:flex-col sm:flex-col justify-between items-center 
                space-x-8 md:space-x-0 sm:space-x-0 md:space-y-16 sm:space-y-8">
                <Image
                    src={contactImg}
                    alt="contact-image"
                    className="block w-[40%] md:w-full sm:w-full h-auto rounded-xl shadow-2xl
                    shadow-pallete-color3 dark:shadow-pallete-color5 animate-slide-right-in sm:mb-5"
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                />

                <article
                    className="flex flex-col justify-center items-start 
                    w-[60%] md:w-full sm:w-full">
                    <p className="animate-text-in">
                        I like to hear your feedbacks and suggestions regarding
                        this project starter template. If you want to contact
                        me, hire me, please feel free to contact me for any
                        consultation in any of the below channels.
                    </p>
                    <p className="animate-text-in">
                        Please write to me @{" "}
                        <Link
                            href={`mailto:bhar.debaditya@gmail.com`}
                            className="font-ubuntu font-bold cursor-pointer italic 
                            hover:text-pallete-color1 hover:underline">
                            bhar.debaditya@gmail.com
                        </Link>
                    </p>
                    <p className="animate-text-in">Find me on social media:</p>
                    <div className="animate-slide-left-in">
                        <SocialIcons />
                    </div>
                </article>
            </section>
        </main>
    );
}
