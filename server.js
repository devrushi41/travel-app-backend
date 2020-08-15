const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");

require("dotenv").config();

const app = express();
// middlewares
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const port = process.env.PORT || 3000;

app.get("/", (req, res) => res.send("Hello World!"));
app.listen(port, () => console.log(`Example app listening on port ${port}`));
