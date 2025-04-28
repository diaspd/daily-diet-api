import { app } from "./app";

const port = 3333;

app.listen({ port }).then(() => {
  console.log('HTTP Server Running!');
})