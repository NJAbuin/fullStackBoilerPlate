const S = require("sequelize");
const db = require("../index");

const Model = S.Model;

class Country extends Model {}
Country.init(
  {
    name: {
      type: S.STRING,
      allowNUll: false
    }
  },
  {
    sequelize: db,
    modelName: "country"
  }
);

module.exports = Country;
