import { createContext, useReducer } from "react";
import { cartInitialState, cartReducer } from "../reducers/CartReducer";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, cartInitialState);

  const data = { state, dispatch };

  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};
export { CartProvider };
export default CartContext;
