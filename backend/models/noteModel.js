const mongoose = require('mongoose')

const noteSchema = new mongoose.Schema({
    title:{
        type:String,
        require:true
    },
    message:{
        type:String,
        require:true
    }
},{timestamps:true})

const noteModel = mongoose.model('note',noteSchema);

module.exports = noteModel