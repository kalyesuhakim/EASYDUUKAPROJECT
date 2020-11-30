import { CART_DEFAULT_THREAD } from "../threads";
import { ADD_ITEM_TO_CART, REMOVE_ITEM_FROM_CART } from "./shoppingCartActionTypes";

/**
 * Action for the 
 */
export const addItemToCart = (item, thread = CART_DEFAULT_THREAD) => ({
  type: ADD_ITEM_TO_CART,
  item: item,
  data: item,
  thread: thread,
});

/**
 * Remove the item from the shopping cart
 */
export const removeItemFromCart = (item, thread = CART_DEFAULT_THREAD) => ({
  type: REMOVE_ITEM_FROM_CART,
  item: item,
  data: item,
  thread: thread,
});

