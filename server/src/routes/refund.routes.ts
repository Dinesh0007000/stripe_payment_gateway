import { Router } from "express";
import { createRefund } from "../controllers/refund.controller";

const router = Router();

// POST /api/refund
router.post("/", createRefund);

export default router;
