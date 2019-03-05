import { combineReducers } from 'redux'
import registerReducer from './registerReducer'
import loginReducer from './loginReducer'

const rootReducer = combineReducers({
    register: registerReducer,
    login: loginReducer

})

export default rootReducer