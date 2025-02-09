import validate from '../common/validate.js'

let superheros = [
    { name: "Superman", superPower: "Flying", humilityScore: 10 }
]

const listSuperheros = () => {
    return Promise.resolve(superheros.sort((a, b) => b.humilityScore - a.humilityScore))
}


const createNewSuperhero = (name, superPower, humilityScore) => {  
    validate.string(name, 'name')
    validate.string(superPower, 'superPower')
    validate.number(humilityScore, 'humilityScore')
    validate.number1to10(humilityScore, 'humilityScore')

    const newHero = { name, superPower, humilityScore }
    superheros.push(newHero)
    
    return Promise.resolve(superheros)
}


const logic = {
    listSuperheros,
    createNewSuperhero
}

export default logic
