import { BUY_CAKE, STOCK_CAKE } from "../utils/constants.js";

/**
 * 
 * @param {*} state previous state
 * @param {*} action what action has to be done
 */
export const cakeReducer = (state = {}, action) => {
    switch (action.type) {
        case BUY_CAKE:
            return {
                ...state, numOfCakes: state.numOfCakes ? state.numOfCakes - 1 : 0
            }
        case STOCK_CAKE:
            return {
                ...state, numOfCakes: state.numOfCakes ? state.numOfCakes + 1 : 1
            }
    
        default:
            return state
    }
}