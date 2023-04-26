import Socials from "components/shared/Socials/Socials";
import items from "./items";

const Team = () => {
    const members = items.map(({ id, name, position, pictureSrc }) => (
        <li key={id}>
            <img src={pictureSrc} alt={name} width="270" height="260" />
            <h3>{name}</h3>
            <p>{position}</p>
            <Socials />
        </li>
    ));

    return (
        <section>
            <h2>Our Team</h2>
            {members}
        </section>
    );
};

export default Team;
