/** @type {import('tailwindcss').Config} */
module.exports = {
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
        },
    },
    plugins: [],
};
