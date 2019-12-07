const Product = require("./Product");
const Country = require("./Country");
const ShippingCompany = require("./ShippingCompany");

Country.hasMany(ShippingCompany);

module.exports = { Product, Country, ShippingCompany };
