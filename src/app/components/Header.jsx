import Logo from "./Logo";
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
        <header className="px-4 py-8 w-full bg-light-color flex flex-row justify-between items-center overflow-x-hidden">
            <Logo text="Next Template" />
            <NavBar navData={navData} />
        </header>
    );
}
