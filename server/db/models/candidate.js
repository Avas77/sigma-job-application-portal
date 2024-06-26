import { DataTypes } from "sequelize";
import sequelize from "../connect.js";

/* This code snippet is defining a Sequelize model for a "Candidates" table in a database. The model
includes various fields such as firstName, lastName, phoneNumber, email, timeInterval, linkedin,
github, and message, each with specific data types and validation rules. */
const candidateModel = sequelize.define("Candidates", {
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notNull: { msg: "First name is required" },
      notEmpty: { msg: "First name cannot be empty" },
    },
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notNull: { msg: "Last name is required" },
      notEmpty: { msg: "Last name cannot be empty" },
    },
  },
  phoneNumber: {
    type: DataTypes.STRING,
    allowNull: true,
    validate: {
      is: {
        args: /^\+?[1-9]\d{1,14}$/,
        msg: "Phone number must be a valid E.164 format",
      },
    },
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    primaryKey: true,
    validate: {
      notNull: { msg: "Email is required" },
      isEmail: { msg: "Must be a valid email address" },
    },
  },
  timeInterval: {
    type: DataTypes.TIME,
    allowNull: true,
  },
  linkedin: {
    type: DataTypes.STRING,
    allowNull: true,
    validate: {
      isUrl: { msg: "LinkedIn profile must be a valid URL" },
      is: {
        args: /^(https?:\/\/)?([\w]+\.)?linkedin\.com\/.*$/i, //regex to check if a given link is a linkedin link or not
        msg: "LinkedIn profile must be a valid LinkedIn URL",
      },
    },
  },
  github: {
    type: DataTypes.STRING,
    allowNull: true,
    validate: {
      isUrl: { msg: "GitHub profile must be a valid URL" },
      is: {
        args: /^(https?:\/\/)?([\w]+\.)?github\.com\/.*$/i, //regex to check if a given link is a github link or not
        msg: "GitHub profile must be a valid GitHub URL",
      },
    },
  },
  message: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notNull: { msg: "Free text comment is required" },
      notEmpty: { msg: "Free text comment cannot be empty" },
    },
  },
});

export default candidateModel;
