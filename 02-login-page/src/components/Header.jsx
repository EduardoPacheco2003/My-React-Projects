import { NavLink, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { authTYPES } from "../reducers/authReducer";

const Header = () => {
  const { state, dispatch } = useContext(AuthContext);
  const { isAuthenticated } = state;
  const navigate = useNavigate();
  // eslint-disable-next-line no-unused-vars
  const handleLogin = (e) => {
    navigate("/login");
  };

  // eslint-disable-next-line no-unused-vars
  const handleRegister = (e) => {
    navigate("/register");
  };

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch({ type: authTYPES.LOGOUT });
    navigate("/");
  };

  return (
    <header className="header">
      <h3>Page-02</h3>
      <nav className="header-menu">
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "")}
          to={"/"}
        >
          Inicio
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "")}
          to={"/principal"}
        >
          Principal
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "")}
          to={"/categorias"}
        >
          Categorias
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "")}
          to={"/analiticas"}
        >
          Analiticas
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "")}
          to={"/acerca-de"}
        >
          Acerca de
        </NavLink>
      </nav>
      <nav className="header-menu">
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
