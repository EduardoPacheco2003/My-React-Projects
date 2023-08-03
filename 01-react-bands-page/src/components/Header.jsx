import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <h3>Bands Page</h3>
        <nav className="header-menu">
          <NavLink to={"/"}>Inicio</NavLink>
          <NavLink to={"/"}>Acerca de</NavLink>
        </nav>
        <nav className="header-menu">
          <button>Iniciar Sesión</button>
          <button>Dark Theme</button>
          {/* <button>Cerrar Sesión</button>
          <button>Registrarse</button> */}
        </nav>
      </div>
    </header>
  );
};

export default Header;
