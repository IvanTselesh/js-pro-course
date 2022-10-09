import {AnyAction, combineReducers, legacy_createStore as createStore} from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import {counterReducer, ICounterState} from "./reducers/counter";
import {IPostsState, postsReducer} from "./reducers/posts";


export type TState = {counterReducer: ICounterState, postsReducer: IPostsState};

// Create a Redux store holding the state of your app.
// Its API is { subscribe, dispatch, getState }.
export let store = createStore(combineReducers({counterReducer, postsReducer}), composeWithDevTools());