export function formatPrice(price) {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(price);
}

export function calcDiscount(original, current) {
  if (!original || original <= current) return 0;
  return Math.round(((original - current) / original) * 100);
}

export function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}

export function slugify(str) {
  return str.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '');
}

export function truncate(str, n) {
  return str.length > n ? str.slice(0, n) + '…' : str;
}
