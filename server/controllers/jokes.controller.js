const Jokes = require("../models/jokes.models");

const getAllJokes = (req, res) => {
  Jokes.find()
    .then((allJokes) => res.json(allJokes))
    .catch((err) => console.log(err));
};

const getJokesByID = (req, res) => {
  const { params } = req;
  Jokes.find({ _id: params._id })
    .then((jokes) => res.json(jokes))
    .catch((err) => console.log(err));
};

const createNewJokes = (req, res) => {
  const { body } = req;
  console.log(body)
  Jokes.create(body)
    .then((newJokes) => res.json(newJokes))
    .catch((err) => console.log(err));
};

const updateJokes = (req, res) => {
  Jokes.findOneAndUpdate({ _id: req.params._id }, req.body, {
    new: true,
    runValidators: true,
  })
    .then((updatedJokes) => res.json(updatedJokes))
    .catch((err) => console.log(err));
};

const deleteJokes = (req, res) => {
  Jokes.deleteOne({ _id: req.params._id })
    .then((result) => res.json(result))
    .catch((err) => console.log(err));
};

module.exports = {
  getAllJokes,
  getJokesByID,
  createNewJokes,
  updateJokes,
  deleteJokes,
};
