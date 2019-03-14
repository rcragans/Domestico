import axios from 'axios'

export default(formData) =>{
    const getExpensesPromise = axios({
        url:`${window.apiHost}/expenses/getExpenses`,
        method:"POST",
        data: formData
    })
    return{
        type:"GET_EXPENSES_ACTION",
        payload: getExpensesPromise
    }
}