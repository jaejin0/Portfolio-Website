const express = require('express')
const { getExperiences, getExperience } = require('../controllers/experienceController')

const router = express.Router()

// GET all projects
router.get('/', getExperiences)

// GET a single project
router.get('/:id', getExperience)

module.exports = router