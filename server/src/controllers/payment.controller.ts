// payment.controller.ts
import { Request, Response } from "express";
import Stripe from "stripe";
import { config } from "../config";
import { storeItems } from "../data/storeItems";
import { ItemType } from "../types/items";

const stripe = new Stripe(config.stripeSecretKey);

export const createCheckoutSession = async (req: Request, res: Response) => {
    try {
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ["card"],
            mode: "payment",
            line_items: req.body.items.map((item: ItemType) => {
                const storeItem = storeItems.get(item.id);
                return {
                    price_data: {
                        currency: "usd",
                        product_data: { name: storeItem?.name },
                        unit_amount: storeItem?.priceInCents,
                    },
                    quantity: item.quantity,
                };
            }),
            success_url: `${config.clientUrl}/success`,
            cancel_url: `${config.clientUrl}/cancel`,
        });

        res.json({ url: session.url });
    } catch (error) {
        res.status(500).json({ error: (error as Error).message });
    }
};
