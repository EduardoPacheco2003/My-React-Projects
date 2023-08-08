import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { authTYPES } from "../reducers/authReducer";

const initialForm = {
  id: 1,
  user: "",
  email: "",
  password: "",
  password2: "",
};

const RegisterForm = () => {
  const [registerForm, setRegisterForm] = useState(initialForm);
  const navigate = useNavigate();
  const { state, dispatch } = useContext(AuthContext);

  const handleChange = (e) => {
    setRegisterForm({
      ...registerForm,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !registerForm.user ||
      !registerForm.email ||
      !registerForm.password ||
      !registerForm.password2
    ) {
      alert("Algun campo esta incompleto");
      return;
    }

    if (registerForm.password !== registerForm.password2) {
      alert("Las contraseñas no coinciden");
      return;
    }

    let fakeRes = true;
    if (fakeRes) {
      const user = {
        id: registerForm.id,
        user: registerForm.user,
        password: registerForm.password,
      };
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
        <h3>Email:</h3>
        <input type="email" name="email" onChange={handleChange} />
        <h3>Contraseña:</h3>
        <input type="password" name="password" onChange={handleChange} />
        <h3>Confirmar Contraseña:</h3>
        <input type="password" name="password2" onChange={handleChange} />
        <nav className="login-nav">
          <input type="submit" value="Registrarse" />
          <button onClick={handleCancel}>Cancelar</button>
        </nav>
      </form>
    </div>
  );
};

export default RegisterForm;
