export default (state = [], action) => {
    if (action.type === "ROOMMATE_ACTION") {
        return action.payload.data
    } else {
        return state
    }

}