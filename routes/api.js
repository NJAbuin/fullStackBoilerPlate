const api = require("express").Router();
const { Country } = require("../db/models");

//DELETE THIS ROUTES BEFORE DEPLOYING/////////////////
//EDIT THE SEED TO SUIT YOUR MODEL REQUIREMENTS
api.get("/seed", (req, res) => {
  Country.create({ name: "Brazil" })
    .then(country => res.send(`country created`))
    .catch(country => res.send(`error creating ${country}`));
});

//////////////////////////////////////////////////////////
api.get("/countries", (req, res) => {
  Country.findAll()
    .then(countries => res.send(countries))
    .catch(countries => res.send("Error fetching countries"));
});

module.exports = api;
