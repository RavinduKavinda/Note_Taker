const express = require('express');
const { addNote, getAllNotes, removeNote, editNote, getSingleNote  } = require('../controllers/noteController');

const router = express.Router()

router.post("/add-note",addNote);
router.get("/notes",getAllNotes);
router.delete("/notes/:id",removeNote);
router.put("/add-note",editNote);
router.get("/add-note",getSingleNote);

module.exports = router