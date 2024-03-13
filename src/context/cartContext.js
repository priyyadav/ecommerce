import { createContext, useContext, useReducer, useEffect } from "react";
import reducer from "../reducer/cartReducer";

const CartContext = createContext();
let getusename = localStorage.getItem("user");
let gg=getusename.name;
console.log(getusename,"use")
console.log(gg,"use")

const getLocalCartData = () => {
    let localCartData = localStorage.getItem("thapaCart");
    if (!localCartData) {
      return [];
    } else {
      return JSON.parse(localCartData);
    }
  };

const initialState = {
cart:getLocalCartData().cart,
  total_item: getLocalCartData().cart.total_item|| " ",
  total_price: getLocalCartData().cart.total_price|| " ",
  shipping_fee: 50000,
  username: getusename
};
console.log(initialState,"i")
const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addToCart = (id, color, amount, product) => {
    dispatch({ type: "ADD_TO_CART", payload: { id, color, amount, product } });
  };

  // increment and decrement the product

  const setDecrease = (id) => {
    dispatch({ type: "SET_DECREMENT", payload: id });
  };

  const setIncrement = (id) => {
    dispatch({ type: "SET_INCREMENT", payload: id });
  };

  // to remove the individual item from cart
  const removeItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };

  // to clear the cart
  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  // to add the data in localStorage
  // get vs set

  
  useEffect(() => {
    dispatch({ type: "CART_ITEM_PRICE_TOTAL" });
    localStorage.setItem("thapaCart", JSON.stringify(state));
  }, [state.cart]);

  return (
    <CartContext.Provider
      value={{
        ...state,
        addToCart,
        removeItem,
        clearCart,
        setDecrease,
        setIncrement,
      }}>
      {children}
    </CartContext.Provider>
  );
};

const useCartContext = () => {
  return useContext(CartContext);
};

export { CartProvider, useCartContext };