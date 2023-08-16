export const cartTYPES = {
  ADD_PRODUCTS: "ADD_PRODUCTS",
  ADD_TO_CART: "ADD_TO_CART",
  DELETE_FROM_CART: "DELETE_FROM_CART",
  DELETE_ALL_FROM_CART: "DELETE_ALL_FROM_CART",
  CLEAN_CART: "CLEAN_CART",
};

export const cartInitialState = {
  products: [],
  total: 0,
  cart: [],
};

export const cartReducer = (state, action) => {
  switch (action.type) {
    case cartTYPES.ADD_PRODUCTS: {
      // console.log(action.payload);
      return { ...state, products: [...action.payload] };
    }
    case cartTYPES.ADD_TO_CART: {
      // console.log(action.payload);
      let newItem = state.products.find(
        (product) => product.id === action.payload
      );

      let itemInCart = state.cart.find((item) => item.id === newItem.id);

      return itemInCart
        ? {
            ...state,
            cart: state.cart.map((item) =>
              item.id === newItem.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            ),
            total: state.total + newItem.price,
          }
        : {
            ...state,
            cart: [...state.cart, { ...newItem, quantity: 1 }],
            total: state.total + newItem.price,
          };
    }

    case cartTYPES.DELETE_FROM_CART: {
      let itemToDelete = state.cart.find((item) => item.id === action.payload);
      return itemToDelete.quantity > 1
        ? {
            ...state,
            cart: state.cart.map((item) =>
              item.id === action.payload
                ? { ...item, quantity: item.quantity - 1 }
                : item
            ),
            total: state.total - itemToDelete.price,
          }
        : {
            ...state,
            cart: state.cart.filter((item) => item.id !== action.payload),
            total: state.total - itemToDelete.price,
          };
    }
    case cartTYPES.DELETE_ALL_FROM_CART: {
      let itemToDelete = state.cart.find((item) => item.id === action.payload);
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
        total: state.total - itemToDelete.price * itemToDelete.quantity,
      };
    }
    case cartTYPES.CLEAN_CART: {
      return { ...state, cart: cartInitialState.cart };
    }
    default:
      return state;
  }
};
