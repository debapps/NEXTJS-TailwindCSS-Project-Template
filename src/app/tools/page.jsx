import BlurryLoading from "../ToolComponents/BlurryLoading";
import ExpandingGallary from "../ToolComponents/ExpandingGallary";
import AnimateHeading from "../components/AnimatedHeading";
import DottedHorizontal from "../components/DottedHorizontal";
import GradientText from "../components/GradientText";

export default function Tools() {
    return (
        <main
            className="w-full min-h-screen bg-light-color dark:bg-dark-color 
            px-20 sm:px-10 py-40 sm:py-52 flex flex-col items-center justify-center overflow-x-hidden">
            <AnimateHeading text="Our Featuring Tools." />

            <DottedHorizontal />

            <section
                className="w-full flex flex-col justify-center items-center space-y-4
                py-10 sm:py-5">
                <GradientText
                    sx="text-6xl md:text-4xl sm:text-2xl font-bold font-ubuntu
                    leading-tight animate-text-in">
                    Blurry Loading (Hover to see effect)
                </GradientText>
                <BlurryLoading />
            </section>

            <DottedHorizontal />

            <section
                className="w-full flex flex-col justify-center items-start 
                py-10 sm:py-5">
                <GradientText
                    sx="text-6xl md:text-4xl sm:text-2xl font-bold font-ubuntu
                    leading-tight animate-text-in">
                    Expanding Image Gallary
                </GradientText>
                <ExpandingGallary />
            </section>

            <DottedHorizontal />
        </main>
    );
}
