import { Sequelize } from "sequelize/types";
import db from "../index";

const Model = Sequelize.Model;

class User extends Model {}
User.init(
  {
    firstName: {
      type: Sequelize.STRING,
      allowNUll: false
    },
    age: {
      type: Sequelize.NUMBER
    }
  },
  {
    sequelize: db,
    modelName: "user"
  }
);

module.exports = User;
