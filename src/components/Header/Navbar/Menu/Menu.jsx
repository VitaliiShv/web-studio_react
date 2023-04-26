import items from "./items";

const Menu = () => {
    const elements = items.map(({ id, link, name }) => (
        <li key={id}>
            <a href={link}>{name}</a>
        </li>
    ));
    return <ul>{elements}</ul>;
};

export default Menu;
