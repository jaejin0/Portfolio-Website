require('dotenv').config()

const express = require('express')
const { ObjectId } = require('mongodb')
const { connectToDb, getDb } = require('./db')
const workoutRoutes = require('./routes/workouts')

// express app
const app = express()

// db connection
let db
connectToDb((err) => {
    if (!err) {
        app.listen(process.env.PORT, () => {
            console.log('listening on port 4000')
        })
        db = getDb()
    }
})

// middleware
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// routes
// app.use('/api/workouts', workoutRoutes)

app.get('/', (req, res) => {

    db.collection('home')
        .findOne()
        .then(doc => {
            res.status(200).json(doc)
        })
        .catch(() => {
            res.status(500).json({error: "Could not fetch the documents"})
        })
})


app.get('/about', (req, res) => {

    db.collection('about')
        .findOne()
        .then(doc => {
            res.status(200).json(doc)
        })
        .catch(() => {
            res.status(500).json({error: "Could not fetch the documents"})
        })
})

app.get('/experiences', (req, res) => {
    let experiences = []

    db.collection('experiences')
        .find()
        .sort({ startDate: -1 })
        .forEach(exp => experiences.push(exp))
        .then(() => {
            res.status(200).json(experiences)
        })
        .catch(() => {
            res.status(500).json({error: "Could not fetch the documents"})
        })
})
app.get('/experiences/:id', (req, res) => {
    
    if (ObjectId.isValid(req.params.id)) {
        db.collection('experiences')
            .findOne({_id: new ObjectId(req.params.id)})
            .then(doc => {
                res.status(200).json(doc)
            })
            .catch(err => {
                res.status(500).json({error: "Could not fetch the documents"})
            })
    } else {
        res.status(500).json({error: "Not a valid doc id"})
    }

    
})
app.get('/projects', (req, res) => {
    let projects = []

    db.collection('projects')
        .find()
        .sort({ startDate: -1 })
        .forEach(proj => projects.push(proj))
        .then(() => {
            res.status(200).json(projects)
        })
        .catch(() => {
            res.status(500).json({error: "Could not fetch the documents"})
        })
})
app.get('/projects/:id', (req, res) => {

    if (ObjectId.isValid(req.params.id)) {
        db.collection('projects')
            .findOne({_id: new ObjectId(req.params.id)})
            .then(doc => {
                res.status(200).json(doc)
            })
            .catch(err => {
                res.status(500).json({error: "Could not fetch the documents"})
            })
    } else {
        res.status(500).json({error: "Not a valid doc id"})
    }
})