import Hero from "./Hero/Hero";
import Benefits from "./Benefits/Benefits";
import Team from "./Team/Team";
import Customers from "./Customers/Customers";
import Gallery from "./Gallery/Gallery";
import Filters from "./Filters/Filters";

const Main = () => {
    return (
        <main>
            <Hero />
            <Benefits />
            <Team />
            <Customers />
            <Filters />
            <Gallery />
        </main>
    );
};

export default Main;
