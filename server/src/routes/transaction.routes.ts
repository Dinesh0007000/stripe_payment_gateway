import { Router } from "express";
import { getTransactions } from "../controllers/transaction.controller";

const router = Router();

// GET /api/transactions
router.get("/", getTransactions);

export default router;
