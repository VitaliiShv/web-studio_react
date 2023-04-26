import style from "./Logo.module.scss";

const Logo = () => {
    return (
        <a href="/" className={style.logo}>
            <span>Web</span>
            <span className={style.logo__item___black}>Studio</span>
        </a>
    );
};

export default Logo;
