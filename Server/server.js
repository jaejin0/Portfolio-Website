require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')

const homeRoutes = require('./routes/home')
const aboutRoutes = require('./routes/about')
const experienceRoutes = require('./routes/experiences')
const projectRoutes = require('./routes/projects')

// express app
const app = express()

// middleware
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// routes
app.use('/api/home', homeRoutes)
app.use('/api/about', aboutRoutes)
app.use('/api/experiences', experienceRoutes)
app.use('/api/projects', projectRoutes)

// connect to db
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log('connected to database')
        app.listen(process.env.PORT, () => {
            console.log('listening on port', process.env.PORT)
        })
    })
    .catch((error) => {
        console.log(error)
    })