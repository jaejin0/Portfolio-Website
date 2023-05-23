const About = require('../models/aboutModel') 

// get a single about
const getAbout = async (req, res) => {
    
    const about = await About.findOne()

    if (!about) {
        return res.status(404).json({error: 'About does not exist'})
    } 
    res.status(200).json(about)
}

module.exports = {
    getAbout
}