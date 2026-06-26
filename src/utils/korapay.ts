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
