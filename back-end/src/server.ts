import express from "express";
import "dotenv/config";

import { routes } from "./routes";
import cors from "cors";

const app = express();

app.use(express.json());

app.use(cors());

app.use(routes);

app.listen(process.env.PORT || 4000, () =>
  console.log("O Server está rodando")
);
