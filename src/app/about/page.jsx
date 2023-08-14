import Image from "next/image";
import AnimateHeading from "../components/AnimatedHeading";
import profilePic from "../../../public/images/my-image.png";

export default function About() {
    return (
        <main
            className="w-full min-h-screen bg-light-color dark:bg-dark-color 
            px-20 sm:px-10 py-40 sm:py-5 flex flex-col items-start justify-center">
            <section
                className="flex flex-row sm:flex-col justify-between items-center 
                space-x-8 sm:space-x-0 sm:space-y-8">
                <div
                    className="w-[40%] md:w-1/2 sm:w-full h-auto blob 
                    bg-gradient-to-tr from-pallete-color5 via-pallete-color2 to-pallete-color1 
                    shadow-2xl shadow-pallete-color3 dark:shadow-pallete-color5 
                    animate-zoom-in sm:mt-44 sm:mb-5">
                    <Image
                        src={profilePic}
                        alt="my-image"
                        className="object-cover"
                        priority
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                    />
                </div>
                <article
                    className="flex flex-col justify-center items-start 
                    w-[60%] md:w-1/2 sm:w-full sm:space-y-8">
                    <AnimateHeading text="Transforming ideas into reality through Design and Code." />
                    <p className="animate-text-in">
                        Hello, I am <strong>Debaditya Bhar</strong>. I am a
                        Softwere Engineer since 2010. I worked in different
                        phases of software life cycles over a decade of my
                        career journey on client side and offshore locations.
                    </p>
                    <p className="animate-text-in">
                        I have worked in several technologies. I started my
                        career in Mainframe development. Then, I learned web
                        development and technologies. Meanwhile, I worked as
                        Data Analyst with Python. Finally, I work as AWS Cloud
                        Engineer.
                    </p>
                    <p className="animate-text-in">
                        As an experience web developer, I transform your ideas
                        into really good looking web apps through my full-stack
                        development expertise and experience.
                    </p>
                </article>
            </section>
        </main>
    );
}
