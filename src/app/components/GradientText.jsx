export default function GradientText({ children, style }) {
    return (
        <h1
            className={`text-transparent bg-clip-text bg-gradient-to-r from-pallete-color1 via-pallete-color3 to-pallete-color5 ${style}`}>
            {children}
        </h1>
    );
}
