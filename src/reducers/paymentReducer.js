export default (state = [], action) => {
    if (action.type === "PAYMENT_ACTION") {
        return action.payload.data
    } else {
        return state
    }

}