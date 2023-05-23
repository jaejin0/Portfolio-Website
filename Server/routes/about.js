const express = require('express')
const { getAbout } = require('../controllers/aboutController')

const router = express.Router()

// GET a single about
router.get('/', getAbout)

module.exports = router