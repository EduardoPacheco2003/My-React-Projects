import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { authTYPES } from "../reducers/authReducer";

const initialForm = {
  id: 1,
  user: "",
  password: "",
  permissions: ["analize"],
};

const LoginForm = () => {
  const [loginForm, setLoginForm] = useState(initialForm);
  const navigate = useNavigate();
  const { state, dispatch } = useContext(AuthContext);

  const handleChange = (e) => {
    setLoginForm({
      ...loginForm,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let fakeRes = true;
    if (fakeRes) {
      const user = { ...loginForm };
      dispatch({ type: authTYPES.LOGIN, payload: user });
    } else {
      const err = {
        error: true,
        status: "00",
        statusMessage: "Login fallido",
      };
      dispatch({ type: authTYPES.LOGIN_FAILED, payload: err });
    }
    navigate("/principal");
  };

  const handleCancel = (e) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <div className="login-form-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h3>Usuario:</h3>
        <input type="text" name="user" onChange={handleChange} />
        <h3>Contraseña:</h3>
        <input type="password" name="password" onChange={handleChange} />
        <nav className="login-nav">
          <input type="submit" value="Iniciar Sesion" />
          <button onClick={handleCancel}>Cancelar</button>
        </nav>
      </form>
    </div>
  );
};

export default LoginForm;
