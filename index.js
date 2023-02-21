import { buyCake, stockCake } from "./actions/cake_actions.js";
import { buyIceCream, stockIceCream } from "./actions/icecream_actions.js";
import { shopStore, unSubStore } from "./store/shop_store.js";

console.log(`Initial State `, shopStore.getState());

shopStore.dispatch(buyCake()); //0 0
shopStore.dispatch(buyCake()); //0 0
shopStore.dispatch(stockCake()); //1 0
shopStore.dispatch(stockCake()); //2 0
shopStore.dispatch(stockCake()); //3 0
shopStore.dispatch(stockIceCream()) //3 1
shopStore.dispatch(stockIceCream()) //3 2
shopStore.dispatch(buyCake()); //2 2
shopStore.dispatch(stockCake()); //3 2
