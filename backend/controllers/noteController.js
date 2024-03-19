const noteModel = require("../models/noteModel")

//add note
const addNote = async(req,res) => {
    try{
        const {title,message} = req.body
        if(!title || !message) {
            return res.send({"message":"All fields are required"})
        }

        const note = await new noteModel({title,message})
        await note.save()
        res.status(201).send({"message":"Note Added"})

    }catch(err){
        console.log(err)
    }
}

//get all notes
const getAllNotes = async(req,res) => {
    try{
        const notes = await noteModel.find()
        if(notes.length===0){
            return res.status(404).json({"message":"Notes not found"})
        }
        res.send(notes)
    }catch(err){
        console.log(err)
        res.status(500).json({"message":"Error during fetching notes"})
    }
}

//remove note
const removeNote = async(req,res) => {
    try{

    }catch(err){
        console.log(err)
    }
}

//edit note
const editNote = async(req,res) => {
    try{

    }catch(err){
        console.log(err)
    }
}

//get single note
const getSingleNote = async(req,res) => {
    try{

    }catch(err){
        console.log(err)
    }
}

module.exports = {addNote, getAllNotes, removeNote, editNote, getSingleNote}