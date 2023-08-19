export default function ProgressLoading({ active }) {
    return (
        active && (
            <div className="flex flex-row justify-center items-center space-x-2">
                <span
                    className="inline-block w-4 h-4 rounded-2xl animate-bounce-loading
                  bg-pallete-color4 dark:bg-pallete-color5"></span>
                <span
                    className="inline-block w-4 h-4 rounded-2xl animate-bounce-loading
                  bg-pallete-color4 dark:bg-pallete-color5"
                    style={{
                        animationDelay: "0.5s",
                        animationFillMode: "backwards",
                    }}></span>
                <span
                    className="inline-block w-4 h-4 rounded-2xl animate-bounce-loading
                  bg-pallete-color4 dark:bg-pallete-color5"
                    style={{
                        animationDelay: "1s",
                        animationFillMode: "backwards",
                    }}></span>
            </div>
        )
    );
}
