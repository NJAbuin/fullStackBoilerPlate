const { Product } = require("../db/models");
const api = require("express").Router();

//DELETE THIS ROUTES BEFORE DEPLOYING/////////////////
//EDIT THE SEED TO SUIT YOUR MODEL REQUIREMENTS
api.get("/seed", (req, res) => {
  Product.create({
    name: "Chromebox 5196058",
    weight: 1.5,
    price: 360.0
  }).then(products => res.send(products));
});

//////////////////////////////////////////////////////////

api.get("/products", (req, res) => {
  Product.findAll().then(product => res.json(product));
});

module.exports = api;
