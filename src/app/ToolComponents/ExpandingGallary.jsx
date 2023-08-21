"use client";
import gallary from "../../../public/data/gallaryData";

export default function ExpandingGallary() {
    // This is previous active image Node. Initially Null.
    let prevActiveImg = null;

    // The active classes.
    const activeClasses = ["flex-grow-[5]"];

    // This function is triggers when the images are clicked. It expands images.
    function expandImages(event) {
        event.target.classList.add(...activeClasses);
        const textEL = event.target.children[0];
        textEL.classList.remove("opacity-0");
        textEL.classList.add("opacity-100");

        if (prevActiveImg) {
            prevActiveImg.classList.remove(...activeClasses);
            prevActiveImg.children[0].classList.remove("opacity-100");
            prevActiveImg.children[0].classList.add("opacity-0");
        }

        prevActiveImg = event.target;
    }

    return (
        <div
            className="w-full flex justify-center items-center animate-zoom-in 
            py-24 md:py-10 sm:py-5 z-0">
            {gallary.map((item, idx) => {
                return (
                    <div
                        onClick={expandImages}
                        key={idx}
                        className={`h-[50vh] m-3 rounded-[50px] cursor-pointer 
                        relative transition-all flex-grow-[0.5]
                        sm:[&:nth-of-type(9)]:hidden sm:[&:nth-of-type(8)]:hidden 
                        sm:[&:nth-of-type(7)]:hidden sm:[&:nth-of-type(6)]:hidden`}
                        style={{
                            backgroundImage: `url('${item.imgURL}')`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                        }}>
                        <p
                            className="text-white absolute bottom-5 left-5 
                            m-0 opacity-0 transition-opacity">
                            {item.text}
                        </p>
                    </div>
                );
            })}
        </div>
    );
}
