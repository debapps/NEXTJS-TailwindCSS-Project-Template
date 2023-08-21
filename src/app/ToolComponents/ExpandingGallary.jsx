"use client";
import gallary from "../../../public/data/gallaryData";

export default function ExpandingGallary() {
    // This is previous active image Node. Initially Null.
    let prevActiveImg = null;

    let sameCount = 0;

    // The active class.
    const activeClass = "flex-grow-[5]";

    // This function is triggers when the images are clicked. It expands images.
    function expandImages(event) {
        const currentImage = event.target;

        if (prevActiveImg === currentImage) {
            sameCount++;
        } else {
            sameCount = 0;
            prevActiveImg = currentImage;
        }

        if (sameCount === 0) {
            closeAllImages(currentImage);
        }

        togglePanel(currentImage);
    }

    // This fuction closes all image panels.
    function closeAllImages(currentImage) {
        // Get all the images.
        const panels = currentImage.parentElement.children;

        for (let panel of panels) {
            closePanel(panel);
        }
    }

    function closePanel(panel) {
        panel.classList.remove(activeClass);

        const panelText = panel.children[0];
        panelText.classList.remove("opacity-100");
        panelText.classList.add("opacity-0");
    }

    function togglePanel(panel) {
        panel.classList.toggle(activeClass);

        const panelText = panel.children[0];
        panelText.classList.toggle("opacity-100");
        panelText.classList.toggle("opacity-0");
    }

    return (
        <div
            className="w-full flex justify-center items-center animate-zoom-in 
            py-16 md:py-10 sm:py-5 z-0">
            {gallary.map((item, idx) => {
                return (
                    <div
                        onClick={expandImages}
                        key={idx}
                        className={`h-[50vh] m-3 rounded-[50px] cursor-pointer 
                        relative shadow-lg shadow-dark-color dark:shadow-pallete-color5 
                        transition-all flex-grow-[0.5]
                        sm:[&:nth-of-type(9)]:hidden sm:[&:nth-of-type(8)]:hidden 
                        sm:[&:nth-of-type(7)]:hidden sm:[&:nth-of-type(6)]:hidden`}
                        style={{
                            backgroundImage: `url('${item.imgURL}')`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                        }}>
                        <p
                            className="text-white bg-dark-color/60 p-1 absolute bottom-5 left-5 
                            m-0 opacity-0 transition-opacity">
                            {item.text}
                        </p>
                    </div>
                );
            })}
        </div>
    );
}
