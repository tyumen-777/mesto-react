
import headerLogo from '../images/logo__header.svg'
function Header() {
    return (
        <header className="header">
            <img src={headerLogo} alt="Логотип сайта" className="header__logo"/>
        </header>
    );
}

export default Header;