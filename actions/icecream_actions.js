import { BUY_ICE, STOCK_ICE } from "../utils/constants.js";

export function buyIceCream() {
    return {
        type: BUY_ICE,
        info: 'Bought an ice cream'
    }
}

export function stockIceCream() {
    return {
        type: STOCK_ICE,
        info: 'Added an ice cream'
    }
}