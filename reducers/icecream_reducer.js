import { BUY_ICE, STOCK_ICE } from "../utils/constants.js";

export function iceCreamReducer(state={}, action) {
    switch (action.type) {
        case BUY_ICE:
            return {
                ...state, numOfIceCream: state.numOfIceCream ? state.numOfIceCream - 1 : 0
            }
        case STOCK_ICE:
            return {
                ...state, numOfIceCream: state.numOfIceCream ? state.numOfIceCream + 1 : 1
            }
    
        default:
            return state;
    }
}