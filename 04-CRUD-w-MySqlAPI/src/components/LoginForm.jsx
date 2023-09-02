import { useContext, useState } from "react";
import axios from "axios";
import { AuthContext } from "../context/authContext";
import { useNavigate } from "react-router-dom";

const initialForm = {
  email: "",
  password: "",
};

const LoginForm = () => {
  const [form, setForm] = useState(initialForm);
  const { user, loginUser } = useContext(AuthContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const navigate = useNavigate();
  const handlesubmit = async (e) => {
    e.preventDefault();
    // console.log(form);
    try {
      // Creamos la cookie:
      const res = await axios.post("http://localhost:3100/api/login", form, {
        withCredentials: true,
      });
      const responseUser = await axios.get("http://localhost:3100/api/login", {
        withCredentials: true,
      });
      loginUser(responseUser.data);
      navigate("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <form onSubmit={handlesubmit}>
      <input
        type="email"
        placeholder="Email"
        name="email"
        value={form.email}
        onChange={handleChange}
        required
      />
      <input
        type="password"
        placeholder="Password"
        name="password"
        value={form.password}
        onChange={handleChange}
        required
      />
      <input type="submit" value="Logear" />
    </form>
  );
};

export default LoginForm;
