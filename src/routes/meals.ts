import type { FastifyInstance } from "fastify";
import { knex } from "../database";

export async function mealsRoutes(app: FastifyInstance) {
  app.get("/", async () => {
    const tables = await knex("sqlite_schema").select("*");

    return tables;
  });
}
