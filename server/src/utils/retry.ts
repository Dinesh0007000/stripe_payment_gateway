// Simple retry utility for Stripe API calls or DB queries
export async function retry<T>(
    fn: () => Promise<T>,
    retries = 3,
    delay = 1000
): Promise<T> {
    try {
        return await fn();
    } catch (err) {
        if (retries === 0) throw err;
        console.warn(`Retrying... attempts left: ${retries}`);
        await new Promise((r) => setTimeout(r, delay));
        return retry(fn, retries - 1, delay);
    }
}
