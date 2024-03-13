const cartReducer = (state, action) => {
    switch (action.type) {
      case "ADD_TO_CART": {
        const { id, color, amount, product } = action.payload;
  
        const existingProduct = state.cart.find(
          (curItem) => curItem.id === id + color
        );
  
        if (existingProduct) {
          const updatedProduct = state.cart.map((curElem) => {
            if (curElem.id === id + color) {
              let newAmount = curElem.amount + amount;
              newAmount = Math.min(newAmount, curElem.max); // Ensure new amount doesn't exceed max stock
              return { ...curElem, amount: newAmount };
            }
            return curElem;
          });
          return { ...state, cart: updatedProduct };
        } else {
          const cartProduct = {
            id: id + color,
            name: product.name,
            color,
            amount,
            image: product.image[0].url,
            price: product.price,
            max: product.stock,
          };
          return { ...state, cart: [...state.cart, cartProduct] };
        }
      }
      case "SET_DECREMENT": {
        const updatedProduct = state.cart.map((curElem) =>
          curElem.id === action.payload
            ? { ...curElem, amount: Math.max(curElem.amount - 1, 1) } // Ensure amount doesn't go below 1
            : curElem
        );
        return { ...state, cart: updatedProduct };
      }
      case "SET_INCREMENT": {
        const updatedProduct = state.cart.map((curElem) =>
          curElem.id === action.payload
            ? { ...curElem, amount: Math.min(curElem.amount + 1, curElem.max) } // Ensure new amount doesn't exceed max stock
            : curElem
        );
        return { ...state, cart: updatedProduct };
      }
      case "REMOVE_ITEM": {
        const updatedCart = state.cart.filter(
          (curItem) => curItem.id !== action.payload
        );
        return { ...state, cart: updatedCart };
      }
      case "CLEAR_CART": {
        return { ...state, cart: [] };
      }
      case "SET_CART": {
        return { ...state, cart: action.payload };
      }
      case "CART_ITEM_PRICE_TOTAL": {
        const { total_item, total_price } = state.cart.reduce(
          (accum, curElem) => {
            const { price, amount } = curElem;
            accum.total_item += amount;
            accum.total_price += price * amount;
            return accum;
          },
          { total_item: 0, total_price: 0 }
        );
        return { ...state, total_item, total_price };
      }
      default:
        return state;
    }
  };
  
  export default cartReducer;
  