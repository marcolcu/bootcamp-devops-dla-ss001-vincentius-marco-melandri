import express from "express";
import type { Request, Response } from "express";
import cors from "cors";

const app = express();
const port = 5000;

app.use(
  cors({
    origin: "*", // bebas dari mana saja
  }),
);

app.get("/hello", (_req: Request, res: Response) => {
  res.json({ message: "Hello, world!" });
});

app.listen(port, () => {
  console.log(`🚀 Backend running on http://0.0.0.0:${port}`);
});
