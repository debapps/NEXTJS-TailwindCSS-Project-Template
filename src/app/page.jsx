import Image from "next/image";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-light-color">
            <h1
                className="text-7xl md:text-4xl sm:text-2xl font-sans 
                bg-pallete-color3 text-pallete-color1 p-5 md:p-2 sm:p-1 rounded-md">
                Home Page
                <span className="material-symbols-outlined text-7xl md:text-4xl sm:text-2xl">
                    favorite
                </span>
            </h1>
        </main>
    );
}
