export default (state = { value: 0 }, action) => {
    switch (action.type) {
        case 'incrment':
            return { ...state, value: state.value + 1 };
        case 'decrement':
            return { ...state, value: state.value - 1 };
        default:
            return state;
    }
}