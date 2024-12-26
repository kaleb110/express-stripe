import Router from "express";
import cancelSubscriptionController from "../cancelSubscription";
import checkoutController from "../checkout";
import paymentIntentController from "../payment";
const stripeRouter = Router();

stripeRouter.post("/cancel-subscription", cancelSubscriptionController);
stripeRouter.post("/create-checkout-session", checkoutController);
// TODO: check if this route is used
stripeRouter.post("/create-payment-intent", paymentIntentController);

export default stripeRouter;
