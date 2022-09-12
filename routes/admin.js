const express = require('express');
const router = express.Router();
const UserData = require('../model/userData');
const Transaction = require('../model/transaction');
const createError = require('http-errors');
const CoachData = require('../model/coachData');
const ProUserWithdrawRequest = require('../model/proUserWithdrawRequest');
const { default: mongoose } = require('mongoose');

router.get('/user-stats', async (req, res) => {
  try {
    const [subscriber, proUsers, proRequest] = await Promise.all([
      UserData.count({ proPlayer: false }),
      UserData.count({ proPlayer: true }),
      UserData.count({ adminReq: true, proPlayer: false }),
    ]);
    res.send({
      data: {
        subscriber,
        proUsers,
        proRequest,
      },
      error: null,
    });
  } catch (error) {
    console.log(error);
    res.status(500);
    res.send({ data: null, error: error.message });
  }
});

router.get('/pro-request/users', async (req, res) => {
  try {
    const proRequest = await UserData.find({
      adminReq: true,
      proPlayer: false,
    });
    res.send({
      data: {
        users: proRequest,
      },
      error: null,
    });
  } catch (error) {
    console.log(error);
    res.status(500);
    res.send({ data: null, error: error.message });
  }
});

router.patch('/pro-request/user/:id/activate', async (req, res) => {
  try {
    const proRequest = await UserData.findByIdAndUpdate(req.params.id, {
      proPlayer: true,
    });
    res.send({
      data: 'OK',
      error: null,
    });
  } catch (error) {
    console.log(error);
    res.status(500);
    res.send({ data: null, error: error.message });
  }
});

router.get(
  '/pro-request/withdraw/requests',
  async (req, res) => {
    const data = await ProUserWithdrawRequest.find();
    res.send({ data: data, error: null });
  }
);

router.patch(
  '/pro-request/withdraw/requests/:id',
  async (req, res) => {
    const requestData = await ProUserWithdrawRequest.findOneAndUpdate(
      { _id: new mongoose.Types.ObjectId(req.params.id) },
      {
        isApproved: true,
      }
    );
    await Transaction.create({
      userId: requestData.userId.toString(),
      type: 'withdrawal',
      amount: requestData.amount,
      status: 'success',
      date: new Date(), 
    })
    res.send({ data: 'OK', error: null });
  }
);

module.exports = router;
