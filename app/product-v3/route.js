const router = require("express").Router();
const multer = require("multer");
const upload = multer({ dest: "uploads/" });
const Productcontrollerv3 = require("./Controller");
const db = require("../../config/mongodb");

router.get("/product-v3", Productcontrollerv3.index);
router.get("/product-v3/:id", Productcontrollerv3.view);
router.post("/product-v3", upload.single("image"), Productcontrollerv3.store);
router.delete("/product-v3/:id", Productcontrollerv3.Destroy);
router.patch(
  "/product-v3/:id",
  upload.single("image"),
  Productcontrollerv3.Update
);
module.exports = router;
