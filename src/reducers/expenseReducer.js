export default (state = [], action) => {
    if (action.type === "EXPENSE_ACTION") {
        return action.payload.data
    } else {
        return state
    }

}