import validate from '../../common/validate'

export default (name, superPower, humilityScore) => {
    validate.string(name, 'name')
    validate.string(superPower, 'superPower')
    validate.number(humilityScore, 'humilityScore')
    validate.number1to10(humilityScore, 'humilityScore')

    return fetch('http://localhost:5000/superheros', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, superPower, humilityScore })
    })
        .catch(error => { throw new Error(error.message) })
        .then(response => {
            const { status } = response

            if (status === 201) return

            return response.json()
                .then(body => {
                    const { error, message } = body

                    const constructor = errors[error]

                    throw new constructor(message)
                })
        })
}