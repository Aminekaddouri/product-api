import connectDB from "./config/db.js";
import dotenv from "dotenv";
import app from "./app.js";

dotenv.config();

const db = process.env.DATABASE_URI;

connectDB(db);

const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`App running on port ${port}..`);
});
