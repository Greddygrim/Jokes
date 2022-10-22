const mongoose = require("mongoose");


mongoose
  .connect("mongodb://localhost/jokes_video", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connect to Data base"))
  .catch((err) =>
    console.log("You have an Error ", err)
  );