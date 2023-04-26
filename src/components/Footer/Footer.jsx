import Logo from "components/shared/Logo/Logo";
import Socials from "components/shared/Socials/Socials";
import Address from "./Address/Address";

const Footer = () => {
    return (
        <footer>
            <Logo />
            <Address />
            <div>
                <p>Join us</p>
                <Socials />
            </div>
            <div>
                <p>Subscribe To The Newsletter</p>
            </div>
        </footer>
    );
};

export default Footer;
