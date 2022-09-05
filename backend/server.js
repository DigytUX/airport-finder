require('dotenv').config()
const express = require('express')
const cors = require('cors')
const axios = require('axios')
const PORT = process.env.PORT || 8080
const app = express()

app.use(cors())

app.get('/airports',(req, res) => {
    res.json([
        {"icao":"KDTW"},
        {"icao":"KMCO"},
        {"icao":"KLAS"},
        {"icao":"KSFO"}
    ])
})

app.listen(process.env.PORT || 8080 , () => console.log('server started on', PORT))