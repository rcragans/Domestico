import axios from 'axios'

export default (formData) => {
    const logoutPromise = axios({
        url: `${window.apiHost}/logout`,
        method: 'POST',
        data: formData
    })
    return {
        type: "LOGOUT_ACTION",
        payload: logoutPromise
    }
}