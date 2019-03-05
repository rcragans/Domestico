import axios from 'axios'

export default (formData) => {
    const registerPromise = axios({
        url: `${window.apiHost}/register`,
        method: 'POST',
        data: formData
    })
    return {
        type: "REGISTER_ACTION",
        payload: registerPromise
    }
}