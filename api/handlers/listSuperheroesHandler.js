import logic from '../../cor/index.js'

export default (req, res, next) => {
    try {
        logic.listSuperheroes()
            .then(superheros => res.json(superheros))
            .catch(error => next(error))
    } catch (error) {
        next(error)
    }
}