import type { FastifyInstance } from "fastify";

export async function mealsRoutes(app: FastifyInstance) {
  app.get("/", async () => console.log("meals"));
}
