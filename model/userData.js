const mongoose = require('mongoose');


const Schema = mongoose.Schema;

const userDataSchema = new Schema({

    username: String,
    otp: Number,
    profile_pic: String,
    phone_number: String,
    channel_name: String,
    email: String,
    provider: String,
    proPlayer: Boolean,
    superAdmin: Boolean,
    adminReq: Boolean,
    discord_id: String,
    current_balance: { type: Number, default: 0 },
    status: Boolean,
    country: String,
    gamer: String,
    gamerID: String,
    wr: String,
    kd: String,
    elo: String,
    winrate: String,
    kills: String,
    wins: String,
    platform: String,
    status:{type:String , default:'offline'}

});

var UserData = mongoose.model('userdata', userDataSchema);

module.exports = UserData;