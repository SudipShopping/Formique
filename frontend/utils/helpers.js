export function formatPrice(cents) {
  return '$' + (cents / 100).toFixed(2);
}

export function calculateDiscount(total, couponCode) {
  if (couponCode === 'SAVE10') {
    return total * 0.1;
  }
  // Add more coupon logic as needed
  return 0;
}

