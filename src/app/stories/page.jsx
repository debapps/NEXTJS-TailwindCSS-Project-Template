import AnimateHeading from "../components/AnimatedHeading";

export const metadata = {
    title: "Stories | NEXT JS + Tailwind CSS",
    description:
        "This is starter template of NEXT JS and Tailwind CSS project.",
};

export default function Stories() {
    return (
        <main
            className="w-full min-h-screen bg-light-color dark:bg-dark-color 
            px-20 sm:px-10 py-40 sm:py-20 flex flex-col items-center justify-center">
            <AnimateHeading text="Featuring Stories" />
        </main>
    );
}
