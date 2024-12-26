import Router from "express";
import express from "express";
import webhookController from "../stripeWebhook";

const webhookRouter = Router();

webhookRouter.post("/", express.raw({ type: "application/json" }), webhookController);

export default webhookRouter;
