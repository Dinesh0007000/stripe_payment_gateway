import { FC } from "react";
import { createCheckoutSession } from "../services/checkout";
import { items } from "../data/items";
import style from "./Checkout.module.scss";

const Checkout: FC = () => {
    const handleCheckout = async () => {
        try {
            const url = await createCheckoutSession(items);
            console.log("url:", url);

            window.location.href = url;
        } catch (error) {
            console.error("Error during checkout:", (error as Error).message);
        }
    };

    return (
        <div className={style["checkout"]}>
            <button onClick={handleCheckout}>Checkout</button>
        </div>
    );
};

export default Checkout;