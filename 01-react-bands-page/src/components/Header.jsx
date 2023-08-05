import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <h3>Bands Page</h3>
        <nav className="header-menu">
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "")}
            to={"/"}
          >
            Inicio
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "")}
            to={"/acerca-de"}
          >
            Acerca de
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
