import styles from "./Navbar.module.scss";
import Logo from "../../shared/Logo/Logo";
import Menu from "./Menu/Menu";

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <Logo />
            <div className={styles.menu_container}>
                <Menu />
            </div>
        </nav>
    );
};

export default Navbar;
