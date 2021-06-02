import dotenv from "dotenv";

dotenv.config();

export default {
  PORT: process.env.PORT || 3005,
  MONGODB_URL: process.env.MONGODB_URL || "mongodb://localhost/danile",
  JWT_Secret: process.env.JWT_Secret || "secretKey",
  PAYPAL_CLIENT_ID: process.env.PAYPAL_CLIENT_ID || "sb",
  accessKeyId: process.env.accessKeyId || "accessKeyId",
  secretAccessKeyId: process.env.secretAccessKeyId || "secretAccessKeyId",
};
