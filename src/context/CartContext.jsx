'use client';
import { createContext, useContext, useState, useCallback } from 'react';

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [items, setItems]   = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const openCart  = () => setIsOpen(true);
  const closeCart = () => setIsOpen(false);

  const addItem = useCallback((product, qty = 1) => {
    setItems((prev) => {
      const existing = prev.find((i) => i.id === product.id && i.variant === product.variant);
      if (existing) {
        return prev.map((i) =>
          i.id === product.id && i.variant === product.variant
            ? { ...i, qty: i.qty + qty }
            : i
        );
      }
      return [...prev, { ...product, qty }];
    });
    setIsOpen(true);
  }, []);

  const removeItem = useCallback((id) => {
    setItems((prev) => prev.filter((i) => i.id !== id));
  }, []);

  const updateQty = useCallback((id, qty) => {
    if (qty < 1) { removeItem(id); return; }
    setItems((prev) => prev.map((i) => (i.id === id ? { ...i, qty } : i)));
  }, [removeItem]);

  const clearCart = useCallback(() => setItems([]), []);

  const subtotal   = items.reduce((s, i) => s + i.price * i.qty, 0);
  const totalItems = items.reduce((s, i) => s + i.qty, 0);

  return (
    <CartContext.Provider value={{ items, isOpen, openCart, closeCart, addItem, removeItem, updateQty, clearCart, subtotal, totalItems }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCartContext() { return useContext(CartContext); }
