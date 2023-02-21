import { BUY_CAKE, STOCK_CAKE } from "../utils/constants.js";

/**
 * buyCake is an action creator.
 * An action is an object with 'type' property.
 * @returns BUY_CAKE action
 */
export function buyCake() {
    return {
        type: BUY_CAKE,
        info: 'Buy cake action'
    }
}

export function stockCake() {
    return {
        type: STOCK_CAKE,
        info: 'Add cake to stock'
    }
}