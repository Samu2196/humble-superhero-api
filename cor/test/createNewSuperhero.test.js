import logic from '../index.js'

describe('Superhero Logic', () => {
  test('createNewSuperhero should add a new superhero and return updated list', () => {
    const newHero = { name: 'Batman', superPower: 'Stealth', humilityScore: 8 }
    return logic.createNewSuperhero(newHero.name, newHero.superPower, newHero.humilityScore)
    .then((result) => {
      expect(result).toContainEqual(newHero)
    }) 
  })

  test('createNewSuperhero fails on non string name', () => {
    let _error

  const newHero = { name: 8, superPower: 'Flying', humilityScore: 10 }

  try {
    logic.createNewSuperhero(newHero.name, newHero.superPower, newHero.humilityScore)
  } catch (error) {
    _error = error
  } finally {
    expect(_error).toBeInstanceOf(Error)
    expect(_error.message).toBe('name is not a string')
  }

})


test('createNewSuperhero fails on non string superPower', () => {
    let _error

  const newHero = { name: 'Batman', superPower: 8, humilityScore: 10 }

  try {
    logic.createNewSuperhero(newHero.name, newHero.superPower, newHero.humilityScore)
  } catch (error) {
    _error = error
  } finally {
    expect(_error).toBeInstanceOf(Error)
    expect(_error.message).toBe('superPower is not a string')
  }

})

test('createNewSuperhero fails on non number humilityScore', () => {
    let _error

  const newHero = { name: 'Batman', superPower: 'Flying', humilityScore: 'string' }

  try {
    logic.createNewSuperhero(newHero.name, newHero.superPower, newHero.humilityScore)
  } catch (error) {
    _error = error
  } finally {
    expect(_error).toBeInstanceOf(Error)
    expect(_error.message).toBe('humilityScore is not a number')
  }

})

test('createNewSuperhero fails on non range number between 1 to 10', () => {
    let _error

  const newHero = { name: 'Batman', superPower: 'Flying', humilityScore: 11 }

  try {
    logic.createNewSuperhero(newHero.name, newHero.superPower, newHero.humilityScore)
  } catch (error) {
    _error = error
  } finally {
    expect(_error).toBeInstanceOf(Error)
    expect(_error.message).toBe('humilityScore is not a number between 1 and 10')
  }

})
})
