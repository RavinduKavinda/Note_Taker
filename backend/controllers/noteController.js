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
        res.json(notes)
    }catch(err){
        console.log(err)
        res.status(500).json({"message":"Error during fetching notes"})
    }
}

//remove note
const removeNote = async(req,res) => {
    try{
        const {id} = req.params

        const note = await noteModel.findByIdAndDelete(id)
        if(!note){
            return res.status(404).json({"message":"Note not found"})
        }
        res.status(200).json({"message":"Note Deleted"})

    }catch(err){
        console.log(err)
        res.status(500).json({"message":"Note not Deleted"})
    }
}

//edit note
const editNote = async(req,res) => {
    try{
        const {id} = req.params
        const {title, message} = req.body
        if(!title || !message) {
            return res.send({"message":"All feild are required"})
        }

        const note = await noteModel.findByIdAndUpdate(id,{
            title,
            message
        },{new:true})

        res.send({"message":"Note Updated",note})

    }catch(err){
        console.log(err)
    }
}

//get single note
const getSingleNote = async(req,res) => {
    try{
        const {id} = req.params;

        const note = await noteModel.findById(id)
        if(!note){
            return res.status(404).json({"message":"Note not found"})
        }
        res.send(note)
        
    }catch(err){
        console.log(err)
    }
}

module.exports = {addNote, getAllNotes, removeNote, editNote, getSingleNote}