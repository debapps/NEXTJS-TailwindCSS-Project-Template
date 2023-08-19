export default function GradientText({ children, sx }) {
    return (
        <div
            className={`${sx} leading-relaxed text-transparent bg-clip-text font-bold
            bg-gradient-to-r from-pallete-color1 via-pallete-color4 to-pallete-color5
            dark:bg-clip-border dark:text-light-color dark:max-w-fit dark:my-2 dark:px-1 rounded-lg`}>
            {children}
        </div>
    );
}
