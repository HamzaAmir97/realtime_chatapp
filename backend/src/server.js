import express from "express";
import path from "path";
import authRoutes from "./routes/auth.route.js";
import { connectDB } from "./lib/db.js";
import { ENV } from "./lib/env.js";


const app = express();

const PORT = ENV.PORT || 3000;

console.log(PORT);

const __dirname = path.resolve();

app.use("/api/auth", authRoutes);
// app.use("/api/messages", messageRoutes);

// make ready for deployment
if (ENV.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));

  app.get("*", (_, res) => {
    res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
  });
}

app.listen(PORT, () => {


    console.log(`Server is running on port ${PORT}`);

    connectDB(); 
  });