import { AnyAction, legacy_createStore as createStore } from "redux";

function counterReducer(state = { value: 0 }, action: AnyAction) {
  switch (action.type) {
    case 'counter/incremented':
      return { value: state.value + 1 }
    case 'counter/decremented':
      return { value: state.value - 1 }
    default:
      return state
  }
}

// Create a Redux store holding the state of your app.
// Its API is { subscribe, dispatch, getState }.
export let store = createStore(counterReducer);