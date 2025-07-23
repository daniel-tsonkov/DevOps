const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const NoteSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    totebookId: {
      type: Schema.Types.ObjectId,
      required: false,
      default: null,
    },
  },
  { timeStamps: true }
);

const Note = mongoose.model("Note", NoteSchema);

module.exports = {
  Note,
};
