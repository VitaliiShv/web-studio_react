import styles from "./Navbar.module.scss";
import Logo from "./Logo/Logo";
import Address from "./Address/Address";
import Menu from "./Menu/Menu";

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <Logo />
            <div className={styles.menu_container}>
                <Menu />
                <Address />
            </div>
        </nav>
    );
};

export default Navbar;
