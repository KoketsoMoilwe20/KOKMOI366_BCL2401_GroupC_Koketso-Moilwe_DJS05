// Initial state of the counter
const initialState = { 
count: 0 };

//Actions 
const INCREMENT = 'INCREMENT'
const DECREMENT = 'DECREMENT'
const RESET = 'RESET'

// Incrementing the count
const increment = () => ({ type: INCREMENT });

// Decrementing the count
const decrement = () => ({ type: DECREMENT });

// Resetting the count to 0
const reset = () => ({ type: RESET });

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