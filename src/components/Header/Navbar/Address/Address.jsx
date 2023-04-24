const Address = () => {
    return (
        <ul class="address">
            <li class="address__item">
                <a href="mailto:info@devstudio.com" class="address__link">
                    <svg width="16" height="12" class="address__icon">
                        <use href="./img/sprite.svg#icon-envelope"></use>
                    </svg>
                    info@devstudio.com
                </a>
            </li>
            <li class="address__item">
                <a
                    href="tel:+380961111111"
                    class="address__link address__link--big"
                >
                    <svg width="10" height="16" class="address__icon">
                        <use href="./img/sprite.svg#icon-smartphone"></use>
                    </svg>
                    +38 096 111 11 11
                </a>
            </li>
        </ul>
    );
};

export default Address;
