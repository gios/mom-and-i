import * as knex from "knex";
import * as pg from "pg";
pg.defaults.ssl = true;

export const knexQuery = knex({
  client: "pg",
  connection: process.env.DATABASE_URL,
});
