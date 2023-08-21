import Image from "next/image";
import AnimatedHeading from "./components/AnimatedHeading";
import HeroImg1 from "../../public/images/web-dev-hero.jpg";
import HeroImg2 from "../../public/images/api-nextjs.jpg";
import HeroImg3 from "../../public/images/programming-tools.jpg";
import GradientText from "./components/GradientText";
import DottedHorizontal from "./components/DottedHorizontal";

export const metadata = {
    title: "Home | NEXT JS + Tailwind CSS",
    description:
        "This is starter template of NEXT JS and Tailwind CSS project.",
};

export default function Home() {
    return (
        <main
            className="w-full min-h-screen bg-light-color dark:bg-dark-color 
            px-20 sm:px-10 py-40 sm:py-5 flex flex-col items-center justify-center overflow-x-hidden">
            {/* Section 1 */}
            <section
                className="w-full flex flex-row md:flex-col sm:flex-col justify-between items-center 
                space-x-8 md:space-x-0 sm:space-x-0 md:space-y-16 sm:space-y-8 py-24 md:py-10 sm:py-5">
                <Image
                    className="block w-[40%] md:w-full sm:w-full rounded-3xl 
                    shadow-2xl shadow-pallete-color3 dark:shadow-pallete-color5 
                    animate-rotate-in sm:mt-52 sm:mb-5"
                    src={HeroImg1}
                    alt="hero-image-1"
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
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

            <DottedHorizontal />

            {/* Section 2 */}
            <section
                className="w-full flex flex-row md:flex-col sm:flex-col justify-between items-center 
                space-x-8 md:space-x-0 sm:space-x-0 md:space-y-16 sm:space-y-8 py-24 md:py-10 sm:py-5">
                <article className="flex flex-col items-start justify-center w-[60%] md:w-full sm:w-full">
                    <GradientText
                        sx="text-6xl md:text-4xl sm:text-2xl font-bold font-ubuntu
                        leading-tight mb-10">
                        Integrating REST API in NEXT JS 13 and Annimation.
                    </GradientText>
                    <p className="animate-text-in">
                        Implemetating the remote REST API calls using the{" "}
                        <strong>NEXT JS 13</strong> frameworks.
                    </p>
                    <ul className="animate-text-in">
                        <li>
                            JavaScript <strong>fetch</strong> API call.
                        </li>
                        <li>
                            React specific <strong>useSWR</strong> hooks.
                        </li>
                    </ul>
                    <p className="animate-text-in">
                        Implemetating annimations using simple Tailwind CSS
                        framework and <strong>Framer Motion</strong> Library.
                    </p>
                </article>
                <Image
                    className="block w-[40%] md:w-full sm:w-full rounded-3xl 
                    shadow-2xl shadow-pallete-color3 dark:shadow-pallete-color5 
                    animate-zoom-in sm:mt-52 sm:mb-5"
                    src={HeroImg2}
                    alt="hero-image-2"
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                />
            </section>

            <DottedHorizontal />

            {/* Section 3 */}
            <section
                className="w-full flex flex-row md:flex-col sm:flex-col justify-between items-center 
                space-x-8 md:space-x-0 sm:space-x-0 md:space-y-16 sm:space-y-8 py-24 md:py-10 sm:py-5">
                <Image
                    className="block w-[40%] md:w-full sm:w-full rounded-3xl 
                    shadow-2xl shadow-pallete-color3 dark:shadow-pallete-color5 
                    animate-zoom-in sm:my-5"
                    src={HeroImg3}
                    alt="hero-image-3"
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                />
                <article className="flex flex-col items-start justify-center w-[60%] md:w-full sm:w-full">
                    <GradientText
                        sx="text-6xl md:text-4xl sm:text-2xl font-bold font-ubuntu
                        leading-tight mb-10">
                        Your Complete Front-End Programming Toolbox.
                    </GradientText>

                    <p className="animate-text-in">
                        Implemetating the complete front-end features for your
                        NEXT JS + Tailwind CSS project.
                    </p>
                    <ul className="animate-text-in">
                        <li>Responsive web designing.</li>
                        <li>React WYSIWYG Rich Text Editor.</li>
                        <li>OAuth Integration with NEXT JS</li>
                        <li>Remote API calls.</li>
                        <li>Easy-to-use Annimations.</li>
                        <li>Implemetating Dark mode.</li>
                        <li>Other Ready-made Front-end tools.</li>
                    </ul>
                </article>
            </section>
        </main>
    );
}
