// Option 1
export default function AnimateHeading({ text }) {
    return (
        <div>
            {text.split(" ").map((word, idx) => {
                return (
                    <span
                        key={idx}
                        className="inline-block mr-4 animate-text-in text-pallete-color2
                        text-7xl xl:text-6xl lg:text-4xl font-bold font-ubuntu leading-relaxed"
                        style={{
                            animationDelay: `${idx * 100}ms`,
                            animationFillMode: "backwards",
                        }}>
                        {word}
                    </span>
                );
            })}
        </div>
    );
}

// Option 2:
// import GradientText from "./GradientText";

// export default function AnimateHeading({ text }) {
//     return (
//         <div>
//             {text.split(" ").map((word, idx) => {
//                 return (
//                     <span
//                         key={idx}
//                         className="inline-block mr-4 animate-text-in"
//                         style={{
//                             animationDelay: `${idx * 100}ms`,
//                             animationFillMode: "backwards",
//                         }}>
//                         <GradientText sx="text-7xl xl:text-6xl lg:text-4xl font-bold font-ubuntu">
//                             {word}
//                         </GradientText>
//                     </span>
//                 );
//             })}
//         </div>
//     );
// }
