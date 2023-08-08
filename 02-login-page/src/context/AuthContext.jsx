import { createContext, useReducer } from "react";
import { initialState, authReducer } from "../reducers/authReducer";

const AuthContext = createContext(initialState);

const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
