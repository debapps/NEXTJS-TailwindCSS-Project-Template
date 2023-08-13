"use client";
import GradientText from "./GradientText";
import { motion } from "framer-motion";

export default function AnimatedHeading({ text }) {
    return (
        <GradientText style="text-6xl md:text-4xl sm:text-2xl leading-normal font-karla font-bold">
            {text.split(" ").map((word, idx) => {
                return (
                    <motion.span
                        key={idx}
                        className="inline-block mr-4"
                        initial={{ y: 50, opacity: 0.02 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{
                            duration: 1,
                            ease: "easeInOut",
                            delay: 0.1 * idx,
                        }}>
                        {`${word} `}
                    </motion.span>
                );
            })}
        </GradientText>
    );
}
