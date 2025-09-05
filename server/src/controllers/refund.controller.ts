import { Request, Response } from "express";
import Stripe from "stripe";
import { config } from "../config";

const stripe = new Stripe(config.stripeSecretKey);

export const createRefund = async (req: Request, res: Response) => {
    try {
        const { paymentIntentId } = req.body;

        const refund = await stripe.refunds.create({
            payment_intent: paymentIntentId,
        });

        res.json(refund);
    } catch (error) {
        res.status(500).json({ error: (error as Error).message });
    }
};
