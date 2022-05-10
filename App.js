require('./config/mongoose')
const express = require("express");
const app = express();
const Productrouter = require("./app/products/route");
const Productrouterv2 = require("./app/product-v2/route");
const Productrouterv3 = require("./app/product-v3/route");
const Productrouterv4 = require("./app/product-v4/route");
 //const log = require("./middleware/logger");
const logger = require("morgan");
const path = require("path");
app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(Productrouter);
app.use(Productrouterv2);
app.use(Productrouterv3);
app.use(Productrouterv4);
app.use('/public',express.static(path.join(__dirname, "uploads")));
app.use((req, res, next) => {
  res.status(404);
  res.send({
    status: "failed",
    message: "Resource" + req.originalUrl + " NotFound",
  });
});

const server = app.listen(process.env.PORT || 5000, () => {
  const port = server.address().port;
  console.log(`Express is working on port ${port}`);
});
