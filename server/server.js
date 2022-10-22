const express = require("express");
const app = express();
const port = 8000;
const jokesRoutes = require("./routes/jokes.routes");
require("./config/mongoose.config");

app.use(express.json(), express.urlencoded({ extended: true }));
jokesRoutes(app);

app.listen(port, () => console.log("Express running on port ${port}"));
