const express = require('express');
const router = express.Router()
const USERDATA = require('../model/userData');



router.post('/', async (req, res) => {
    try {

        let email = req.body.data
        const doesExist = await USERDATA.findOne({ email: email })
        res.send(doesExist)

    } catch (error) {
        console.log(error)

    }



})

router.put('/', async (req, res) => {
    try {

        let email = req.body.email

        let item = {
            'username': req.body.profile.username,
            'language': req.body.profile.language,
            'country': req.body.profile.country,
            'email': req.body.profile.email,
            'gamer': req.body.profile.gamer,
            'profile_pic':req.body.profile_pic,
            'gamerID': req.body.profile.gamerID,
            'wr': req.body.profile.wr,
            'discord_id': req.body.profile.discord_id,
            'channel_name': req.body.profile.channel_name,
            'kd': req.body.profile.kd,
            'elo': req.body.profile.elo,
            'winrate': req.body.profile.winrate,
            'kills': req.body.profile.kills,
            'wins': req.body.profile.wins,
            'platform': req.body.profile.platform,
            'account_name': req.body.profile.account_name,
            'account_number': req.body.profile.account_number,
            'bank_name': req.body.profile.bank_name,
            'flawless': req.body.profile.flawless,
            'pro_cost': req.body.profile.pro_cost,
            'vip_cost': req.body.profile.vip_cost,
            'about': req.body.profile.about
        }

        let updateData = { $set: item };

        const savedIdData = await USERDATA.findOneAndUpdate(
            { email: email },
            updateData
        );
        res.send({ savedIdData });

    } catch (error) {
        console.log(error)

    }



})

router.get('/single/:id', async (req, res) => {
    try {

        let id = req.params.id
        const userLists = await USERDATA.findById(id)
        res.send(userLists)
    } catch (error) {
        console.log(error)
    }
})

router.get('/all', async (req, res) => {
    try {
        const userLists = await USERDATA.find()
        res.send(userLists)
    } catch (error) {
        console.log(error)
    }
})


module.exports = router;
