const connection = require("../../config/mysql");
const path = require("path");
const fs = require("fs");
const index = (req, res) => {
  const {search} = req.query;
  let exec = {};
  if (search) {
    exec = {
      sql: "SELECT * FROM `eduworks` WHERE nama like ? ",
      values: [`%${search}%`],
    };
  } else {
    exec = {
      sql: "SELECT * FROM `eduworks`"
    };
  }
  connection.query(exec, _response(res));
};
const detail = (req, res) => {
  connection.query(
    {
      sql: "SELECT * FROM `eduworks` WHERE id = ? ",
      values: [req.params.id],
    },
    _response(res)
  );
};
const store = (req, res) => {
  const { nama, kelas, pendidikan, status } = req.body;
  const image = req.file;
  if (image) {
    const target = path.join(__dirname, "../../uploads", image.originalname);
    fs.renameSync(image.path, target);
  }
  connection.query(
    {
      sql: "INSERT INTO eduworks(`nama`,`kelas`,`pendidikan`,`status`,`image_url`) VALUES (?,?,?,?,?)",
      values: [
        nama,
        kelas,
        pendidikan,
        status,
        `http://localhost:3000/public/${image.originalname}`,
      ],
    },
    _response(res)
  );
};

const update = (req, res) => {
  const { nama, kelas, pendidikan, status } = req.body;
  const image = req.file;
  let sql = "";
  let values = [];
  if (image) {
    const target = path.join(__dirname, "../../uploads", image.originalname);
    fs.renameSync(image.path, target);
    (sql =
      "UPDATE eduworks SET `nama`=?,`kelas`=?,`pendidikan`=?,`status`=?,`image_url`=? WHERE `id` = ? "),
      (values = [
        nama,
        kelas,
        pendidikan,
        status,
        `http://localhost:3000/public/${image.originalname}`,
        req.params.id,
      ]),
      _response(res);
  } else {
    sql =
      "UPDATE eduworks SET `nama`=?,`kelas`=?,`pendidikan`=?,`status`=? WHERE `id` = ? ";
    values = [nama, kelas, pendidikan, status, req.params.id];
  }
  connection.query({ sql, values }, _response(res));
};
const destroy = (req, res) => {
  connection.query(
    {
      sql: "DELETE FROM `eduworks` WHERE id = ? ",
      values: [req.params.id],
    },
    _response(res)
  );
};
const _response = (res) => {
  return (error, result) => {
    if (error) {
      res.send({
        status: "failed",
        response: error,
      });
    } else {
      res.send({
        status: "sukses",
        response: result,
      });
    }
  };
};
module.exports = {
  index,
  detail,
  store,
  update,
  destroy,
};
