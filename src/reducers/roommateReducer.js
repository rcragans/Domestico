export default (state = [], action) => {
    if (action.type === "ROOMMATE_ACTION" || action.type === "GET_ROOMMATE_ACTION" || action.type === "DELETE_ROOMMATE_ACTION") {
        return action.payload.data
    } else {
        return state
    }

}