import items from "./items";

const Benefits = () => {
    const benefits = items.map(({ id, name, text }) => (
        <li key={id}>
            <h3>{name}</h3>
            <p>{text}</p>
        </li>
    ));

    return (
        <section>
            <h2>Benefits</h2>
            <ul>{benefits}</ul>
        </section>
    );
};

export default Benefits;
