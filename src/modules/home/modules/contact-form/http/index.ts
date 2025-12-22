import type {IPayloadForm} from '../interfaces'

export async function sendForm(form: IPayloadForm) {
    const response = await fetch('https://onlinedocumentation-60d63-default-rtdb.europe-west1.firebasedatabase.app/portfolioFeedbacks.json', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
    })
    if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`)
    }
    return response.json()
}
