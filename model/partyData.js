const { urlencoded } = require('express');
const mongoose = require('mongoose');


const Schema = mongoose.Schema;

const PartyDataSchema = new Schema({

    // game: String,
    // email: String,
    // hourcost: Number,
    // urlLink: { type: String }

    title: String,
    url: String,
    price: String,
    lobbyDescription: String,
    // proUserNickname: String,
    preferredServer: String,
    gameFormat: String,
    members: [mongoose.Types.ObjectId]

});

var PartyData = mongoose.model('partyData', PartyDataSchema);

module.exports = PartyData;