const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SinSchema = new Schema({
  Title: {
    type: String,
  },
  Desc: {
    type: String,
  },
});

const Sin = mongoose.models.Sin || mongoose.model("Sin", SinSchema);

export default Sin;
