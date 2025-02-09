import express from 'express'
import cors from 'cors' 

import { createNewSuperheroHandler, listSuperherosHandler } from './handlers/index.js'

const api = express()
const PORT = 5000

api.use(cors())

api.use(express.json())

// Endpoint to add a new superhero
api.post('/superheros', createNewSuperheroHandler)

// Endpoint to list all superheros  
api.get('/superheros', listSuperherosHandler)

api.listen(PORT, () => console.log(`API listening on http://localhost:${PORT}`))