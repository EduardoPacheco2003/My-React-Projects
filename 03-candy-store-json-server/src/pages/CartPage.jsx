import { useContext } from "react";
import CartItem from "../components/CartItem";
import CartContext from "../context/cartContext";
import { cartTYPES } from "../reducers/CartReducer";

const CartPage = () => {
  const { state, dispatch } = useContext(CartContext);
  const { cart, total } = state;
  console.log(cart);

  const deleteOneFromCart = (id) => {
    dispatch({ type: cartTYPES.DELETE_FROM_CART, payload: id });
  };

  const deleteAllFromCart = (id) => {
    dispatch({ type: cartTYPES.DELETE_ALL_FROM_CART, payload: id });
  };

  const cleanCart = () => {
    dispatch({ type: cartTYPES.CLEAN_CART });
  };

  return (
    <section className="vh-100">
      <h2>Carrito:</h2>
      <h3
        style={{
          padding: "1rem",
          textAlign: "center",
          backgroundColor: "#9b013c",
          borderRadius: "1rem",
        }}
      >
        Total: ${total}
      </h3>
      <div style={{ margin: ".5rem auto" }}>
        <button onClick={cleanCart}>Limpiar carrito</button>
      </div>
      <article className="products-container">
        {cart &&
          cart.map((item) => (
            <CartItem
              item={item}
              key={item.id}
              deleteOneFromCart={deleteOneFromCart}
              deleteAllFromCart={deleteAllFromCart}
            />
          ))}
      </article>
    </section>
  );
};

export default CartPage;
