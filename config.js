import dotenv from "dotenv";

dotenv.config();

export default {
  accessKeyId: process.env.accessKeyId || "accessKeyId",
  secretAccessKeyId: process.env.secretAccessKeyId || "secretAccessKeyId",
};
