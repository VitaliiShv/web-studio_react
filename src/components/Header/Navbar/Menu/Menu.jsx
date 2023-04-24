import items from "./items";
import styles from "./Menu.module.scss";

const Menu = () => {
    const elements = items.map(({ id, link, name }) => (
        <li className={styles.menu__item} key={id}>
            <a className={styles.menu__link} href={link}>
                {name}
            </a>
        </li>
    ));
    return <ul className={styles.menu}>{elements}</ul>;
};

export default Menu;
