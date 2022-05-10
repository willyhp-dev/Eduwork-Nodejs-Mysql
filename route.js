const router = require("express").Router();
const multer = require("multer");
const upload = multer({ dest: "uploads" });
const path = require('path');
const fs = require("fs");

router.get("/", (req, res) => {
  const { page, total } = req.query;
  res.json([{
    Nama: "Willy Handoyo",
    Kelas: "Student",
    Domisili: "Pontianak",
    age: 25,
  },
  {
    Nama: "Willy Handoyo",
    Kelas: "Student",
    Domisili: "Pontianak",
    age: 25,
    },
    {
      Nama: "Willy Handoyo",
      Kelas: "Student",
      Domisili: "Pontianak",
      age: 25,
    },
    {
      Nama: "Willy Handoyo",
      Kelas: "Student",
      Domisili: "Pontianak",
      age: 25,
    },
    {
      Nama: "Willy Handoyo",
      Kelas: "Student",
      Domisili: "Pontianak",
      age: 25,
    }]);
});
// router.get('/:category/:tag',(req,res)=>{
//     console.log(req.query)
//     const {category,tag} = req.params;
//     res.json({
//         category,tag
//     })
// });
router.post("/product", upload.single('image'), (req, res) => {
  const { name, price, stock, status } = req.body;
  const image = req.file;
  
  const target = path.join(__dirname, "uploads", image.originalname);
  fs.renameSync(image.path, target);
  res.json({
      name,
      price,
      stock,
      status,
      image
    });
});
// router.post("/cover", upload.single("image"), function (req, res, next) {});
router.get("/product/:id", (req, res) => {
  console.log(req.query);
  res.json({
    id: req.params.id,
  });
});
module.exports = router;
