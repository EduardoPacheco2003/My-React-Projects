import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/authContext";

export const useRegisterForm = (initialForm, validateForm) => {
  const [registerForm, setRegisterForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);
  const navigate = useNavigate();
  const { registerUser } = useContext(AuthContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRegisterForm({
      ...registerForm,
      [name]: value,
    });
  };
  const handleBlur = (e) => {
    handleChange(e);
    // console.log(registerForm);
    setErrors(validateForm(registerForm));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors(validateForm(registerForm));
    if (Object.keys(errors).length === 0) {
      alert("Registrando Usuario");
      setLoading(true);
      const response = await registerUser(registerForm);
      console.log(response);
      navigate("/dashboard");
    }
  };
  const handleCancel = (e) => {
    e.preventDefault();
    navigate("/");
  };

  const clearForm = () => {
    setRegisterForm(initialForm);
  };

  return {
    registerForm,
    errors,
    loading,
    response,
    handleChange,
    handleBlur,
    handleSubmit,
    handleCancel,
  };
};
