import GradientText from "@/app/components/GradientText";
import { apiGET } from "@/utilities/callAPI";
import { getDateFormatted } from "@/utilities/formatDate";
import Image from "next/image";
import Link from "next/link";

// Generate dynamic metadata.
export async function generateMetadata({ params }) {
    // API endpoint and URL.
    const endPoint = `/api/story/${params.slug}`;

    // Fetch the post
    let response = await apiGET(endPoint, {});

    const { title, synopsis } = response;

    return {
        title: `${title} | Debaditya Bhar`,
        description: synopsis,
    };
}

export default async function StorySlug({ params }) {
    // API endpoint and URL.
    const endPoint = `/api/story/${params.slug}`;

    // Fetch the post
    let response = await apiGET(endPoint, {});

    const { category, title, synopsis, image, author, updatedAt, content } =
        response;

    return (
        <main
            className="w-full min-h-screen bg-light-color dark:bg-dark-color 
            px-20 sm:px-10 py-40 sm:py-52 flex flex-col items-center justify-center overflow-x-hidden">
            <section
                className="flex flex-row md:flex-col sm:flex-col justify-center items-center
                space-x-5 md:space-x-0 sm:space-x-0">
                <div className="w-1/2 md:w-full sm:w-full">
                    {/* Blog category */}
                    <h3
                        className="font-sans text-xs tracking-widest mt-2 mb-5 sm:mb-2 
                      text-pallete-color5 bg-pallete-color3 p-2 max-w-fit animate-slide-right-in">
                        {category.toUpperCase()}
                    </h3>

                    {/* Blog title */}
                    <GradientText
                        sx="mb-5 pl-1 font-sacramento font-extrabold 
                        text-6xl md:text-4xl sm:text-3xl animate-text-in">
                        {title}
                    </GradientText>

                    {/* Blog author and publication date */}
                    <div
                        className="text-sm sm:text-xs font-sans tracking-widest mb-5 px-4 md:px-0 sm:px-0
                        flex justify-between items-center w-full text-dark-color dark:text-pallete-color1">
                        <span className="inline-block animate-slide-right-in">
                            {author}
                        </span>
                        <span
                            className="inline-block animate-text-in 
                            md:animate-slide-left-in sm:animate-slide-left-in">
                            {getDateFormatted(updatedAt)}
                        </span>
                    </div>

                    {/* Blog Synopsis */}
                    <p
                        className="mb-5 px-4 md:px-0 sm:px-0 font-karla font-thin text-lg md:text-base sm:text-sm  
                      text-gray-600 italic animate-zoom-in">
                        {synopsis}
                    </p>
                </div>
                {/* blog cover image */}
                <div className="w-1/2 md:w-full sm:w-full">
                    <Image
                        className="rounded-md animate-zoom-in"
                        src={image}
                        width={1400}
                        height={1000}
                        alt="cover"
                        priority
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                    />
                </div>
            </section>
            <article className="flex flex-col mt-10 space-y-5">
                {/* Blog content */}
                <div
                    className="animate-zoom-in"
                    dangerouslySetInnerHTML={{ __html: content }}></div>
                <Link
                    className="w-10 h-10 rounded-full
                    flex justify-center items-center text-dark-color dark:text-light-color 
                    hover:bg-gray-300 dark:hover:bg-pallete-color5"
                    href="/stories">
                    <span className="material-symbols-outlined">
                        arrow_back
                    </span>
                </Link>
            </article>
        </main>
    );
}
