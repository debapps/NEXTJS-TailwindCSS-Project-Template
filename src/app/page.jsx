import Image from "next/image";
import AnimatedHeading from "./components/AnimatedHeading";
import HeroImg1 from "../../public/images/web-dev-hero.jpg";

export default function Home() {
    return (
        <main
            className="w-full min-h-screen bg-light-color dark:bg-dark-color px-20 sm:px-10 py-10 sm:py-5 
            flex flex-col items-start justify-center">
            <section className="w-full flex flex-row sm:flex-col justify-between items-center space-x-8 sm:space-y-8">
                <Image
                    className="block w-[40%] md:w-1/2 sm:w-full rounded-3xl shadow-lg shadow-gray-400 animate-zoom-in"
                    src={HeroImg1}
                    alt="hero-image-1"
                />
                <article className="flex flex-col items-start justify-start w-[60%] md:w-1/2 sm:w-full">
                    <AnimatedHeading text="Welcome to the NEXT JS and Tailwind CSS template!" />
                    <p className="text-lg md:text-base sm:text-sm font-sans text-pallete-color1 animate-text-in mb-4">
                        This is project strater template for NEXT JS and
                        Tailwind CSS. The tempalte is{" "}
                        <strong className="text-pallete-color4 dark:text-pallete-color5">
                            fully responsive
                        </strong>{" "}
                        i.e., It has Mobile, Tablet, Laptop and Desktop friendly
                        layouts and designs. It has responsive Navigation Menu,
                        Headers, Logo and Footer areas.
                    </p>
                    <p className="text-lg md:text-base sm:text-sm font-sans text-pallete-color1 animate-text-in">
                        Fill free to use the template in your next front end
                        project.
                    </p>
                </article>
            </section>
        </main>
    );
}
