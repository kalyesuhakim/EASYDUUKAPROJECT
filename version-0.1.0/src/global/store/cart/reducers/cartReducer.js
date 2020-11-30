import { ADD_ITEM_TO_CART, REMOVE_ITEM_FROM_CART } from "../actions/shoppingCartActionTypes";

const initialCartState = {
    items: [],
}

/**
 * The shopping cart varianble in localstorage
 */
const SHOPPING_CART = btoa('shopping_cart');

/**
 * Cart Reducer for all cart actions 
 */
export default function cartReducer(MAIN_THREAD) {
    return (state, action) => {
        var _localCart = getCachedCartOnDevice();
        // console.log("The Local cart", _localCart);
        if(_localCart === false){
            state = initialCartState;
        } else {
            state = _localCart;
        }

        // console.log("The action is here" , action);

        var _state = {...state};
        _state['change_thread'] = action.type + Math.random(102990);
        
        switch(action.type){
            case ADD_ITEM_TO_CART:
                _state = {
                  ..._state,
                  items:
                    typeof _state.items === "object"
                      ? _state.items.push(JSON.stringify(action.data))
                      : [JSON.stringify(action.data)],
                };
                cacheCartOnDevice(_state);
                return _state;

            case REMOVE_ITEM_FROM_CART:
                if (_state.items.indexOf(JSON.stringify(action.data)) !== 1){
                   delete _state.items[_state.items.indexOf(JSON.stringify(action.data))];
                   var items = _state.items;
                   items = items.filter(i => i);
                   _state = {..._state, items: items};
                }
                cacheCartOnDevice(_state);
                return _state;
            default:
                cacheCartOnDevice(state); 
                return state;
        }
    }
}


/**
 * Save cart on device 
 */
function cacheCartOnDevice(cart){
    localStorage.setItem(SHOPPING_CART, encryptCartData(cart));
}

function getCachedCartOnDevice(){
    if(SHOPPING_CART in localStorage){
        return   decryptCartData(localStorage.getItem(SHOPPING_CART));
    }
    return false
}

function encryptCartData(cart) {
    return btoa(JSON.stringify(cart));
}

function decryptCartData(cart){
    return JSON.parse(atob(cart));
}