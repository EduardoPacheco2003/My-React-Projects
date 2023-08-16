import { createContext, useState } from "react";
import { helpHttp } from "../helpers/helpHttp";

const AuthContext = createContext();

const userInitalState = {
  id: null,
  name: "",
  user: "",
  email: "",
  permissions: [],
};

function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(false);
  const [user, setUser] = useState(userInitalState);

  const authUser = () => setAuth(true);

  const logOutUser = () => {
    setAuth(false);
    setUser(userInitalState);
  };

  const logInUser = async (userForm) => {
    try {
      let users = await helpHttp().get("http://localhost:5000/usuarios");

      let userfound = users.find(
        (user) =>
          user.user === userForm.user && user.password === userForm.password
      );

      if (userfound) {
        setAuth(true);
        setUser(userfound);
        return user;
      } else {
        throw new Error("El usuario o contraseña no existen.");
      }
    } catch (error) {
      console.log(error);
      setAuth(false);
      setUser(userInitalState);
      return error;
    }
  };

  const registerUser = async (userForm) => {
    try {
      let users = await helpHttp().get("http://localhost:5000/usuarios");

      let newUser = users.find((user) => user.user === userForm.user);

      if (newUser) throw new Error("El usuario ya existe");

      users = users.pop();
      const lastId = users.id;
      newUser = { ...userForm, id: lastId + 1, permissions: [] };
      delete newUser.password2;

      const options = {
        headers: { "content-type": "application/json" },
        body: newUser,
      };
      const res = await helpHttp().post(
        "http://localhost:5000/usuarios",
        options
      );
      // console.log(res);
      if (!res.err) {
        setAuth(true);
        delete res.password;
        setUser(res);
        return res;
      } else {
        throw res;
      }
    } catch (error) {
      console.log(error);
      setAuth(false);
      setUser(userInitalState);
      return error;
    }
  };

  const data = { auth, user, authUser, logOutUser, logInUser, registerUser };
  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};

export { AuthProvider };
export default AuthContext;
