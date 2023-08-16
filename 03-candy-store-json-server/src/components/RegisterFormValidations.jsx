import { useContext } from "react";

import { useRegisterForm } from "../hooks/useRegisterForm";
import Loader from "./Loader";

const initialForm = {
  id: null,
  name: "",
  user: "",
  email: "",
  password: "",
  password2: "",
};

const validationsForms = (form) => {
  let errors = {};
  let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
  let regexUser = /^[a-zA-Z0-9_]{1,10}$/;
  let regexPass =
    /^(?=.*[!@#$%^&*()_+={}\[\]:;"'<>,.?\/\\|`~])(?=.*[A-Z])(?=.*\d).{8,}$/;
  let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
  // let regexComments = /^.{1,255}$/;

  if (!form.name.trim()) {
    errors.name = `El campo Nombre es requerido`;
  } else if (!regexName.test(form.name.trim())) {
    errors.name = `El campo "Nombre" solo puede contener letras y espacio`;
  }

  if (!form.user.trim()) {
    errors.user = `El campo "User es requerido."`;
  } else if (!regexUser.test(form.user.trim())) {
    errors.user = `El campo "User solo acepta: (letras, '_', y numeros).`;
  }

  if (!form.email.trim()) {
    errors.email = `El campo "Email es requerido."`;
  } else if (!regexEmail.test(form.email.trim())) {
    errors.email = `El campo "Email" es incorrecto.`;
  }

  if (!form.password.trim()) {
    errors.password = `El campo "contraseña" es requerido."`;
  } else if (!regexPass.test(form.password.trim())) {
    errors.password = `El campo contraseña debe contenter al menos 8 caracteres, 1 caracter especia, 1 mayúscula y una minúscula.`;
  }

  if (!form.password2.trim()) {
    errors.password2 = `El campo "Confirmar contraseña" es requerido."`;
  } else if (form.password.trim() !== form.password2.trim()) {
    errors.password2 = `Las contraseñas no son iguales.`;
  }
  return errors;
};

const RegisterFormValidations = () => {
  const {
    registerForm,
    errors,
    loading,
    response,
    handleChange,
    handleBlur,
    handleSubmit,
    handleCancel,
  } = useRegisterForm(initialForm, validationsForms);

  return (
    <div className="form-container">
      <form className="form" onSubmit={handleSubmit}>
        <h3>Nombre:</h3>
        <input
          type="text"
          name="name"
          onBlur={handleBlur}
          onChange={handleChange}
          value={registerForm.name}
        />
        {errors.name && <p>{errors.name}</p>}
        <h3>Usuario:</h3>
        <input
          type="text"
          name="user"
          onBlur={handleBlur}
          onChange={handleChange}
          value={registerForm.user}
        />
        {errors.user && <p>{errors.user}</p>}
        <h3>Email:</h3>
        <input
          type="email"
          name="email"
          onBlur={handleBlur}
          onChange={handleChange}
          value={registerForm.email}
        />
        {errors.email && <p>{errors.email}</p>}
        <h3>Contraseña:</h3>
        <input
          type="password"
          name="password"
          onBlur={handleBlur}
          onChange={handleChange}
          value={registerForm.password}
        />
        {errors.password && <p>{errors.password}</p>}
        <h3>Confirmar Contraseña:</h3>
        <input
          type="password"
          name="password2"
          onBlur={handleBlur}
          onChange={handleChange}
          value={registerForm.password2}
        />
        {errors.password2 && <p>{errors.password2}</p>}
        <nav className="form-nav">
          <input type="submit" value="Registrarse" />
          <button onClick={handleCancel}>Cancelar</button>
        </nav>
        {loading && <Loader />}
        {response && <p>No se pudo registrar su usuario</p>}
      </form>
    </div>
  );
};

export default RegisterFormValidations;
