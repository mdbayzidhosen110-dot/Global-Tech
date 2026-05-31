'use client';
import { createContext, useContext, useState, useCallback } from 'react';

const CURRENCIES = [
  { code: 'USD', symbol: '$',  flag: '🇺🇸', rate: 1 },
  { code: 'GBP', symbol: '£',  flag: '🇬🇧', rate: 0.79 },
  { code: 'EUR', symbol: '€',  flag: '🇪🇺', rate: 0.92 },
  { code: 'BDT', symbol: '৳',  flag: '🇧🇩', rate: 110.5 },
];

const CurrencyContext = createContext(null);

export function CurrencyProvider({ children }) {
  const [selected, setSelected] = useState(CURRENCIES[0]);

  const setCurrency = useCallback((code) => {
    const found = CURRENCIES.find(c => c.code === code);
    if (found) setSelected(found);
  }, []);

  const format = useCallback((usdPrice) => {
    const converted = usdPrice * selected.rate;
    return `${selected.symbol}${converted.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  }, [selected]);

  return (
    <CurrencyContext.Provider value={{ currency: selected, currencies: CURRENCIES, setCurrency, format }}>
      {children}
    </CurrencyContext.Provider>
  );
}

export function useCurrency() { return useContext(CurrencyContext); }
