import { useRef } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const panelBtn = useRef(null);
  const headerMenu = useRef(null);
  const loginMenu = useRef(null);

  const isAuthenticated = false;

  const openMenu = () => {
    if (panelBtn.current) {
      if (
        headerMenu.current.classList.contains("open") &&
        loginMenu.current.classList.contains("open")
      ) {
        panelBtn.current.classList.remove("is-active");
        headerMenu.current.classList.remove("open");
        loginMenu.current.classList.remove("open");
      } else {
        panelBtn.current.classList.add("is-active");
        headerMenu.current.classList.add("open");
        loginMenu.current.classList.add("open");
      }
    }
  };

  // const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    openMenu();
    navigate("/login");
  };

  const handleRegister = (e) => {
    e.preventDefault();
    openMenu();
    navigate("/register");
  };

  const handleLogout = (e) => {
    openMenu();
    e.preventDefault();
  };

  return (
    <header className="header">
      <h3>Page-03</h3>
      <button
        className="panel-btn hamburger hamburger--vortex"
        type="button"
        ref={panelBtn}
        onClick={openMenu}
      >
        <span className="hamburger-box">
          <span className="hamburger-inner"></span>
        </span>
      </button>
      <nav className="header-menu" ref={headerMenu}>
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "")}
          to={"/"}
          onClick={openMenu}
        >
          Inicio
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "")}
          to={"/productos"}
          onClick={openMenu}
        >
          Productos
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "")}
          to={"/carrito"}
          onClick={openMenu}
        >
          Carrito
        </NavLink>

        <NavLink
          className={({ isActive }) => (isActive ? "active" : "")}
          to={"/perfil"}
          onClick={openMenu}
        >
          Perfil
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "")}
          to={"/acerca-de"}
          onClick={openMenu}
        >
          Acerca de
        </NavLink>
      </nav>
      <nav className="menu-login" ref={loginMenu}>
        {isAuthenticated && (
          <button onClick={handleLogout}>Cerrar Sesion</button>
        )}
        {!isAuthenticated && (
          <button onClick={handleLogin}>Iniciar Sesion</button>
        )}
        {!isAuthenticated && (
          <button onClick={handleRegister}>Registrarse</button>
        )}
      </nav>
    </header>
  );
};

export default Header;
