const express = require('express')

const router = express.Router()

router.get('/', (req, res) => {
})

router.get('/about', (req, res) => {})

router.get('/experiences', (req, res) => {})
router.get('/experiences/:id', (req, res) => {})

router.get('/projects', (req, res) => {})
router.get('/projects/:id', (req, res) => {})


module.exports = router