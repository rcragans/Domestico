import axios from 'axios'

export default(formData) =>{
    const dashboardPromise = axios({
        url:`${window.apiHost}/dashboard`,
        method:"POST",
        data: formData
    })
    return{
        type:"DASHBOARD_ACTION",
        payload: dashboardPromise
    }
}