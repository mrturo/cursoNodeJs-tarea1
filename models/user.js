const mongoose = require("mongoose");
var autoIncrement = require('mongoose-sequence')(mongoose);

const userSchema = new mongoose.Schema(
    {
        _id: {
            type: Number
        },
        names: {
            type: String,
            trim: true,
            required: true
        },
        surnames: {
            type: String,
            trim: true,
            required: true
        },
        password: {
            type: String,
            trim: true,
            required: true
        },
        birthdate: {
            type: Date,
            default: Date.now
        },
        email: {
            type: String,
            trim: true,
            required: true
        },
        avatar: {
            type: String,
            trim: true,
            default: ''
        },
        banner: {
            type: String,
            trim: true,
            default: ''
        },
        biography: {
            type: String,
            trim: true,
            default: ''
        },
        location: {
            type: String,
            trim: true,
            default: ''
        },
        website: {
            type: String,
            trim: true,
            default: ''
        }
    },
    { timestamps: true }
);

// auto-increment id value
userSchema.plugin(autoIncrement, {id:'idUser_seq',inc_field: '_id'});

module.exports = mongoose.model("User", userSchema);