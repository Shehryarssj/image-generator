import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import connectDB from "./mongodb/connect.js";
import postRoutes from "./routes/postRoutes.js";
import genAIRoutes from "./routes/genAIRoutes.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use("/api/v1/post", postRoutes);
app.use("/api/v1/genAI", genAIRoutes);

app.get("/", async (req, res) => {
  res.send("hello from ai generator");
});

const startServer = async () => {
  try {
    connectDB(process.env.MONGODB_URL);
  } catch (error) {
    console.log(error);
  }
  app.listen(3000, () => {
    console.log("server started on port 3000");
  });
};

startServer();
