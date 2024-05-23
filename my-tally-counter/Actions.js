export const increment =(state) => {
    return {
        ...state,
        value: state.value + 1
    }
}

const decrement = (state) => {
    return {
        ...state,
        value: state.value - 1
    }
}

const resetCounter = (state) => {
    return {
        state: 0
    }
}