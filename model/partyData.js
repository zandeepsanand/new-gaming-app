const { urlencoded } = require('express');
const mongoose = require('mongoose');


const Schema = mongoose.Schema;

const PartyDataSchema = new Schema({

    game: String,
    email: String,
    hourcost: Number,
    urlLink: { type: String }


});

var PartyData = mongoose.model('partyData', PartyDataSchema);

module.exports = PartyData;