/**
 * Korapay Payment Integration Utility
 *
 * This utility handles interaction with the Korapay API and
 * provides methods for generating payment links.
 */

const KORAPAY_PUBLIC_KEY = process.env.NEXT_PUBLIC_KORAPAY_PUBLIC_KEY;
const KORAPAY_SECRET_KEY = process.env.KORAPAY_SECRET_KEY;
const KORAPAY_CHECKOUT_URL = "https://checkout.korapay.com/pay/jz9dTrCxCRGCyRv";

interface KorapayCheckoutOptions {
  amount: number;
  currency: "NGN" | "USD";
  customerEmail: string;
  customerName: string;
  reference: string;
  callbackUrl: string;
}

export const korapay = {
  /**
   * For simplicity in this demo, we use the provided static checkout link.
   * In a production app, we would use the Korapay API to initialize a transaction
   * and get a dynamic checkout URL.
   */
  getCheckoutUrl: (options: KorapayCheckoutOptions) => {
    // In a real scenario, we would POST to Korapay API and return the dynamic link
    // Here we return the static link provided in the requirements
    return KORAPAY_CHECKOUT_URL;
  },

  verifyTransaction: async (reference: string) => {
    try {
      const response = await fetch(`https://api.korapay.com/merchant/api/v1/charges/${reference}`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${KORAPAY_SECRET_KEY}`,
          "Content-Type": "application/json",
        },
      });
      return await response.json();
    } catch (error) {
      console.error("Korapay verification error:", error);
      return null;
    }
  }
};
