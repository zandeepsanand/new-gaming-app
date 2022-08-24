const express = require('express');
const router = express.Router()

const PartyData = require('../model/partyData')




router.post('/', async (req, res) => {
    try {

        let item = {
            game: req.body.data.game,
            email: req.body.email
        }
        console.log(req.body)
        const USER = new PartyData(item)
        const savedIdData = await USER.save()
        res.send(savedIdData)

    } catch (error) {
        console.log(error)
    }
})

router.get('/', async (req, res) => {
    try {

        const userLists = await PartyData.find()
        res.send(userLists)
    } catch (error) {
        console.log(error)
    }
})

module.exports = router;

