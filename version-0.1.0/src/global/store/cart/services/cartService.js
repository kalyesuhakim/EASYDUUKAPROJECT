import {connect} from 'react-redux'
import { CART_DEFAULT_THREAD } from '../threads';
import {removeItemFromCart, addItemToCart} from '../actions/shoppingCartActions';
import itemInCartHook from '../hooks/itemInCartHook';

/**
 * Check of in item is in the
 */
const mapStateToCart = (state, ownProps) => ({
    cart: state.cart,
    items: state.cart.items, 
    ...ownProps,
})


const mapDispatchToCart = (dispatch, ownProps) => ({
    ...ownProps,
    addItemToCart: (item, thread = CART_DEFAULT_THREAD) => dispatch(addItemToCart(item, thread)),
    removeItemFromCart: (item, thread = CART_DEFAULT_THREAD) => dispatch(removeItemFromCart(item, thread)),
    itemInCart: itemInCartHook(dispatch)
})

export const  cartService =  connect(mapStateToCart, mapDispatchToCart);
