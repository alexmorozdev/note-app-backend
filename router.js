import Router from "express";
import {
  addNewNote,
  getAllNotes,
  getOneNote,
  editOneNote,
  deleteOneNote,
  getNotesStats,
} from "./functions.js";

const router = new Router();

router.post("/notes", (req, res) => {
  try {
    addNewNote(
      req.body.name,
      req.body.created,
      req.body.category,
      req.body.content,
      req.body.dates
    );
    res.status(200).json("New note added");
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete("/notes/:id", (req, res) => {
  try {
  } catch (err) {
    res.status(500).json(err);
  }
});

router.patch("/notes/:id", (req, res) => {
  try {
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/notes/:id", (req, res) => {
  try {
    const { id } = req.params;
    const oneNote = getOneNote(id);
    res.json(oneNote);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/notes", (req, res) => {
  try {
    const allNotes = getAllNotes();
    res.json(allNotes);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/notes/stats", (req, res) => {
  try {
  } catch (err) {
    res.status(500).json(err);
  }
});

export default router;
