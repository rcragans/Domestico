import axios from 'axios'

export default(formData) =>{
    console.log(formData)
    const deleteExpensePromise = axios({
        url:`${window.apiHost}/expenses/delete/:id`,
        method:"POST",
        data: formData
    })
    return{
        type:"DELETE_EXPENSE_ACTION",
        payload: deleteExpensePromise
    }
}