import { useNavigate } from "react-router-dom";
import { useLoginForm } from "../hooks/useLoginForm";
import Loader from "./Loader";

const initialForm = {
  id: null,
  user: "",
  password: "",
};

const validationsForms = (form) => {
  let errors = {};

  let regexUser = /^[a-zA-Z0-9_]{1,10}$/;
  let regexPass =
    /^(?=.*[!@#$%^&*()_+={}\[\]:;"'<>,.?\/\\|`~])(?=.*[A-Z])(?=.*\d).{8,}$/;

  if (!form.user.trim()) {
    errors.user = `El campo "User es requerido."`;
  } else if (!regexUser.test(form.user.trim())) {
    errors.user = `El campo "User solo acepta: (letras, '_', y numeros).`;
  }

  if (!form.password.trim()) {
    errors.password = `El campo "contraseña" es requerido."`;
  } else if (!regexPass.test(form.password.trim())) {
    errors.password = `El campo contraseña debe contenter al menos 8 caracteres, 1 caracter especia, 1 mayúscula y una minúscula.`;
  }

  return errors;
};

const LoginForm = () => {
  const navigate = useNavigate();
  const {
    loginForm,
    errors,
    loading,
    response,
    handleChange,
    handleBlur,
    handleSubmit,
    handleCancel,
  } = useLoginForm(initialForm, validationsForms);

  const handleRegister = (e) => {
    e.preventDefault();
    navigate("/register");
  };

  return (
    <div className="form-container">
      <form className="form" onSubmit={handleSubmit}>
        <h3>Usuario:</h3>
        <input
          type="text"
          name="user"
          onChange={handleChange}
          onBlur={handleBlur}
          value={loginForm.user}
        />
        {errors.user && <p>{errors.user}</p>}
        <h3>Contraseña:</h3>
        <input
          type="password"
          name="password"
          onChange={handleChange}
          onBlur={handleBlur}
          value={loginForm.password}
        />
        {errors.password && <p>{errors.password}</p>}
        {loading && <Loader />}
        <nav className="form-nav">
          <input type="submit" value="Iniciar Sesion" />
          <button onClick={handleCancel}>Cancelar</button>
        </nav>
        <nav className="form-nav">
          <button onClick={handleRegister}>Registrarse</button>
        </nav>
      </form>
    </div>
  );
};

export default LoginForm;
