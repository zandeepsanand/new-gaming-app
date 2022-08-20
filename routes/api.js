const express = require('express');
const router = express.Router()
const USERDATA = require('../model/userData');
const createError = require('http-errors')
const auth = require('./auth')
const stripe = require('stripe')('sk_test_51LT4FJSBGyD7UYjVVOug1IelJFPempEWB9h8c2O260SlpUzWMrJ9vo8Av6iKDbrv8oVOeNm5QjL6fpgCVbnQBpav00CpBjJ2kJ');
const Message = require('../model/Message')
const proRoute = require('./proPlayer')





// Redirect 
router.use('/auth', auth)
router.use('/proplayer', proRoute)



router.post('/stripe', async (req, res) => {

    try {
        token = req.body.token
        stripe.customers
            .create({
                email: token.email,
                source: token.id
            })
            .then((customer) => {
                return stripe.paymentIntents.create({
                    amount: 1000,
                    description: "Payment",
                    currency: "USD",
                    customer: customer.id,
                });
            })
            .then((charge) => {

                res.json({
                    data: "success"
                })
            })
            .catch((err) => {
                res.json({
                    data: "failure",
                });
            });
        return true;
    } catch (error) {
        console.log(error)
        return false;
    }



})

router.put('/stripe', async (req, res) => {
    try {

        console.log(req.body)
        let email = req.body.data
        let amount = req.body.amount


        const savedIdData = await USERDATA.updateOne(
            { email: email }, { $inc: { current_balance: amount } }
        )
        res.send({ savedIdData });


    }
    catch (error) {
        console.log(error)
    }
})


router.post('/reqPro', async (req, res) => {

    try {

        let email = req.body.email

        console.log(req.body, 'body')
        const user = await USERDATA.findOneAndUpdate(
            { "email": email },
            { "adminReq": true }
        )
        console.log("enter", user)
        res.send(user)
    } catch (error) {
        console.log(error)
    }



})


router.get('/reqPro', async (req, res) => {
    try {
        const userLists = await USERDATA.find({ adminReq: true })
        res.send(userLists)
    } catch (error) {
        console.log(error)
    }
})


router.post('/user', async (req, res) => {
    try {

        let email = req.body.data
        console.log(req.body)
        const doesExist = await USERDATA.findOne({ email: email })
        res.send(doesExist)

    } catch (error) {
        console.log(error)

    }



})

router.put('/user', async (req, res) => {
    try {

        let email = req.body.email
        let profileData = req.body.profile
        console.log(req.body)

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

router.get('/users', async (req, res) => {
    try {
        const userLists = await USERDATA.find()
        res.send(userLists)
    } catch (error) {
        console.log(error)
    }
})

router.get('/user/:id', async (req, res) => {
    try {

        let id = req.params.id
        const userLists = await USERDATA.findById(id)
        res.send(userLists)
    } catch (error) {
        console.log(error)
    }
})


// chats 
router.post('/messages', async (req, res) => {
    try {
        let item = req.body
        const newMessage = new Message(item)
        const savedMessage = await newMessage.save()
        res.send(savedMessage)
    }
    catch (err) {
        console.log(err)
    }
})

router.post('/chatLists', async (req, res) => {

    try {

        const lists = await Conversation.find({
            members: $in[req.body.email]
        })
        console.log(lists)
        res.send(lists)

    }
    catch (err) {
        console.log(err)
    }
})


//chat
router.post("/listFriends", async function (req, res) {

    try {
        const userLists = await USERDATA.find()

        res.send(userLists)
    } catch (error) {
        console.log(error)
    }
    // var clonedArray = usersCollection.slice();

    // Getting the userId from the request body as this is just a demo 
    // Ideally in a production application you would change this to a session value or something else
    // var i = usersCollection.findIndex(x => x.participant.id == req.body.userId);

    // clonedArray.splice(i,1);

    // res.json(clonedArray);
});



module.exports = router;
