import homeIcon from "../../assets/icons/ic_home.svg";

export default function Header() {
  return (
    <header className="app-header">
      <div className="app-header__wrapper">
        <div className="app-header__content">
          <div className="app-header__logo">
            <h1>
              <span>Recipe</span>
              <span>App</span>
            </h1>
          </div>
          <div className="app-header__menu">
            <div className="app-header__items">
              <a>Home</a>
              <a>Vegetarianos</a>
              <a>Platos Principales</a>
              <a>Tortas</a>
              <a>Comida Rápida</a>
              <a>Menu Niños</a>
              <a>Sopas</a>
            </div>
            <div className="app-header__icon">
              <img src={homeIcon} alt="Home Icon" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
