import { combineReducers } from 'redux'
import registerReducer from './registerReducer'
import loginReducer from './loginReducer'
import roommateReducer from './roommateReducer'
import expenseReducer from './expenseReducer'
import paymentReducer from './paymentReducer'
import logoutReducer from './logoutReducer'

const rootReducer = combineReducers({
    register: registerReducer,
    login: loginReducer,
    roommate: roommateReducer,
    expense: expenseReducer,
    payment: paymentReducer,
    logout: logoutReducer

})

export default rootReducer