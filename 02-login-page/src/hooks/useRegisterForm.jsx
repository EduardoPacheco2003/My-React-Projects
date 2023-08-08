import { useContext, useState } from "react";
import { authTYPES } from "../reducers/authReducer";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

export const useRegisterForm = (initialForm, validateForm) => {
  const [registerForm, setRegisterForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);
  const navigate = useNavigate();
  const { state, dispatch } = useContext(AuthContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRegisterForm({
      ...registerForm,
      [name]: value,
    });
  };
  const handleBlur = (e) => {
    handleChange(e);
    setErrors(validateForm(registerForm));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors(validateForm(registerForm));
    if (Object.keys(errors).length === 0) {
      alert("Registrando Usuario");
      setLoading(true);
      await delay(2000);
      const user = {
        id: registerForm.id,
        user: registerForm.user,
        password: registerForm.password,
      };
      setLoading(false);
      setResponse(true);
      dispatch({ type: authTYPES.REGSITER, payload: user });
      navigate("/principal");
    } else {
      return;
    }
  };
  const handleCancel = (e) => {
    e.preventDefault();
    navigate("/");
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
