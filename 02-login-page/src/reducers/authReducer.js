const authTYPES = {
  LOGIN: "LOGIN",
  LOGOUT: "LOGOUT",
  LOGIN_FAILED: "LOGIN_FAILED",
  REGSITER: "REGISTER",
};

const initialState = {
  isAuthenticated: false,
  user: {
    id: null,
    name: "",
    password: "",
    permissions: [],
  },
  error: null,
};

const authReducer = (state, action) => {
  switch (action.type) {
    case authTYPES.LOGIN:
      return {
        ...state,
        isAuthenticated: true,
        user: { ...state.user, ...action.payload },
      };
    case authTYPES.LOGOUT:
      return {
        ...state,
        isAuthenticated: false,
        user: initialState.user,
      };
    case authTYPES.LOGIN_FAILED: {
      return {
        ...state,
        isAuthenticated: false,
        error: action.payload,
      };
    }
    case authTYPES.REGSITER: {
      return {
        ...state,
        isAuthenticated: true,
        user: { ...state.user, ...action.payload },
      };
    }
    default:
      return state;
  }
};

export { authTYPES, initialState, authReducer };
