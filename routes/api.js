const express = require('express');
const router = express.Router()
const USERDATA = require('../model/userData');
const createError = require('http-errors')
const auth = require('./auth')
const Message = require('../model/Message')
const proRoute = require('./proPlayer')
const chat = require('./chat')
const coach = require('./coach')
const party = require('./party')
const user = require('./user')
const stripe = require('./stripe')
const wallet = require('./wallet')






// Redirect 
router.use('/auth', auth)
router.use('/proplayer', proRoute)
router.use('/chat', chat)
router.use('/coach',coach)
router.use('/party',party)
router.use('/user',user)
router.use('/stripe',stripe)
router.use('/wallet',wallet)





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
