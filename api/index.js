import express from 'express'
import cors from 'cors' 

import { createNewSuperheroHandler, listSuperheroesHandler } from './handlers/index.js';

const api = express()
const PORT = 5000

api.use(cors())

api.use(express.json())

// Endpoint to add a new superhero
api.post('/superheros', createNewSuperheroHandler)

// Endpoint para obtener la lista de superhéroes ordenados por humildad
api.get('/superheros', listSuperheroesHandler)

api.listen(PORT, () => console.log(`API listening on http://localhost:${PORT}`))