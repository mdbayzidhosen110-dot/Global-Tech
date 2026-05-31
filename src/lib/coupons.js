// lib/coupons.js
// ─────────────────────────────────────────────────────────────────────────────
// Coupon definitions for GlobalTech checkout
// type: 'percent' | 'fixed' | 'shipping'
// value: discount value (percent or fixed dollar amount; ignored for 'shipping')
// minOrder: minimum subtotal required to apply
// label: human-readable description shown in the UI
// ─────────────────────────────────────────────────────────────────────────────

export const COUPONS = {
  SAVE10:   { type: 'percent',  value: 10,  minOrder: 0,   label: '10% off your order' },
  TECH50:   { type: 'fixed',    value: 50,  minOrder: 500, label: '$50 off orders over $500' },
  FREESHIP: { type: 'shipping', value: 0,   minOrder: 99,  label: 'Free shipping on this order' },
  WELCOME20: { type: 'percent', value: 20,  minOrder: 0,   label: '20% off — welcome gift' },
  GT100:    { type: 'fixed',    value: 100, minOrder: 999, label: '$100 off orders over $999' },
};

/**
 * Validate a coupon code against the current subtotal.
 * Returns { valid, coupon, code, error } 
 */
export function validateCoupon(rawCode, subtotal) {
  const code = rawCode.trim().toUpperCase();
  const coupon = COUPONS[code];
  if (!coupon) {
    return { valid: false, error: 'Invalid promo code. Please check and try again.' };
  }
  if (subtotal < coupon.minOrder) {
    return {
      valid: false,
      error: `This code requires a minimum order of $${coupon.minOrder.toFixed(2)}.`,
    };
  }
  return { valid: true, coupon, code };
}

/**
 * Calculate the discount amount given a coupon and order totals.
 * Returns dollar amount to deduct (0 for shipping-only coupons).
 */
export function calcDiscount(coupon, subtotal) {
  if (!coupon) return 0;
  if (coupon.type === 'percent')  return subtotal * (coupon.value / 100);
  if (coupon.type === 'fixed')    return Math.min(coupon.value, subtotal);
  if (coupon.type === 'shipping') return 0; // shipping savings handled separately
  return 0;
}

/**
 * Returns true if the coupon waives shipping.
 */
export function couponFreesShipping(coupon) {
  return coupon?.type === 'shipping';
}
