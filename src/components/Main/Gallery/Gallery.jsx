import items from "./items";

const Gallery = () => {
    const elements = items.map(({ id, description, imgSrc, title, type }) => (
        <li key={id}>
            <a href="">
                <p>{description} </p>
                <img src={imgSrc} alt={title} />
                <h2>{title}</h2>
                <p>{type}</p>
            </a>
        </li>
    ));

    return <ul> {elements}</ul>;
};

export default Gallery;
