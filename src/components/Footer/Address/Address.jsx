import items from "./items";

const Address = () => {
    const elements = items.map(({ id, name, link }) => (
        <li key={id}>
            <a href={link}>{name}</a>
        </li>
    ));

    return (
        <address>
            Kyiv city, Lesi Ukrainky Avenue, 26
            <ul>{elements}</ul>
        </address>
    );
};

export default Address;
