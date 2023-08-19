"use client";
import useThemeSwitcher from "../hooks/useThemeSwitcher";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function ModeIcons() {
    // website theme (dark or light).
    const [theme, setTheme] = useThemeSwitcher();

    // Get the next auth session.
    const session = useSession();

    // Initialize next router.
    const router = useRouter();

    return (
        <div className="flex justify-center items-center space-x-2">
            {theme === "light" ? (
                <button
                    onClick={() => {
                        setTheme("dark");
                    }}>
                    <span className="material-symbols-outlined font-bold text-dark-color">
                        dark_mode
                    </span>
                </button>
            ) : (
                <button
                    onClick={() => {
                        setTheme("light");
                    }}>
                    <span className="material-symbols-outlined font-bold text-light-color">
                        light_mode
                    </span>
                </button>
            )}
            {session.status === "unauthenticated" ? (
                <button onClick={() => router.push("/login")}>
                    <span
                        className="material-symbols-outlined font-bold 
                      text-dark-color dark:text-light-color">
                        account_circle
                    </span>
                </button>
            ) : (
                <button onClick={() => signOut()}>
                    <span
                        className="material-symbols-outlined font-bold 
                      text-dark-color dark:text-light-color">
                        logout
                    </span>
                </button>
            )}
        </div>
    );
}
