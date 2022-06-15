const Spot = require('../../models/Spot')

module.exports = {
    index,
    create
}

async function index(req, res) {
    let spots = await Spot.find({})
    res.json(spots)
}

async function create(req, res) {
    console.log("THE CREATE FUNCTION")
    let spot = await new Spot({
        name: req.body.name,
        description: req.body.description,
        address: req.body.address,
        // user: req.user.id
    })
    console.log(spot)
    await spot.save();
    res.json(spot)
}