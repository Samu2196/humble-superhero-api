import logic from '../index.js'

describe('Superhero Logic', () => {
  test('listSuperheros should return superheros sorted by humilityScore', () => {
    return logic.listSuperheros()
    .then((result) => {
      expect(result).toEqual([
        { name: "Superman", superPower: "Flying", humilityScore: 10 }
      ])
    })
})
})