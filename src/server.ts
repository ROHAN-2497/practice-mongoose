import express from "express";
import mongoose from "mongoose";
import cors from "cors";
const app = express();
const port = 5000;

//Using Cors
app.use();

// Database Connection
async function bootstrap() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/practice-mongoose");
    console.log(`Database connect successfull`);
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}`);
    });
  } catch (error) {
    console.log(`⚠️  Failed to connect database `, error);
  }
}
bootstrap();

app.get("/", (req, res) => {
  res.send("Hello World!");
});
