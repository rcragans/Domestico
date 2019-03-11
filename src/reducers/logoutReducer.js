export default (state = [], action) => {
    if (action.type === "LOGOUT_ACTION") {
        return action.payload.data
    } else {
        return state
    }

}