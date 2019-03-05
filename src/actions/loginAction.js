import axios from 'axios'

export default(formData) =>{
    const loginPromise = axios({
        url:`${window.apiHost}/login`,
        method:"POST",
        data: formData
    })
    return{
        type:"LOGIN_ACTION",
        payload: loginPromise
    }
}