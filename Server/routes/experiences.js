const express = require('express')
const { getExperiences, getExperience } = require('../controllers/experienceController')

const router = express.Router()

// GET all experiences
router.get('/', getExperiences)

// GET a single experience
router.get('/:id', getExperience)

module.exports = router