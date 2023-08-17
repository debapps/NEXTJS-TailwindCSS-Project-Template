import AnimateHeading from "../components/AnimatedHeading";
import { apiGET } from "@/utilities/callAPI";
import StoryCard from "../components/StoryCard";

export const metadata = {
    title: "Stories | NEXT JS + Tailwind CSS",
    description:
        "This is starter template of NEXT JS and Tailwind CSS project.",
};

export default async function Stories() {
    // API endpoint and URL.
    const endPoint = "/api/story";

    // Server Side Data Fetching.
    let storyList = [];
    let response = await apiGET(endPoint, { cache: "no-store" });

    storyList = response.stories;

    return (
        <main
            className="w-full min-h-screen bg-light-color dark:bg-dark-color 
            px-20 sm:px-10 py-40 sm:py-52 flex flex-col items-center justify-center overflow-x-hidden">
            <AnimateHeading text="Featuring Stories" />
            <section
                className="px-5 flex flex-row sm:flex-col md:flex-col flex-wrap
                items-start justify-center">
                {storyList.map((story, idx) => {
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
