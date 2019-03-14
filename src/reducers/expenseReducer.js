export default (state = [], action) => {
    if (action.type === "EXPENSE_ACTION" || action.type === "GET_EXPENSES_ACTION" || action.type === "DELETE_EXPENSE_ACTION") {
        return action.payload.data
    } else {
        return state
    }

}