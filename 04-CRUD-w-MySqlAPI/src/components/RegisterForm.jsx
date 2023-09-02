import { useState } from "react";
import { useRegisterForm } from "../hooks/useRegisterForm";

const initialForm = {
  username: "",
  password: "",
  password2: "",
  email: "",
};

const validationsForms = (form) => {
  let errors = {};
  let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
  let regexUser = /^[a-zA-Z0-9_]{1,10}$/;
  let regexPass =
    /^(?=.*[!@#$%^&*()_+={}\[\]:;"'<>,.?\/\\|`~])(?=.*[A-Z])(?=.*\d).{8,}$/;
  let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
  // let regexComments = /^.{1,255}$/;

  if (!form.username.trim()) {
    errors.username = `El campo "Username es requerido."`;
  } else if (!regexUser.test(form.username.trim())) {
    errors.username = `El campo "User solo acepta: (letras, '_', y numeros).`;
  }

  if (!form.email.trim()) {
    errors.email = `El campo "Email es requerido."`;
  } else if (!regexEmail.test(form.email.trim())) {
    errors.email = `El campo "Email" es incorrecto.`;
  }

  if (!form.password.trim()) {
    errors.password = `El campo "contraseña" es requerido."`;
  }
  // else if (!regexPass.test(form.password.trim())) {
  //   errors.password = `El campo contraseña debe contenter al menos 8 caracteres, 1 caracter especia, 1 mayúscula y una minúscula.`;
  // }

  if (!form.password2.trim()) {
    errors.password2 = `El campo "Confirmar contraseña" es requerido."`;
  } else if (form.password.trim() !== form.password2.trim()) {
    errors.password2 = `Las contraseñas no son iguales.`;
  }
  return errors;
};

const RegisterForm = () => {
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
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Username"
        name="username"
        value={registerForm.username}
        onChange={handleChange}
        onBlur={handleBlur}
        required
      />
      {errors.username && <p>{errors.username}</p>}
      <input
        type="email"
        placeholder="Email"
        name="email"
        value={registerForm.email}
        onChange={handleChange}
        onBlur={handleBlur}
        required
      />
      {errors.email && <p>{errors.email}</p>}
      <input
        type="password"
        placeholder="Password"
        name="password"
        value={registerForm.password}
        onChange={handleChange}
        onBlur={handleBlur}
        required
      />
      {errors.password && <p>{errors.password}</p>}
      <input
        type="password"
        placeholder="Confirm Password"
        name="password2"
        value={registerForm.password2}
        onChange={handleChange}
        onBlur={handleBlur}
        required
      />
      {errors.password2 && <p>{errors.password2}</p>}
      <input type="submit" value="Registrarse" />
      <button onClick={handleCancel}>Cancelar</button>
    </form>
  );
};

export default RegisterForm;
