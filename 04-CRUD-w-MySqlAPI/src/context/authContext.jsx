import { createContext, useEffect, useState } from "react";
import axios from "axios";

const initialUserValues = {
  id: null,
  username: "",
  email: "",
};

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(initialUserValues);
  const [auth, setAuth] = useState(false);
  // Try to log on PageLoad
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const responseUser = await axios.get(
          "http://localhost:3100/api/login",
          {
            withCredentials: true,
          }
        );
        if (responseUser.status !== 200) {
          throw responseUser;
        }
        // console.log(responseUser);
        setUser(responseUser.data);
        setAuth(true);
      } catch (error) {
        console.log(error);
      }
    };
    if (auth) {
      console.log("Existe");
    } else {
      // console.log("No existe");
      fetchUser();
    }
    // console.log(user);
  }, []);

  const registerUser = async (user) => {
    try {
      const response = await axios.post(
        "http://localhost:3100/api/register",
        user,
        { withCredentials: true }
      );
      const responseUser = await axios.get("http://localhost:3100/api/login", {
        withCredentials: true,
      });
      loginUser(responseUser.data);

      return response.data;
    } catch (error) {}
  };

  const loginUser = (user) => {
    setUser(user);
    setAuth(true);
  };

  const logoutUser = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3100/api/logout",
        null,
        { withCredentials: true }
      );
      if (response.status !== 200) throw response;
      setUser(initialUserValues);
      setAuth(false);
      // console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const data = { user, auth, registerUser, loginUser, logoutUser };
  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};
