import { config } from "dotenv";

config({ path: `.env.${process.env.NODE_ENV || 'development'}.local` });

export const { PORT, NODE_ENV, DB_URI, JWT_SECRET, JWT_EXPIRES_IN } = process.env;

// token -> eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2N2JkYmE3MmY2MzM5YTFiMWNmMTY3ZTciLCJpYXQiOjE3NDA0ODcyODIsImV4cCI6MTc0MDU3MzY4Mn0._6GEKDK3rmf25YpMmxYOx1Ty0ipb1gQYK5d-vxduFrA