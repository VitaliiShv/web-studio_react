import items from "./items";
import Button from "components/shared/Button/Button";

const Filters = () => {
    const elements = items.map(({ id, name }) => (
        <li key={id}>
            <Button>{name}</Button>
        </li>
    ));
    return <ul>{elements}</ul>;
};

export default Filters;
