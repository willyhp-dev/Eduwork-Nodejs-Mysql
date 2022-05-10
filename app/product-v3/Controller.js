const { ObjectId } = require("mongodb");
const db = require("../../config/mongodb");
const fs = require("fs");
const path = require("path");
const index = (req, res) => {
  db.collection("Products")
    .find()
    .toArray()
    .then((result) => res.send(result))
    .catch((error) => res.send(error));
};
const view = (req, res) => {
  const id = req.params;
  db.collection("Products")
    .findOne({ _id: ObjectId(id) })
    .then((result) => res.send(result))
    .catch((error) => res.send(error));
};
const store = (req, res) => {
  const { name, stock, price, status } = req.body;
  const image = req.file;
  if (image) {
    const target = path.join(__dirname, "../../uploads", image.originalname);
    fs.renameSync(image.path, target);
    db.collection("Products")
      .insertOne({
        name,
        price,
        stock,
        status,
        image_url: `http://localhost:5000/public/${image.originalname}`,
      })
      .then((result) => res.send(result))
      .catch((error) => console.log(error));
  }
};
const Update = (req, res) => {
  const update = req.body;
  const image = req.file;
  const id = req.params;
  if (image) {
    const target = path.join(__dirname, "../../uploads", image.originalname);
    fs.renameSync(image.path, target);
    db.collection("Products")
      .updateOne(
        { _id: ObjectId(id) },
        {$set:update
        }
      )
      .then((result) => res.send(result))
      .catch((error) => console.log(error));
  } else {
    db.collection("Products")
      .updateOne(
        { _id: ObjectId(id) },
        {
          name,
          price,
          stock,
          status,
          image_url: `http://localhost:5000/public/${image.originalname}`,
        }
      )
      .then((result) => res.send(result))
      .catch((error) => console.log(error));
  }
};
const Destroy = (req, res) => {
  const id = req.params;
  db.collection("Products")
    .deleteOne({ _id: ObjectId(id) })
    .then((result) => res.send(result))
    .catch((error) => res.send(error));
};
module.exports = {
  index,
  view,
  store,
  Update,
  Destroy,
};
