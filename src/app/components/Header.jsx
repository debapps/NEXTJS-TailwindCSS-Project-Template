import Logo from "./Logo";
import ModeIcons from "./ModeIcons";
import NavBar from "./NavBar";

const navData = [
    {
        title: "Home",
        href: "/",
    },
    {
        title: "About",
        href: "/about",
    },
    {
        title: "Articles",
        href: "/articles",
    },
    {
        title: "Contact",
        href: "/contact",
    },
];

export default function Header() {
    return (
        <header
            className="px-4 py-8 w-full bg-light-color dark:bg-dark-color 
            flex flex-row justify-between items-center overflow-hidden">
            <div className="order-1 md:order-2 sm:order-2">
                <Logo text="Next Template" />
            </div>
            <div className="order-2 md:order-1 sm:order-1">
                <NavBar navData={navData} />
            </div>
            <div className="order-3">
                <ModeIcons />
            </div>
        </header>
    );
}
