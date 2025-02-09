import { useState, useEffect } from 'react'
import logic from '../logic/index'

function App() {
  console.log("✅ El componente App se está montando");

  const [superheroes, setSuperheroes] = useState([])
  const [name, setName] = useState('')
  const [superpower, setSuperpower] = useState('')
  const [humilityScore, setHumilityScore] = useState()

  useEffect(() => {
    console.log("🔄 useEffect ejecutado: llamando a listSuperheroes...");
    listSuperheroes();
  }, []); // 👈 Se ejecuta solo al montar el componente

  useEffect(() => {
    console.log("🟢 Estado actualizado:", superheroes);
  }, [superheroes]);
  
  

 //List all superheros  
 const listSuperheroes = async () => {
  try {
    const data = await logic.listSuperheroes();
    console.log("📥 Datos recibidos:", data);

    if (!Array.isArray(data)) {
      console.error("⚠️ La respuesta no es un array:", data);
      return;
    }

    setSuperheroes(prev => {
      console.log("✅ Estado antes:", prev);
      console.log("✅ Nuevo estado:", data);
      return [...data]; // Asegura que React lo detecte como cambio
    });

  } catch (error) {
    console.error("❌ Error en listSuperheroes:", error);
    alert(error.message);
  }
};

  //Create new superhero
  const handleCreateNewSuperheroSubmit = event => {
    event.preventDefault()

    if (humilityScore < 1 || humilityScore > 10) {
      alert('Ingrese datos válidos (1-10 de humildad)')
      return
    }

    //TODO

    try {
      logic.createNewSuperhero(name, superpower, humilityScore)
          .then(() => {
            setName('')
            setSuperpower('')
            setHumilityScore('')
            listSuperheroes()
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
          placeholder='Nombre' 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          required 
          className='w-full p-2 border border-gray-300 rounded'
        />
        <input 
          type='text' 
          placeholder='Superpoder' 
          value={superpower} 
          onChange={(e) => setSuperpower(e.target.value)} 
          required 
          className='w-full p-2 border border-gray-300 rounded'
        />
        <input 
          type='number' 
          placeholder='Humildad (1-10)' 
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
      {superheroes.length === 0 && <p className="text-gray-500">No hay superhéroes disponibles.</p>}
      <ul className='w-96 mt-4'>
        {superheroes.map((hero, index) => (
          <li key={index} className='bg-white shadow-md p-4 mb-2 rounded-lg flex justify-between'>
            <span className='font-bold'>{hero.name}</span> 
            <span className='text-gray-600'>{hero.superPower} </span>
            <span className='text-blue-500 font-semibold'>Humility: {hero.humilityScore}</span>
          </li>
        ))}
      </ul>
    </div>
  )}



export default App