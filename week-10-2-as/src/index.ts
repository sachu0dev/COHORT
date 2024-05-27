import express from "express";
import rootRouter from "./routes";

const app = express();

app.use("/api/v1", rootRouter);

app.listen(3000, () => {
  console.log(`Server is running on port 3000`);
});
