export default (state = {}, action) => {
    switch (action.type) {
        case "queryUser": {
            return { ...state, ...action.payload }
        }
        default:
            return state;
    }
}