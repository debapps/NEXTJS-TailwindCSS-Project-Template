import Logo from "./Logo";
import ModeIcons from "./ModeIcons";
import NavBar from "./NavBar";
import { navData } from "../../../public/data/navData";

export default function Header() {
    return (
        <header
            className="px-4 py-8 w-full bg-light-color/90 dark:bg-dark-color/90 
            flex flex-row justify-between items-center overflow-hidden fixed
            shadow-lg shadow-pallete-color4 dark:shadow-pallete-color5">
            <div className="order-1 md:order-2 sm:order-2">
                <Logo text="Debaditya Bhar" />
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
