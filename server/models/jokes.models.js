const mongoose = require("mongoose");

const Schema = mongoose.Schema;


const JokeSchema = new Schema({
        setup: String,
        punchline: String,
      },
      { timestamps: true });

// const JokeSchema = new mongoose.SchemaType(
//  
// );

const Joke = mongoose.model("Joke",JokeSchema);

module.exports = Joke;