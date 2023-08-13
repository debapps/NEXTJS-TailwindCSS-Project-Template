import Image from "next/image";
import AnimatedHeading from "./components/AnimatedHeading";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-light-color">
            <AnimatedHeading text="Welcome to the NEXT JS and Tailwind CSS template!" />
        </main>
    );
}
