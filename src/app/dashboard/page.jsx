"use client";

import { useSession } from "next-auth/react";
import AnimateHeading from "../components/AnimatedHeading";
import { useRouter } from "next/navigation";
import useSWR from "swr";
import ProgressLoading from "../components/ProgressLoading";
import StoryItem from "../components/StoryItem";
import { useState } from "react";
import StoryForm from "../components/StoryForm";

const apiHost = process.env.NEXT_PUBLIC_API_HOST;

export default function DashBoard() {
    // Get the Next Auth session.
    const session = useSession();

    // Get the Next router.
    const router = useRouter();

    // The data fercher function.
    const fetcher = (...args) => fetch(...args).then((res) => res.json());

    // API endpoint and URL.
    const endPoint = `/api/story?author=${session.data?.user.name}`;
    const url = apiHost + endPoint;

    // The swr hook.
    const { data, mutate, error, isLoading } = useSWR(url, fetcher);

    // Add story pannel open/close state hook.
    const [open, setOpen] = useState(false);

    if (session.status === "unauthenticated") {
        router.push("/login");
    }

    if (session.status === "loading") {
        return (
            <main
                className="w-full min-h-screen bg-light-color dark:bg-dark-color overflow-x-hidden
                px-20 sm:px-10 py-40 sm:pb-20 sm:pt-52 flex flex-col items-center justify-center">
                <ProgressLoading active={true} />
            </main>
        );
    }

    if (session.status === "authenticated") {
        return (
            <main
                className="w-full min-h-screen bg-light-color dark:bg-dark-color overflow-x-hidden
                px-20 sm:px-10 py-40 sm:pb-20 sm:pt-52 flex flex-col items-center justify-center">
                <AnimateHeading text={`Welcome, ${session.data.user.name}`} />

                {/* Add story button */}
                <span
                    className="material-symbols-rounded fixed right-8 sm:right-4 top-40 sm:top-52
                    font-extrabold text-5xl md:text-3xl sm:text-2xl text-pallete-color4 cursor-pointer
                    dark:text-pallete-color1 hover:text-pallete-color1 dark:hover:text-pallete-color5"
                    onClick={() => setOpen(!open)}>
                    add_circle
                </span>

                {/* Add Story Pannel */}
                <div
                    className={`${
                        open ? "block" : "hidden"
                    } w-[90vw] p-4 border border-solid z-15 fixed right-4 top-4
                    bg-light-color border-dark-color dark:border-light-color rounded-lg
                    animate-slide-left-in min-h-fit shadow-2xl 
                    shadow-pallete-color3 dark:shadow-pallete-color5`}>
                    <StoryForm closeFunc={setOpen} />
                </div>

                {/* Get the stories for the author. */}
                {isLoading ? (
                    <ProgressLoading active={true} />
                ) : (
                    data?.stories.map((story, idx) => {
                        return (
                            <StoryItem
                                key={idx}
                                story={story}
                                // deleteStory={deleteStory}
                            />
                        );
                    })
                )}
            </main>
        );
    }
}
