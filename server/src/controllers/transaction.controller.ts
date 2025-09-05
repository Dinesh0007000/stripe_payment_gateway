import { Request, Response } from "express";

export const getTransactions = async (req: Request, res: Response) => {
    try {
        // Later connect this to MongoDB
        const mockTransactions = [
            { id: "txn_123", amount: 5000, status: "succeeded", type: "payment" },
            { id: "txn_124", amount: 5000, status: "succeeded", type: "refund" },
        ];
        res.json(mockTransactions);
    } catch (error) {
        res.status(500).json({ error: (error as Error).message });
    }
};
