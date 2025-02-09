export default () => {
    return fetch('http://localhost:5000/superheros', {
    })
        .catch(error => { throw new Error(error.message) })
        .then(response => {
            const { status } = response

            if (status === 200)
                return response.json()
                    .then(data => data)

            return response.json()
                .then(body => {
                    const { message } = body

                    throw new Error(message)
                })
        })
}