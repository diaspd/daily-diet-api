import fastify from "fastify";
import { mealsRoutes } from "./routes/meals";

export const app = fastify();

app.register(mealsRoutes);
