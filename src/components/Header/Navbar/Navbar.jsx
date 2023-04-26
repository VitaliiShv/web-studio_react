import Logo from "../../shared/Logo/Logo";
import Menu from "./Menu/Menu";

const Navbar = () => {
    return (
        <nav>
            <Logo />
            <div>
                <Menu />
            </div>
        </nav>
    );
};

export default Navbar;
