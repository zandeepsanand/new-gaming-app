const express = require('express');
const { verifyAccessToken } = require('../helpers/jwt_helper');
const router = express.Router()

const PartyData = require('../model/partyData')




router.post('/', verifyAccessToken, async (req, res) => {
  try {
    const createdBy = req.payload;
    console.log('Console ~ createdBy', createdBy);
    let item = {
      game: req.body.game,
      gameFormat: req.body.gameFormat,
      lobbyDescription: req.body.lobbyDescription,
      preferredServer: req.body.preferredServer,
      price: req.body.price,
      proUserNickname: req.body.proUserNickname,
      title: req.body.title,
      url: req.body.url,
    };
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

