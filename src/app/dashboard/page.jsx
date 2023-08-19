"use client";

import { useSession } from "next-auth/react";
import AnimateHeading from "../components/AnimatedHeading";
import { useRouter } from "next/navigation";
import useSWR from "swr";
import ProgressLoading from "../components/ProgressLoading";
import StoryItem from "../components/StoryItem";

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
