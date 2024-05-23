export const increment =(state) => {
    return {
        ...state,
        value: state.value + 1
    }
}