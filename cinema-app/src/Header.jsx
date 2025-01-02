import "./index.css";

function Header() {
  return (
    <header className="header" id="header">
        <nav className="nav container">
            <a href="#" className="nav__logo">NuMetro</a>
            <div className="nav__menu" id="nav-menu">
                <ul className="nav__list">
                    <li className="nav__item">
                        <a href="#home" className="nav__link active-link">Home</a>
                    </li>
                    <li className="nav__item">
                        <a href="#movies" className="nav__link">Movies</a>
                    </li>
                    <li className="nav__item">
                        <a href="#prices" className="nav__link">Prices</a>
                    </li>
                    <li className="nav__item">
                        <a href="#showtimes" className="nav__link">Showtimes</a>
                    </li>
                    <li className="nav__item">
                        <a href="#contact" className="nav__link">Contact & Support</a>
                    </li>
                </ul>
                <i className='bx bx-x nav__close' id="nav-close"></i>
            </div>
        </nav>
    </header>
  );
}
export default Header;