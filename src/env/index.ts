import { config } from "dotenv";
import { z } from "zod";

if (process.env.NODE_ENV === "test") {
  config({ path: ".env.test" });
} else {
  config();
}

const envSchema = z.object({
  PORT: z.coerce.number().default(3333),
});

const _env = envSchema.safeParse(process.env);

if (_env.success === false) {
  console.error("⚠️  Invalid enviroment variables!", _env.error.format());

  throw new Error("Invalid enviroment variables.");
}

export const env = _env.data;
