import app from "./app";
import mongoose from "mongoose";

const port = 5000;

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
