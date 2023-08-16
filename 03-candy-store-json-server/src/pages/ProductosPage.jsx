import { useContext, useEffect, useState } from "react";
import ProductItem from "../components/ProductItem";
import { helpHttp } from "../helpers/helpHttp";
import Loader from "../components/Loader";
import Error from "../components/Error";
import CartContext from "../context/cartContext";
import { cartTYPES } from "../reducers/CartReducer";

const ProductosPage = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({});
  const { state, dispatch } = useContext(CartContext);
  const { products } = state;
  const url = "http://localhost:5000/dulces";

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      const res = await helpHttp().get(url);
      // console.log(res instanceof TypeError);
      // Si no hay error:
      if (res.err || res instanceof TypeError) {
        // console.log("SI HAY err:", res);
        setLoading(false);
        setError(res);
      } else {
        // console.log("NO HAY err:", res);
        setLoading(false);
        setError({});
        dispatch({ type: cartTYPES.ADD_PRODUCTS, payload: res });
      }
    };
    fetchData();
  }, [dispatch]);

  const addToCart = (id) => {
    dispatch({ type: cartTYPES.ADD_TO_CART, payload: id });
  };

  return (
    <section className="vh-100">
      <h2>Productos:</h2>
      <section className="products-container">
        {loading && <Loader />}
        {loading && <Loader />}
        {loading && <Loader />}
        {error && <Error error={error} />}
        {products &&
          products.map((product) => (
            <ProductItem
              product={product}
              key={product.id}
              addToCart={addToCart}
            />
          ))}
        {/* {!candies && error ? (
          <Error error={error} />
        ) : (
          candies.map((product) => (
            <ProductItem
              product={product}
              key={product.id}
              addTocart={addTocart}
            />
          ))
        )} */}
      </section>
    </section>
  );
};

export default ProductosPage;
