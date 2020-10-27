const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require('body-parser');
const port_number = process.env.PORT || 8001;

let dir = ["mod_web_new", "mod_web_old", "moda_new"], cntDir = dir[2];

app.use(express.static(cntDir));
app.use(bodyParser.json());
app.set("views", path.join(__dirname, cntDir));
app.set("view engine", "html");

app.listen(port_number, () =>
  console.log(`This project is listening on port ${port_number}!`)
);
