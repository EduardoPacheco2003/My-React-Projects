const buttonsContainer = {
  display: "flex",
  justifyContent: "space-evenly",
  alignContent: "center",
};

const CartItem = ({ item, deleteOneFromCart, deleteAllFromCart }) => {
  return (
    <div className="cart-item">
      <h5>{item.description}</h5>
      <p>Precio: ${item.price}</p>
      <p>Cantidad: {item.quantity}</p>
      <p>Subtotal: {item.quantity * item.price}</p>
      <div style={buttonsContainer}>
        <button onClick={() => deleteOneFromCart(item.id)}>Borrar uno</button>
        <button onClick={() => deleteAllFromCart(item.id)}>Borrar Todos</button>
      </div>
    </div>
  );
};

export default CartItem;
