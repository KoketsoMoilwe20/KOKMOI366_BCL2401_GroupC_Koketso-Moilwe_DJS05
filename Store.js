import reducer from './Reducer'

const store = createStore(reducer);

store.subscribe(() => {
    const state = store.getState();
    console.log('State count: ', state)
})