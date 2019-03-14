import axios from 'axios'

export default(formData) =>{
    const expensePromise = axios({
        url:`${window.apiHost}/expenses`,
        method:"POST",
        data: formData
    })
    return{
        type:"EXPENSE_ACTION",
        payload: expensePromise
    }
}