"use client";
import Image from "next/image";
import Link from "next/link";
import GradientText from "./GradientText";
import { motion } from "framer-motion";

const MotionLink = motion(Link);

export default function StoryItem({ story, deleteStory }) {
    // Destructure the story.
    const { category, title, slug, synopsis, image } = story;

    return (
        <motion.section
            className="flex flex-row sm:flex-col justify-between items-start
            space-x-5 sm:space-x-0 sm:space-y-5 w-[80vw] p-5 my-2 border
            border-solid border-dark-color dark:border-light-color rounded-lg"
            initial={{ y: 50, opacity: 0.02 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeIn" }}
            viewport={{ once: true }}>
            <Image
                className="w-[500px] md:w-[300px] sm:w-full rounded-md
                h-[300px] md:h-[200px] sm:h-auto hover:scale-105 transition-transform"
                src={image}
                alt={slug}
                width={500}
                height={300}
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
            />
            <Link href={`/stories/${slug}`}>
                <p
                    className="text-base md:text-sm sm:text-xs font-karla font-thin p-1 max-w-fit 
                        text-pallete-color5 bg-pallete-color3">
                    {category.toUpperCase()}
                </p>
                <GradientText sx="text-3xl md:text-xl sm:text-lg font-bold font-sacramento">
                    {title}
                </GradientText>
                <p className="text-base md:text-sm sm:text-xs font-light font-sans">
                    {synopsis}
                </p>
            </Link>
            <button
                onClick={() => {
                    deleteStory(slug);
                }}>
                <span
                    className="material-symbols-outlined bg-gradient-to-br from-red-400 
                        via-red-600 to-red-900 cursor-pointer text-white text-sm 
                        font-semibold font-poppins px-2 py-1 
                        rounded shadow-sm shadow-red-200">
                    close
                </span>
            </button>
        </motion.section>
    );
}
