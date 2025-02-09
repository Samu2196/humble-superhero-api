import { useState, useEffect } from 'react'
import logic from '../logic/index'

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
    
    <div className='min-h-screen bg-gray-100 flex flex-col items-center py-10'>
      <h1 className='text-3xl font-bold text-gray-800 mb-6'>Humble Superhero API</h1>
      <form onSubmit={handleCreateNewSuperheroSubmit} className='bg-white shadow-md rounded-lg p-6 w-96 space-y-4'>
        <input 
          type='text' 
          placeholder='Name' 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          required 
          className='w-full p-2 border border-gray-300 rounded'
        />
        <input 
          type='text' 
          placeholder='Super Power' 
          value={superPower} 
          onChange={(e) => setSuperPower(e.target.value)} 
          required 
          className='w-full p-2 border border-gray-300 rounded'
        />
        <input 
          type='number' 
          placeholder='Humility (1-10)' 
          value={humilityScore} 
          onChange={(e) => setHumilityScore(Number(e.target.value))} 
          required 
          className='w-full p-2 border border-gray-300 rounded'
        />
        <button 
          type='submit' 
          className='w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition'
        >
          Create a new Superhero
        </button>
      </form>

      <h2 className='text-2xl font-semibold text-gray-700 mt-8'>List of Superheros</h2>
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
    </div>
  )}

export default App