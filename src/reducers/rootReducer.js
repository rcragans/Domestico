import { combineReducers } from 'redux'
import registerReducer from './registerReducer'
import loginReducer from './loginReducer'
import roommateReducer from './roommateReducer'
import expenseReducer from './expenseReducer'

const rootReducer = combineReducers({
    register: registerReducer,
    login: loginReducer,
    roommate: roommateReducer,
    expense: expenseReducer

})

export default rootReducer