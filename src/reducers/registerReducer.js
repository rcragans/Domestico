export default (state = [], action) => {
    if (action.type === "REGISTER_ACTION") {
        return action.payload.data
    } else {
        return state
    }

}