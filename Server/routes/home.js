const express = require('express')
const { getHome } = require('../controllers/homeController')

const router = express.Router()

// GET a single about
router.get('/', getHome)

module.exports = router