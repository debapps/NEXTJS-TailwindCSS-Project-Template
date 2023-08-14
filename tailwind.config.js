/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: "class",
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                karla: ["Karla", "sans-serif"],
                sans: ["Open Sans", "sans-serif"],
                sacramento: ["Sacramento", "sans-serif"],
                ubuntu: ["Ubuntu", "sans-serif"],
            },
            colors: {
                "pallete-color1": "#F72585",
                "pallete-color2": "#7209B7",
                "pallete-color3": "#480CA8",
                "pallete-color4": "#3F37C9",
                "pallete-color5": "#4CC9F0",
                "light-color": "#F8F8FF",
                "dark-color": "#100c08",
                "facebook-color": "#3b5998",
                "insta-color": "#d6249f",
                "github-color": "#f4a261",
                "twitter-color": "#1da1f2",
                "linkedin-color": "#0E76A8",
            },
            screens: {
                sm: { min: "280px", max: "530px" },
                // => @media (min-width: 280px and max-width: 530px) { ... }

                md: { min: "540px", max: "1024px" },
                // => @media (min-width: 540px and max-width: 1024px) { ... }

                lg: { min: "1025px" },
                // => @media (min-width: 1025px) { ... }
            },

            animation: {
                "text-in": "text-in 1s cubic-bezier(0.68, -0.55, 0.265, 1.55)",
                "zoom-in": "zoom-in 1s ease-in-out",
                "rotate-in": "rotate-in 1s ease-in-out",
            },

            keyframes: {
                "text-in": {
                    from: { transform: "translateY(50px)", opacity: "0.01" },
                    to: { transform: "translateY(0)", opacity: "1" },
                },
                "zoom-in": {
                    from: { transform: "scale(0.5)", opacity: "0.01" },
                    to: { transform: "scale(1)", opacity: "1" },
                },
                "rotate-in": {
                    from: {
                        transform: "rotate(-600deg) scale(0.5)",
                        opacity: "0.01",
                    },
                    to: { transform: "rotate(0deg) scale(1)", opacity: "1" },
                },
            },
        },
    },
    plugins: [],
};
