import { useState, useEffect } from 'react'
import logic from '../logic/index'

import Button from './library/Button'
import Container from './library/Container'
import Form from './library/Form'
import Input from './library/Input'
import Heading from './library/Heading'

function App() {
  const [superheros, setSuperheros] = useState([])
  const [name, setName] = useState('')
  const [superPower, setSuperPower] = useState('')
  const [humilityScore, setHumilityScore] = useState()

  useEffect(() => {
    listSuperheros()
  }, []) //Only the first time

  useEffect(() => {
  }, [superheros])
  
 //List all superheros  
 const listSuperheros = () => {
  try {
    logic.listSuperheros()
    .then(data => setSuperheros(data))
    .catch(error => {
        console.error(error)

        alert(error.message)
      })
  } catch (error) {
    console.error(error)

    alert(error.message)
  }
}

  //Create new superhero
  const handleCreateNewSuperheroSubmit = event => {
    event.preventDefault()

    try {
      logic.createNewSuperhero(name, superPower, humilityScore)
          .then(() => {
            setName('')
            setSuperPower('')
            setHumilityScore('')
            listSuperheros()
          })
          .catch(error => {
              console.error(error)

              alert(error.message)
          })
  } catch (error) {
      console.error(error)

      alert(error.message)
  }
}

  return (
    
    <Container>
      <Heading level='1' className='text-3xl font-bold text-gray-800 mb-6'>Humble Superhero API</Heading>
      <Form onSubmit={handleCreateNewSuperheroSubmit}>
        <Input 
          type='text' 
          placeholder='Name' 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
        />
        <Input 
          type='text' 
          placeholder='Super Power' 
          value={superPower} 
          onChange={(e) => setSuperPower(e.target.value)}
        />
        <Input 
          type='number' 
          placeholder='Humility (1-10)' 
          value={humilityScore} 
          onChange={(e) => setHumilityScore(Number(e.target.value))}
        />
        <Button>Create a new Superhero</Button>
      </Form>

      <Heading level='2' className='text-2xl font-semibold text-gray-700 mt-8'>List of Superheros</Heading>
      {(superheros.length === 0 
      ? <p className="text-gray-500">No Superheros Available</p> 
      : <ul className='w-96 mt-4'>
        {superheros.map((hero, index) => (
          <li key={index} className='bg-white shadow-md p-4 mb-2 rounded-lg flex justify-between'>
            <span className='font-bold'>{hero.name}</span> 
            <span className='text-gray-600'>{hero.superPower} </span>
            <span className='text-blue-500 font-semibold'>Humility: {hero.humilityScore}</span>
          </li>
        ))}
      </ul>)}
    </Container>
  )}

export default App