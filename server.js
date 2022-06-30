const path = require("path");
const gateway = require("express-gateway");

//microservices
const user = require("./user");
const music = require("./music");
const car = require("./cars");
const { appendFile } = require("fs");
gateway().load(path.join(__dirname, "config")).run();
