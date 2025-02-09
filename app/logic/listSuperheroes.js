export default () => {
    return fetch('http://localhost:5000/superheroes', {
    })
        .catch(error => { throw new Error(error.message) })
        .then(response => {
            const { status } = response

            if (status === 200)
                return response.json()
                    .then(data => data)

            return response.json()
                .then(body => {
                    const { error, message } = body

                    const constructor = errors[error]

                    throw new constructor(message)
                })
        })
}