import express, { Request, Response, NextFunction } from "express";

import todosRoutes from "./routes/todos";

const app = express();
const port = 3000;

app.use("/todos", todosRoutes);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500).json({ message: err.message });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}!`);
});
