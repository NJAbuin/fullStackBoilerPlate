const S = require("sequelize");
const db = require("../index");

const Model = S.Model;

class Product extends Model {}
Product.init(
  {
    name: {
      type: S.STRING,
      allowNUll: false
    },
    weight: {
      type: S.FLOAT,
      allowNull: false
    },
    volumetricWeight: {
      type: S.FLOAT
    },
    price: {
      type: S.FLOAT,
      allowNull: false
    }
  },
  {
    sequelize: db,
    modelName: "product"
  }
);

module.exports = Product;
