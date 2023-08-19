"use client";

import { useSession } from "next-auth/react";
import AnimateHeading from "../components/AnimatedHeading";
import { useRouter } from "next/navigation";

export default function DashBoard() {
    const { data, status } = useSession();

    const router = useRouter();

    if (status === "unauthenticated") {
        router.push("/login");
    }

    if (status === "loading") {
        return (
            <main
                className="w-full min-h-screen bg-light-color dark:bg-dark-color overflow-x-hidden
                px-20 sm:px-10 py-40 sm:py-20 flex flex-col items-center justify-center">
                <AnimateHeading text="Loading ..." />
            </main>
        );
    }

    if (status === "authenticated") {
        console.log(data);
        return (
            <main
                className="w-full min-h-screen bg-light-color dark:bg-dark-color overflow-x-hidden
                px-20 sm:px-10 py-40 sm:py-20 flex flex-col items-center justify-center">
                <AnimateHeading text={`Welcome, ${data.user.name}`} />
            </main>
        );
    }
}
