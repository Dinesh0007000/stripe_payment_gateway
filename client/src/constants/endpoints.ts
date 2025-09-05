// Point frontend to the correct backend endpoint
const BASE_URL = import.meta.env.VITE_BASE_URL || "http://localhost:5000/api/payment";
const CREATE_CHECKOUT_SESSION = "/checkout";  // match backend route

export { BASE_URL, CREATE_CHECKOUT_SESSION };
