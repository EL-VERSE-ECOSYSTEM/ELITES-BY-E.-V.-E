/**
 * Korapay Payment Integration Utility
 *
 * This utility handles interaction with the Korapay API and
 * provides methods for generating payment links.
 */

const KORAPAY_SECRET_KEY = process.env.KORAPAY_SECRET_KEY;
const KORAPAY_CHECKOUT_URL = "https://checkout.korapay.com/pay/jz9dTrCxCRGCyRv";

export const korapay = {
  /**
   * For simplicity in this demo, we use the provided static checkout link.
   * In a production app, we would use the Korapay API to initialize a transaction
   * and get a dynamic checkout URL.
   */
  getCheckoutUrl: () => {
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
    } catch {
      return null;
    }
  }
};
