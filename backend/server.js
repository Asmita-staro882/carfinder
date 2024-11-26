import app from "./app.js";
import dotenv from "dotenv";
import { connectDatabase } from "./config/db.js";

dotenv.config();

//database
connectDatabase();

app.listen(process.env.PORT, () => {
  console.log(`Server started on localhost ${process.env.PORT}`);
});
