import { Response } from "express";

export const successResponse = (res: Response, data: any, message = "Success") => {
    return res.status(200).json({ success: true, message, data });
};

export const errorResponse = (res: Response, error: string, status = 500) => {
    return res.status(status).json({ success: false, error });
};
