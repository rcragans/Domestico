export default (state = [], action) => {
    if (action.type == "LOGIN_ACTION") {
        return action.payload.data
    } else {
        return state
    }

}