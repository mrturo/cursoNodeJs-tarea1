const mongoose = require("mongoose");
var autoIncrement = require('mongoose-sequence')(mongoose);

const tweetSchema = new mongoose.Schema(
    {
        _id: {
            type: Number
        },
        userId: {
            type: ObjectId,
            ref: "User",
            required: true
        },
        message: {
            type: String,
            trim: true,
            required: true
        }
    },
    { timestamps: true }
);

// auto-increment id value
tweetSchema.plugin(autoIncrement, {id:'idTweet_seq',inc_field: '_id'});

module.exports = mongoose.model("Tweet", tweetSchema);