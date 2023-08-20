"use client";

import { useRef, useState } from "react";
import dynamic from "next/dynamic";

// Import the JoditEditor using dynamic and server side rendering to false.
const JoditEditor = dynamic(() => import("jodit-react"), { ssr: false });

export default function StoryForm({ closeFunc, handleSave }) {
    // The editor content hook.
    const [content, setContent] = useState("");

    // editor reference.
    const editor = useRef(null);

    return (
        <form
            onSubmit={handleSave}
            className="flex flex-col justify-center items-center space-y-2 w-full">
            <div className="w-full pb-4 text-center">
                <h2 className="font-ubuntu">Add New Story</h2>
                <span
                    className="material-symbols-rounded fixed right-8 top-8
                    font-extrabold text-5xl md:text-3xl sm:text-2xl text-pallete-color4 cursor-pointer
                    dark:text-pallete-color1 hover:text-pallete-color1 dark:hover:text-pallete-color5"
                    onClick={() => closeFunc(false)}>
                    cancel
                </span>
            </div>
            <div className="flex flex-col items-center space-y-4 pb-4 w-full">
                <input
                    className="w-full p-2 font-sans text-base sm:text-xs font-normal border 
                    border-purple-700 focus:outline-none focus:ring focus:ring-pallete-color1/70 
                    bg-transparent rounded"
                    type="text"
                    placeholder="Title"
                    required
                />
                <input
                    className="w-full p-2 font-sans text-base sm:text-xs font-normal border 
                    border-purple-700 focus:outline-none focus:ring focus:ring-pallete-color1/70
                    bg-transparent rounded"
                    type="text"
                    placeholder="Category"
                    required
                />
                <input
                    className="w-full p-2 font-sans text-base sm:text-xs font-normal border 
                    border-purple-700 focus:outline-none focus:ring focus:ring-pallete-color1/70
                    bg-transparent rounded"
                    type="text"
                    placeholder="Synopsis"
                    required
                />
                <input
                    className="w-full p-2 font-sans text-base sm:text-xs font-normal border 
                    border-purple-700 focus:outline-none focus:ring focus:ring-pallete-color1/70
                    bg-transparent rounded"
                    type="text"
                    placeholder="Image Link"
                />
                {/* <textarea
                    className="w-full p-2 font-sans text-base sm:text-xs font-normal border 
                    border-purple-700 focus:outline-none focus:ring focus:ring-pallete-color1/70
                    bg-transparent rounded"
                    rows={10}
                    cols={20}
                    placeholder="Content"></textarea> */}

                <textarea
                    className="hidden"
                    value={content}
                    onChange={(newContent) => setContent(newContent)}
                />

                <div className="w-full">
                    <JoditEditor
                        ref={editor}
                        value={content}
                        placeholder="Content"
                        tabIndex={1}
                        onChange={(newContent) => setContent(newContent)}
                        onBlur={(newContent) => setContent(newContent)}
                    />
                </div>
            </div>
            <button
                className="w-full p-2 font-ubuntu text-sm sm:text-base text-light-color 
                font-semibold border border-dark-color rounded 
                bg-pallete-color4 hover:bg-pallete-color1 m-1">
                Save
            </button>
        </form>
    );
}
