import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/authContext";
import darkThemeSvg from "../assets/moon.svg";
import lightThemeSvg from "../assets/sun.svg";

const Header = () => {
  const { auth } = useContext(AuthContext);
  const [darkTheme, setDarkTheme] = useState(true);
  const navigate = useNavigate();

  const changeTheme = (e) => {
    e.preventDefault();
    const $body = document.querySelector("body");
    if ($body.classList.contains("dark")) {
      $body.classList.toggle("dark");
      setDarkTheme(false);
    } else {
      $body.classList.toggle("dark");
      setDarkTheme(true);
    }
  };

  return (
    <header className="header">
      <h3>
        <Link to={"/"}>Inicio</Link>
      </h3>
      <nav className="menu">
        <Link to={"/dashboard"}>Dashboard</Link>
      </nav>
      <nav className="menu">
        {!auth && <Link to={"/login"}>Login</Link>}
        {!auth && <Link to={"/register"}>Register</Link>}
        {darkTheme && (
          <div className="theme-container" onClick={changeTheme}>
            <img src={darkThemeSvg} alt="Dark Theme" />
          </div>
        )}
        {!darkTheme && (
          <div className="theme-container" onClick={changeTheme}>
            <img src={lightThemeSvg} alt="Light Theme" />
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
