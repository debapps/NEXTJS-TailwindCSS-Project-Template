import Image from "next/image";
import AnimatedHeading from "./components/AnimatedHeading";
import HeroImg1 from "../../public/images/web-dev-hero.jpg";

export default function Home() {
    return (
        <main
            className="w-full min-h-screen bg-light-color dark:bg-dark-color 
            px-20 sm:px-10 py-40 sm:py-5 flex flex-col items-start justify-center">
            <section
                className="w-full flex flex-row md:flex-col sm:flex-col justify-between items-center 
                space-x-8 md:space-x-0 sm:space-x-0 md:space-y-16 sm:space-y-8">
                <Image
                    className="block w-[40%] md:w-full sm:w-full rounded-3xl 
                    shadow-2xl shadow-pallete-color3 dark:shadow-pallete-color5 animate-rotate-in sm:mt-52 sm:mb-5"
                    src={HeroImg1}
                    alt="hero-image-1"
                    priority
                    // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                />
                <article className="flex flex-col items-start justify-center w-[60%] md:w-full sm:w-full">
                    <AnimatedHeading text="Welcome to the NEXT JS and Tailwind CSS template!" />
                    <p className="!text-pallete-color1 animate-text-in">
                        This is project strater template for NEXT JS and
                        Tailwind CSS. The tempalte is{" "}
                        <strong className="text-pallete-color4 dark:text-pallete-color5">
                            fully responsive
                        </strong>{" "}
                        i.e., It has Mobile, Tablet, Laptop and Desktop friendly
                        layouts and designs. It has responsive Navigation Menu,
                        Headers, Logo and Footer areas.
                    </p>
                    <p className="!text-pallete-color1 animate-text-in">
                        Fill free to use the template in your next front end
                        project.
                    </p>
                </article>
            </section>
        </main>
    );
}
