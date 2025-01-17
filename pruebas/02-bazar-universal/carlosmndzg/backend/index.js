import express from "express";
import "./utils/envLoader.js";
import itemsRouter from "./routes/items.routes.js";
import cors from "./middlewares/cors.js";

const app = express();
const port = process.env.PORT ?? 8000;

app.use(cors());
app.use("/api/items", itemsRouter);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
