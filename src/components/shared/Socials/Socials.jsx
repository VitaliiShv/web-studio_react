import items from "./items";

const Socials = () => {
    const links = items.map(({ id, name, text }) => (
        <li key={id}>
            <a href="">
                <svg width="44" height="44"></svg>
            </a>
        </li>
    ));

    return <ul>{links}</ul>;
};

export default Socials;
