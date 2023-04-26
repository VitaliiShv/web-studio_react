import items from "./items";

const Customers = () => {
    const customers = items.map(({ id, name, text }) => (
        <li key={id}>
            <a href="">
                <svg></svg>
            </a>
        </li>
    ));

    return (
        <section>
            <h2>Regular customers </h2>
            <ul>{customers}</ul>
        </section>
    );
};

export default Customers;
