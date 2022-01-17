import { notes } from "../repositories/notes.js";

let noteCount = (status, category) => {
  return notes.reduce(function (acc, item) {
    return item.status === status && item.category === category ? acc + 1 : acc;
  }, 0);
};

export const noteStats = () => {
  return {
    "Active tasks": noteCount("active", "Task"),
    "Archive tasks": noteCount("archive", "Task"),
    "Active ideas": noteCount("active", "Idea"),
    "Archive ideas": noteCount("archive", "Idea"),
    "Active thought": noteCount("active", "Random thought"),
    "Archive thought": noteCount("archive", "Random thought"),
  };
};
