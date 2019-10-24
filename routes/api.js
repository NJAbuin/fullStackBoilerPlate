const api = require("express").Router();

const mockResponse = {
  foo: "bar",
  bar: "foo"
};

api.get("/", (req, res) => {
  res.send(mockResponse);
});

module.exports = api;
