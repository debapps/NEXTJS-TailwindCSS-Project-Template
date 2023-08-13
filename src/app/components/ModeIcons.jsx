"use client";
import useThemeSwitcher from "../hooks/useThemeSwitcher";

export default function ModeIcons() {
    // website theme (dark or light).
    const [theme, setTheme] = useThemeSwitcher();

    return (
        <div className="flex justify-center items-center">
            {theme === "light" ? (
                <button
                    onClick={() => {
                        setTheme("dark");
                    }}>
                    <span class="material-symbols-outlined cursor-pointer font-bold text-dark-color">
                        dark_mode
                    </span>
                </button>
            ) : (
                <button
                    onClick={() => {
                        setTheme("light");
                    }}>
                    <span class="material-symbols-outlined cursor-pointer font-bold text-light-color">
                        light_mode
                    </span>
                </button>
            )}
        </div>
    );
}
