const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  title: String,
  body: {
    exerciseName: String,
    duration: Number,
  },
  timeLogged: {
    type: Date,
  },
});

WorkoutSchema.methods.timeStamp = function () {
  this.timeLogged = Date.now();
  return this.timeLogged;
};

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
