import Router from "express";
import {
  addNote,
  getAllNotes,
  getOneNote,
  editOneNote,
  deleteOneNote,
  getNotesStats,
} from "../services/functions.js";

const router = new Router();

router.post("/notes", (req, res) => {
  const data = req.body;
  try {
    if (
      typeof data.name === "string" &&
      typeof data.created === "string" &&
      typeof data.category === "string" &&
      typeof data.content === "string" &&
      typeof data.dates === "string"
    ) {
      res
        .status(200)
        .json(
          addNote(
            data.name,
            data.created,
            data.category,
            data.content,
            data.dates
          )
        );
    } else {
      res
        .status(400)
        .json("some data not found, or some data type not a srting");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete("/notes/:id", (req, res) => {
  try {
    const { id } = req.params;
    res.json(deleteOneNote(id));
  } catch (err) {
    res.status(500).json(err);
  }
});

router.patch("/notes/:id", (req, res) => {
  try {
    const editNote = req.body;
    if (!editNote.created || typeof editNote.created !== "string") {
      res.status(400).json("id not found, or this data type not a srting");
    }
    res.status(200).json(editOneNote(editNote));
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/notes/:id", (req, res) => {
  try {
    const { id } = req.params;
    const oneNote = getOneNote(id);
    if (oneNote) {
      res.json(oneNote);
    } else {
      res.status(400).json("note not found");
    }
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

export default router;
