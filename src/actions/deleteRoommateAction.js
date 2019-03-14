import axios from 'axios'

export default(formData) =>{
    console.log(formData)
    const deleteRoommatePromise = axios({
        url:`${window.apiHost}/roommates/delete/:id`,
        method:"POST",
        data: formData
    })
    return{
        type:"DELETE_ROOMMATE_ACTION",
        payload: deleteRoommatePromise
    }
}