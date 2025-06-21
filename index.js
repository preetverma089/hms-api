import express from "express";
import { config } from "dotenv";

config();
const app = express();
const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`server islisten at ${port}`);
});
