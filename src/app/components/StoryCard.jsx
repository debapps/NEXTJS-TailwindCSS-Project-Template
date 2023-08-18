"use client";
import { getDateFormatted } from "@/utilities/formatDate";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import GradientText from "./GradientText";

export default function StoryCard({
    title,
    slug,
    img,
    category,
    synopsis,
    author,
    date,
}) {
    return (
        <motion.section
            className="flex flex-col justify-start items-start w-[500px] md:w-[90vw] sm:w-[90vw] 
            min-h-[700px] m-7 md:m-7 sm:m-7 border-2 border-solid border-dark-color rounded-lg p-5
            shadow-xl shadow-dark-color dark:shadow-pallete-color5"
            initial={{ y: 50, opacity: 0.02 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeIn" }}
            viewport={{ once: true }}>
            <Image
                className="rounded-lg block w-full h-[300px] md:w-full sm:w-full"
                src={img}
                alt={title}
                width={500}
                height={300}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
            />
            {/* Blog title */}
            <GradientText sx="text-3xl sm:text-xl font-sacramento text-bold pt-5 pb-2 pl-1">
                {title}
            </GradientText>
            {/* Blog Category */}
            <h3
                className="font-sans text-xs tracking-widest mt-2 mb-5 
                text-pallete-color5 bg-pallete-color3 p-2 max-w-fit">
                {category.toUpperCase()}
            </h3>
            {/* Blog author and publication date */}
            <div
                className="text-sm font-sans tracking-widest pb-2 flex justify-between items-center w-full
                text-dark-color dark:text-pallete-color1">
                <span className="inline-block">{author}</span>
                <span className="inline-block">{getDateFormatted(date)}</span>
            </div>
            {/* Blog synopsis */}
            <p className="sm:text-base text-lg font-karla py-5">{synopsis}</p>
            {/* Detailed blog link */}
            <Link
                className="sm:text-base text-lg font-ubuntu p-2 my-3 bg-pallete-color4
                hover:bg-pallete-color1 text-pallete-color5 border rounded-lg shadow-lg 
                shadow-pallete-color2"
                href={`/stories/${slug}`}>
                Read More ..
            </Link>
        </motion.section>
    );
}
