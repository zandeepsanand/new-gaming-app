const express = require('express');
const { default: mongoose } = require('mongoose');
const { verifyAccessToken } = require('../helpers/jwt_helper');
const router = express.Router()

const PartyData = require('../model/partyData')

router.post('/', verifyAccessToken, async (req, res) => {
  try {
    const createdBy = req.payload;
    console.log('Console ~ createdBy', createdBy);
    const item = {
      game: req.body.game,
      gameFormat: req.body.gameFormat,
      lobbyDescription: req.body.lobbyDescription,
      preferredServer: req.body.preferredServer,
      price: req.body.price,
      title: req.body.title,
      url: req.body.url,
      members: [],
      createdBy: new mongoose.Types.ObjectId(createdBy.id)
    };
    if (req.body.proUserNickname) {
      item.members.push({
        id: new mongoose.Types.ObjectId(req.body.proUserNickname),
        type: 'pro-user',
      });
    }
    console.log(req.body);
    const USER = new PartyData(item);
    const savedIdData = await USER.save();
    res.send(savedIdData);
  } catch (error) {
    console.log(error);
  }
});

router.get('/', async (req, res) => {
    try {

        const userLists = await PartyData.find()
        res.send(userLists)
    } catch (error) {
        console.log(error)
    }
})

module.exports = router;

