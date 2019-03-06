import axios from 'axios'

export default(formData) =>{
    const roommatePromise = axios({
        url:`${window.apiHost}/roommates`,
        method:"POST",
        data: formData
    })
    return{
        type:"ROOMMATE_ACTION",
        payload: roommatePromise
    }
}