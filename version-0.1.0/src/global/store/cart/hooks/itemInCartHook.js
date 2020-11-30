import {
  addItemToCart,
  removeItemFromCart,
} from "../actions/shoppingCartActions";

/**
 * Check
 */
const itemInCartHook = (dispatch) => (item, options = {}) => {

  return dispatch((dispatch, getState) => {
    const cart = getState().cart;
    console.log("The cart is ", cart);
    
    if (typeof cart.items === "object") {
        console.log("Its an object");
      if (cart.items.indexOf(JSON.stringify(item)) !== -1) {
          console.log("We are removing the item from cart.... ");
        return true
      } else {
        return false
      }
    } else {
      return false
    }
  });
};

export default itemInCartHook;
