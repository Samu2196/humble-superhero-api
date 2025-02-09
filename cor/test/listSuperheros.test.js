import logic from '../index.js'

describe('Superhero Logic', () => {
  test('listSuperheroes should return superheroes sorted by humilityScore', () => {
    return logic.listSuperheroes()
    .then((result) => {
      expect(result).toEqual([
        { name: "Superman", superPower: "Flying", humilityScore: 10 }
      ])
    })
})
})