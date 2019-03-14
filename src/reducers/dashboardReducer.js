export default (state = null, action) => {
    if (action.type === "DASHBOARD_ACTION") {
        return action.payload.data
    } else {
        return state
    }

}