const S = require("sequelize");
const db = require("../index");

const Model = S.Model;

class ShippingCompany extends Model {}
ShippingCompany.init(
  {
    name: {
      type: S.STRING,
      allowNUll: false
    },
    pricePerKg: {
      type: S.FLOAT,
      allowNull: false
    },
    pricePercentFee: {
      type: S.FLOAT
    }
  },
  {
    sequelize: db,
    modelName: "shippingCompany"
  }
);

module.exports = ShippingCompany;
