import { knex as setupKnex, Knex } from "knex";

export const config: Knex.Config = {
  client: "sqlite",
  connection: {
    filename: "./tmp/app.db",
  },
};

export const knex = setupKnex(config);
