// Initial state of the counter
const initialState = { count: 0 };

// Reducer function to update state based on actions
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD":
      return { ...state, count: state.count + 1 };
    case "SUBTRACT":
      return { ...state, count: Math.max(0, state.count - 1) };
    case "RESET":
      return initialState;
    default:
      return state;
  }
};

const createStore = (reducer) => {
  let state;
  const listeners = [];

  const getState = () => state;

  const dispatch = (action) => {
    state = reducer(state, action);
    listeners.forEach((listener) => listener());
  };

  const subscribe = (listener) => {
    listener.push(listener);
    return () => {
      const index = listeners.indexOf(listener);
      listeners.splice(index, 1);
    };
  };

  dispatch({type: '@@INIT'});

  return {getState, dispatch, subscribe};

};