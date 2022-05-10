const router = require("express").Router();
const Productcontroller = require("./controller");
const multer = require("multer");
const upload = multer({ dest: "uploads" });
router.get("/product", Productcontroller.index);
router.get("/product/:id", Productcontroller.detail);
router.post("/product/store", upload.single("image"), Productcontroller.store);
router.put("/product/:id", upload.single("image"), Productcontroller.update);
router.delete("/product/:id", upload.single("image"), Productcontroller.destroy);

// router.get("/", (req, res) => {
//   const { page, total } = req.query;
//   res.json([
//     {
//       Method: "Get",
//       Url: "http://localhost:3000/",
//     },
//     {
//       Method: "GET",
//       url: "http://localhost:3000/:category/:tag",
//     },
//     {
//       Method: "POST",
//       url:"http://localhost:3000/products"
//     },
//     {
//       Nama: "Willy Handoyo",
//       Kelas: "Student",
//       Domisili: "Pontianak",
//       age: 25,
//     },
//     {
//       Nama: "Willy Handoyo",
//       Kelas: "Student",
//       Domisili: "Pontianak",
//       age: 25,
//     },
//     {
//       Nama: "Willy Handoyo",
//       Kelas: "Student",
//       Domisili: "Pontianak",
//       age: 25,
//     },
//     {
//       Nama: "Willy Handoyo",
//       Kelas: "Student",
//       Domisili: "Pontianak",
//       age: 25,
//     },
//     {
//       Nama: "Willy Handoyo",
//       Kelas: "Student",
//       Domisili: "Pontianak",
//       age: 25,
//     },
//   ]);
// });
// router.get('/:category/',(req,res)=>{
//     console.log(req.query)
//     const category = req.params;
//   res.json({
//         category
//     })
// });
// router.post("/products", upload.single("image"), (req, res) => {
//   const { name, price, stock, status } = req.body;
//   const image = req.file;

//   const target = path.join(__dirname, "uploads", image.originalname);
//   fs.renameSync(image.path, target);
//   res.json({
//     Method: "POST",
//     url:"http://localhost:3000/produts"
//   },{
//     name,
//     price,
//     stock,
//     status,
//     image,
//   });
// });
// // router.post("/cover", upload.single("image"), function (req, res, next) {});
// router.get("/product/:id", (req, res) => {
//   console.log(req.query);
//   res.json({
//     id: req.params.id,
//   });
// });
module.exports = router;
