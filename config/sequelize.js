const { Sequelize } = require("sequelize");

const sequelize = new Sequelize({
  database: "eduworks-testing-v2",
  host: "localhost",
  username: "root",
  password: "pontianak1",
  dialect: "mysql",
});

(async () => {
  try {
    await sequelize.authenticate();
    console.log("connection has been estalished successfully");
  } catch (error) {
    console.log(error);
  }
})();
module.exports = sequelize;