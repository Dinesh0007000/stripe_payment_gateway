import mongoose, { Schema, Document } from "mongoose";

export interface ITransaction extends Document {
    stripeId: string;
    amount: number;
    status: string;
    type: "payment" | "refund";
    createdAt: Date;
}

const TransactionSchema: Schema = new Schema(
    {
        stripeId: { type: String, required: true },
        amount: { type: Number, required: true },
        status: { type: String, required: true },
        type: { type: String, enum: ["payment", "refund"], required: true },
    },
    { timestamps: true }
);

export default mongoose.model<ITransaction>("Transaction", TransactionSchema);
