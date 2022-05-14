import mongoose from "mongoose";

const moviesSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  actor: {
    type: String,
    required: true,
  },
  actress: {
    type: String,
    required: true,
  },
  releaseYear: {
    type: Number,
    required: true,
  },
  director: {
    type: String,
    required: true,
  },
});

export default mongoose.model("movies", moviesSchema);
