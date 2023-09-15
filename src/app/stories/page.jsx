"use client";

import AnimateHeading from "../components/AnimatedHeading";
import StoryCard from "../components/StoryCard";
import ProgressLoading from "../components/ProgressLoading";
import useSWR from "swr";

// export const metadata = {
//     title: "Stories | NEXT JS + Tailwind CSS",
//     description:
//         "This is starter template of NEXT JS and Tailwind CSS project.",
// };

const apiHost = process.env.NEXT_PUBLIC_API_HOST;

export default function Stories() {
    // The data fercher function.
    const fetcher = (...args) => fetch(...args).then((res) => res.json());

    // API endpoint and URL.
    const endPoint = "/api/story";
    const url = apiHost + endPoint;

    // The swr hook.
    const { data, error, isLoading } = useSWR(url, fetcher);

    if (isLoading) {
        return (
            <main
                className="w-full min-h-screen bg-light-color dark:bg-dark-color overflow-x-hidden
                px-20 sm:px-10 py-40 sm:pb-20 sm:pt-52 flex flex-col items-center justify-center">
                <ProgressLoading active={true} />
            </main>
        );
    } else {
        return (
            <main
                className="w-full min-h-screen bg-light-color dark:bg-dark-color 
                px-20 sm:px-10 py-40 sm:py-52 flex flex-col items-center justify-center overflow-x-hidden">
                <AnimateHeading text="Featuring Stories" />
                <section
                    className="px-5 flex flex-row sm:flex-col md:flex-col flex-wrap
                    items-start justify-center">
                    {data.stories.map((story, idx) => {
                        return (
                            <StoryCard
                                key={idx}
                                title={story.title}
                                slug={story.slug}
                                img={story.image}
                                category={story.category}
                                synopsis={story.synopsis}
                                author={story.author}
                                date={story.updatedAt}
                            />
                        );
                    })}
                </section>
            </main>
        );
    }
}
