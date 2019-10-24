const api = require("express").Router();
const User = require("../db/models/User");

const mockResponse = {
  foo: "bar",
  bar: "foo"
};

//DELETE THIS ROUTES BEFORE DEPLOYING/////////////////
api.get("/seed", (req, res) => {
  User.bulkCreate([
    {
      firstName: "Pepe",
      age: 23
    },
    {
      firstName: "Caro",
      age: 23
    },
    {
      firstName: "Fede",
      age: 36
    }
  ]).then(data => res.json(data));
});

api.get("/destroydb", (req, res) => {
  User.destroy({ where: {} }).then(data => res.redirect("/"));
});

//////////////////////////////////////////////////////////

api.get("/", (req, res) => {
  res.send(mockResponse);
});

module.exports = api;
