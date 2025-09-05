import dotenv from "dotenv";

dotenv.config();

export const config = {
    port: process.env.PORT || 5000,
    nodeEnv: process.env.NODE_ENV || "development",
    clientUrl: process.env.CLIENT_URL || "http://localhost:5173",
    stripeSecretKey: process.env.STRIPE_PRIVATE_KEY || "",
    mongoUri: process.env.MONGO_URI || "", // add this in your .env
};
