const router = require("express").Router();
const Product = require("./model");

router.post("/product-v2", async (req, res) => {
  const { name, price, stock, status } = req.body;
  try {
    await Product.sync({ force: true });
    const result = await Product.create({ name, price, stock, status });
    res.send(result);
    console.log(result);
  } catch (e) {
    res.send(e);
    console.log(e);
  }
});
router.put("/product-v2/:id", async (req, res) => {
  const { name, price, stock, status } = req.body;
  const id = req.params.id;
  let find = await Product.findByPk(id);
  try {
    const result = await find.update({ name, price, stock, status });
    res.send(result);
    console.log(result);
  } catch (e) {
    res.send(e);
    console.log(e);
  }
});
router.get("/product-v2", async (req, res) => {
  const product = await Product.findAll();
  try {
    return res.json({
      status: "Data Berhasil Di baca",
      code: "200",
      data: product,
    });
  } catch (e) {
    res.send(e);
    console.log(e);
  }
});
router.get("/product-v2/:id", async (req, res) => {
  const id = req.params.id;
  let find = await Product.findByPk(id);

  try {
    return res.json({
      status: "Data Detail Berhasil Di baca",
      code: "200",
      data: find,
    });
  } catch (e) {
    res.send(e);
    console.log(e);
  }
});
router.delete("/product-v2/:id", async (req, res) => {
  const id = req.params.id;
  let find = await Product.findByPk(id);
  try {
    await find.destroy();
    res.json({
      status: "Data Berhasil didelete",
      code: 200,
    });
  } catch (e) {
    res.send(e);
    console.log(e);
  }
});

module.exports = router;
