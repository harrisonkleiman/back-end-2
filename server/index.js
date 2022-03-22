// Basic functionality for the server (express, cors, jason, app.listen)
const express = require('express');
const cors = require('cors');

const {getHouses, deleteHouse, createHouse, updateHouse} = require('./controller');


const app = express();

// Middleware
app.use(express.json());
app.use(cors())

// Setup an endpoint to get all houses, making sure to call you controllers getHouses function.
app.get('/api/houses', getHouses)
app.delete('/api/houses/:id', deleteHouse)
app.post('/api/houses', createHouse)
app.put('/api/houses/:id', updateHouse)


app.listen(4004, () => console.log('Listening on 4004'));
