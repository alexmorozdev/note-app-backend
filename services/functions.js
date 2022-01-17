import { notes } from "../repositories/notes.js";
import { noteStats } from "../helpers/dataBaseFunctions.js";

export function addNote(name, created, category, content, dates) {
  notes.push({
    name: name,
    created: created,
    category: category,
    content: content,
    dates: dates,
    status: "active",
  });
  return "New note added";
}

export function deleteOneNote(id) {
  for (let i = 0; i < notes.length; i++) {
    if (notes[i].created == id) {
      notes.splice(i, 1);
      return "note deleted";
    } else {
      return "no note with this id";
    }
  }
}

export function editOneNote(body) {
  for (let i = 0; i < notes.length; i++) {
    if (notes[i].created == body.created) {
      notes[i].name = body.name;
      notes[i].category = body.category;
      notes[i].content = body.content;
      notes[i].dates = body.dates;
      notes[i].status = body.status;
      return "note edited";
    }
  }
}

export function getOneNote(id) {
  let oneNote = notes.filter((elem) => elem.created === id);
  if (id == "stats") {
    return noteStats();
  }
  return oneNote[0];
}

export function getAllNotes() {
  return notes;
}
