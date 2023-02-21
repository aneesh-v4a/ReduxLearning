import redux from 'redux';
import { rootReducer } from '../reducers/root_reducer.js';

export const shopStore = redux.createStore(rootReducer)

export const unSubStore = shopStore.subscribe(() => console.log('Updated Shop ', shopStore.getState()));

