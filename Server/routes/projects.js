const express = require('express')
const { getProjects, getProject } = require('../controllers/projectController')

const router = express.Router()

// GET all projects
router.get('/', getProjects)

// GET a single project
router.get('/:id', getProject)

module.exports = router