import { notes } from "./notes.js";

export function addNewNote(name, created, category, content, detes) {
  notes.push({
    name: name,
    created: created,
    category: category,
    content: content,
    detes: detes,
    status: "active",
  });
}

export function deleteOneNote() {
  let deleteNote = "Delete note";
  return deleteNote;
}

export function editOneNote() {
  let editNote = "Edit note";
  return editNote;
}

export function getOneNote(id) {
  let oneNote = notes.filter((elem) => elem.created === id);
  return oneNote;
}

export function getAllNotes() {
  return notes;
}

export function getNotesStats() {
  let notesStats = "JSON file";
  return notesStats;
}
