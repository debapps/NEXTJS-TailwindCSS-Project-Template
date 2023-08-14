export default function GradientText({ children, sx }) {
    return (
        <div
            className={`${sx} leading-relaxed text-transparent bg-clip-text 
            bg-gradient-to-r from-pallete-color1 via-pallete-color3 to-pallete-color5`}>
            {children}
        </div>
    );
}
