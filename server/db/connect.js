import { Sequelize } from "sequelize";
import "dotenv/config";
import { ENV } from "../const/env.js";

/* This code snippet is creating a new Sequelize instance to establish a connection to a MySQL
database. The `Sequelize` constructor is being called with the database name, username, password,
and connection options provided as arguments. The connection options specify the dialect as MySQL
and the host name from the environment variables. This instance of Sequelize will be used to
interact with the MySQL database specified in the environment variables. */
const sequelize = new Sequelize(ENV.DATABASE_NAME, ENV.USERNAME, ENV.PASSWORD, {
  dialect: "mysql",
  host: ENV.HOST_NAME,
});

export default sequelize;
