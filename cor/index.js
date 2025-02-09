import validate from '../common/validate.js'

let superheroes = [
    { name: "Superman", superPower: "Flying", humilityScore: 10 }
]

const listSuperheroes = async () => {
    return superheroes.sort((a, b) => b.humilityScore - a.humilityScore)
}

const createNewSuperhero = async (name, superPower, humilityScore) => {  
    validate.string(name, 'name')
    validate.string(superPower, 'superPower')
    validate.number(humilityScore, 'humilityScore')
    validate.number1to10(humilityScore, 'humilityScore')

    const newHero = { name, superPower, humilityScore }
    superheroes.push(newHero)
    
    return superheroes
}


const logic = {
    listSuperheroes,
    createNewSuperhero
}

export default logic
