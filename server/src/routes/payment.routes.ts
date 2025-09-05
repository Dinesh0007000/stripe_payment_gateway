import { Router } from "express";
import { createCheckoutSession } from "../controllers/payment.controller";

const router = Router();

// POST /api/payment/checkout
router.post("/checkout", createCheckoutSession);

export default router;
