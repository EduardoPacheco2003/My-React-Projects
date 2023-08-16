const ProductItem = ({ product, addToCart }) => {
  const { id, description, price, img } = product;

  return (
    <article className="product-item">
      <div className="product-img">
        <img src={img} alt={description} />
      </div>
      <div className="product-info">
        <h4> {description} </h4>
        <p> {`$${price}`} </p>
        <button onClick={() => addToCart(id)}>Agregar Al carrito</button>
      </div>
    </article>
  );
};

export default ProductItem;
