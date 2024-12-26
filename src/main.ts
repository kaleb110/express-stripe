
import { errorHandler } from "./middleware/errorHandler";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import dotenv from "dotenv";
import webhookRouter from "./stripe/stripeWebhook";
import stripeRouter from "./stripe/router/stripeRouter";
import { Application } from "express";
dotenv.config();

const app: Application = express();
const isProd = process.env.NODE_ENV === "production";

// Move CORS configuration to the top, right after app initialization
const allowedOrigins = isProd
  ? [process.env.BASE_URL_PROD!]
  : [process.env.BASE_URL!];

// 1. First, set security headers with helmet
app.use(
  helmet({
    crossOriginResourcePolicy: { policy: "cross-origin" },
    crossOriginOpenerPolicy: { policy: "unsafe-none" },
  })
);

// 2. Configure and apply CORS
const corsOptions = {
  origin: function (
    origin: string | undefined,
    callback: (err: Error | null, allow?: boolean) => void
  ) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS", "PATCH"],
  allowedHeaders: [
    "Content-Type",
    "Authorization",
    "X-Requested-With",
    "Accept",
  ],
  credentials: true,
};

app.use(cors(corsOptions));
app.options("*", cors(corsOptions));

// TODO:security in header
app.set("trust proxy", 1);

// payment webhook: does not be parsed
app.use("api/webhook", webhookRouter);

app.use(express.json());

// global error handler
app.use(errorHandler);


// payment route
app.use("api/", stripeRouter);


// server listening on port 5000
app.listen(5000, () => {
  console.log(`Server is running on http://localhost:${5000}/api`);
});
