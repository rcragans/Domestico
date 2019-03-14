import { combineReducers } from 'redux'
import registerReducer from './registerReducer'
import loginReducer from './loginReducer'
import roommateReducer from './roommateReducer'
import expenseReducer from './expenseReducer'
import paymentReducer from './paymentReducer'
import dashboardReducer from './dashboardReducer';



const rootReducer = combineReducers({
    register: registerReducer,
    login: loginReducer,
    roommate: roommateReducer,
    expense: expenseReducer,
    payment: paymentReducer,
    dashboard: dashboardReducer
    

})

export default rootReducer