import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { config } from "./config";
import paymentRoutes from "./routes/payment.routes";
import refundRoutes from "./routes/refund.routes";
import transactionRoutes from "./routes/transaction.routes";
import { errorHandler } from "./middleware/errorHandler";
import { logger } from "./middleware/logger";

const app = express();

// ✅ Enable CORS
app.use(cors({
    origin: config.clientUrl,   // e.g. http://localhost:5173
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
}));

// Middleware
app.use(express.json());
app.use(logger);

// Routes
app.use("/api/payment", paymentRoutes);
app.use("/api/refund", refundRoutes);
app.use("/api/transactions", transactionRoutes);

// Error handler
app.use(errorHandler);

// MongoDB connection
mongoose
    .connect(config.mongoUri)
    .then(() => console.log("✅ Connected to MongoDB Atlas"))
    .catch((err) => console.error("❌ MongoDB connection error:", err));

export default app;
