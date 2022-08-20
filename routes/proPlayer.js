const express = require('express');
const router = express.Router()
const USERDATA = require('../model/userData');
const createError = require('http-errors')
const CoachData = require('../model/coachData')
const PartyData = require('../model/partyData')
const TuitionData = require('../model/proCoachData')
const { botMessage } = require('../controller/bot')



router.post('/coaching', async (req, res) => {
    try {


        const doesExist = await USERDATA.findOne({ email: req.body.email })
        const user_name = doesExist.username

        let item = {
            game: req.body.data.game,
            email: req.body.email,
            username: user_name,

        }
        console.log(req.body)
        const USER = new TuitionData(item)
        const savedIdData = await USER.save()
        res.send(savedIdData)

    } catch (error) {
        console.log(error)
    }
})

router.post('/pro', async (req, res) => {
    try {


        const doesExist = await USERDATA.findOne({ username: req.body.id })

        res.send(doesExist)

    } catch (error) {
        console.log(error)
    }
})


router.post('/coach', async (req, res) => {

    try {

        let item = {
            email: req.body.email,
            approve: false,
            pro: req.body.pro_id
        }


        const USER = new CoachData(item)
        const savedIdData = await USER.save()

        res.send(savedIdData)

    } catch (error) {
        console.log(error)
    }



})

router.get('/coach', async (req, res) => {
    try {

        const userLists = await CoachData.find()
        res.send(userLists)
    } catch (error) {
        console.log(error)
    }
})



router.post('/party', async (req, res) => {
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

router.get('/party', async (req, res) => {
    try {

        const userLists = await PartyData.find()
        res.send(userLists)
    } catch (error) {
        console.log(error)
    }
})

router.get('/coaching', async (req, res) => {
    try {

        const userLists = await TuitionData.find()
        res.send(userLists)
    } catch (error) {
        console.log(error)
    }
})


router.post('/sendlink_approve', async (req, res) => {

    try {
        let email = req.body.id
        let pro_id = req.body.pro_id

        const doesExist = await USERDATA.findOne({ email: email })
        const proExist = await USERDATA.findOne({ email: pro_id })
        const twitchID = proExist.channel_name


        //!FOR SOCKET

        // let textmessage = `https://www.twitch.tv/${twitchID}`
        // let item = {
        //     members: [email, pro_id]
        // }

        // const room_created = new Conversation(item)
        // const savedIdData = await room_created.save()
        // res.send(savedIdData)

        //! FOR DISCORD
        const discordID = doesExist.discord_id
        const normal_email = doesExist.email
        const pro_discord = proExist.discord_id
        console.log('check', discordID, twitchID, pro_discord)
        const discordMessage = botMessage(discordID, twitchID, pro_discord)

        if (discordMessage) {


            const user = await USERDATA.findOneAndUpdate(
                { "email": normal_email },
                { "adminReq": true }
            )

        }
        res.send(discordMessage)
    }
    catch (err) {
        console.log(err)
    }







})


router.post('/joinparty', async (req, res) => {
    try {

        let email = req.body.id

        const doesExist = await USERDATA.findOne({ email: email })
        const twitchID = doesExist.channel_name
        // const binded = await USERDATA.aggregate([{

        //     $lookup: {
        //         from: "partydatas",
        //         localField: "email",
        //         foreignField: "email",
        //         as: "party_created"
        //     }
        // }])
        // let twitch = twitchID.channel_name

        res.send({ twitchID })
    } catch (error) {
        console.log(error)
    }
})

module.exports = router;