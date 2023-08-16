import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../context/authContext";

export const useLoginForm = (initialForm, validateForm) => {
  const [loginForm, setLoginForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);
  const navigate = useNavigate();
  const { logInUser } = useContext(AuthContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginForm({
      ...loginForm,
      [name]: value,
    });
  };
  const handleBlur = (e) => {
    handleChange(e);
    // console.log(loginForm);
    setErrors(validateForm(loginForm));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors(validateForm(loginForm));
    if (Object.keys(errors).length === 0) {
      alert("Logeando Usuario");
      setLoading(true);
      // LOGIN:
      const response = await logInUser(loginForm);
      if (response.err || response instanceof Error) {
        setResponse(false);
        alert(response.message ? response.message : response.statusText);
        setLoading(false);
        clearForm();
      } else {
        setResponse(true);
        setLoading(false);
        navigate("/perfil");
      }
    } else {
      return;
    }
  };
  const handleCancel = (e) => {
    e.preventDefault();
    navigate("/");
  };

  const clearForm = () => {
    setLoginForm(initialForm);
  };

  return {
    loginForm,
    errors,
    loading,
    response,
    handleChange,
    handleBlur,
    handleSubmit,
    handleCancel,
  };
};
