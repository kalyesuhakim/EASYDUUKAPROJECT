import { combineReducers } from "redux";
import {AUTH_MAIN_THREAD, REQ_MAIN_THREAD, NOTIFICATIONS_MAIN_THREAD} from '../threads'
import {SHOPPING_CART_MAIN_THREAD} from '../cart/threads'
import reqReducer from "./reqReducer";
import { authReducer } from "./authReducer";
import { notificationsReducer } from "./notificationsReducer";
import cartReducer from "../cart/reducers/cartReducer";
import { graphReducer } from "../graphql/reducers/graphReducer";

const rootReducer = combineReducers({
  req: reqReducer(REQ_MAIN_THREAD),
  auth: authReducer(AUTH_MAIN_THREAD),
  notifications: notificationsReducer(NOTIFICATIONS_MAIN_THREAD),
  cart: cartReducer(SHOPPING_CART_MAIN_THREAD),
  graph: graphReducer(),
});

export default rootReducer;
