import logic from '../../cor/index.js'

export default (req, res, next) => {
    const { name, superPower, humilityScore } = req.body

    try {
        logic.createNewSuperhero(name, superPower, humilityScore)
            .then(() => res.status(201).send())
            .catch(error => next(error))
    } catch (error) {
        next(error)
    }
}