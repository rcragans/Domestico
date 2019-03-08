import axios from 'axios'

export default (formData) => {
    const paymentPromise = axios({
        url: `${window.apiHost}/payments`,
        method: 'POST',
        data: formData
    })
    return {
        type: "PAYMENT_ACTION",
        payload: paymentPromise
    }
}