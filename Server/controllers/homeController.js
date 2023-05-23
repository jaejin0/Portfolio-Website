const Home = require('../models/homeModel')

// get a single home
const getHome = async (req, res) => {
    
    const home = await Home.findOne()

    if (!home) {
        return res.status(404).json({error: 'Home does not exist'})
    } 
    res.status(200).json(home)
}

module.exports = {
    getHome
}