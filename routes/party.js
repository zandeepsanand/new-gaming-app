const express = require('express');
const { default: mongoose } = require('mongoose');
const router = express.Router();

const PartyData = require('../model/partyData');
const UserData = require('../model/userData');

router.post('/', async (req, res) => {
  try {
    const tokenUser = req.payload;
    const createdBy = new mongoose.Types.ObjectId(tokenUser.id);
    const item = {
      game: req.body.game,
      gameFormat: req.body.gameFormat,
      lobbyDescription: req.body.lobbyDescription,
      preferredServer: req.body.preferredServer,
      price: req.body.price,
      title: req.body.title,
      url: req.body.url,
      members: [
        {
          id: createdBy,
          type: 'creator'
        }
      ],
      createdBy,
      status: 'idle',
      isPrivate: req.body?.isPrivate || false
    };
    if (req.body.proUserNickname) {
      const proUser = await UserData.findOne({
        username: req.body.proUserNickname,
      });
      if (!proUser) throw new Error('Pro Username not found');
      item.members.push({
        id: proUser._id,
        type: 'pro-user',
      });
    }
    const USER = new PartyData(item);
    const savedIdData = await USER.save();
    res.send({ data: savedIdData, error: null });
  } catch (error) {
    console.log(error);
    res.send({ error: error.message });
  }
});

router.patch('/:id/add-user', async(req, res) => {
  try {
    const tokenUser = req.payload;
    const id = new mongoose.Types.ObjectId(req.params.id);
    const cUser = new mongoose.Types.ObjectId(tokenUser.id);
    const party = await PartyData.findById(id);
    if(party.members.find(e => e.id === cUser)) throw new Error('Already added')
    party.members.push({
      id: cUser,
      type: 'sub-user',
    })
    await party.save();
    res.send({ data: party, error: null });
  } catch (error) {
    res.send({ error: error.message });
  }
})

router.get('/', async (req, res) => {
  try {
    const userLists = await PartyData.aggregate([
      {
        $lookup: {
          "from": 'userdatas',
          localField: 'members.id',
          foreignField: '_id',
          "as": 'users',
          "pipeline": [{
            $project: {
              username: 1, profile_pic: 1, channel_name: 1, discord_id: 1, about: 1, elo: 1, kd: 1
            }
          }]
        }
      }
    ]);
    res.send(userLists);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
