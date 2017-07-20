const dotenv = require("dotenv");
const pg = require("pg");
dotenv.config();
pg.defaults.ssl = true;

module.exports = {

  development: {
    client: "pg",
    connection: process.env.DATABASE_URL,
  },

  staging: {
    client: "pg",
    connection: process.env.DATABASE_URL,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "knex_migrations"
    }
  },

  production: {
    client: "pg",
    connection: process.env.DATABASE_URL,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "knex_migrations"
    }
  }

};
