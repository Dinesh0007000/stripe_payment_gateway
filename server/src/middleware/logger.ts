import { Request, Response, NextFunction } from "express";

// Simple request logger
export const logger = (req: Request, res: Response, next: NextFunction) => {
    const now = new Date().toISOString();
    console.log(`[${now}] ${req.method} ${req.originalUrl}`);
    next();
};
