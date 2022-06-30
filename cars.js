var express = require("express");

let app = express();

app.get("/cars", (req, res, next) => {
  res.status(200).send(["volvo", "red"]);
});

app.listen(9000, () => {
  console.log("Server running on 9000");
});
