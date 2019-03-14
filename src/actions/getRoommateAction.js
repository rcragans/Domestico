import axios from 'axios'

export default(formData) =>{
    const getRoommatePromise = axios({
        url:`${window.apiHost}/roommates/getRoommates`,
        method:"POST",
        data: formData
    })
    return{
        type:"GET_ROOMMATE_ACTION",
        payload: getRoommatePromise
    }
}