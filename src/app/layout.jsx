import './globals.css';
import { CartProvider }     from '@/context/CartContext';
import { AuthProvider }     from '@/context/AuthContext';
import { ToastProvider }    from '@/context/ToastContext';
import { CurrencyProvider }  from '@/context/CurrencyContext';
import { WishlistProvider }  from '@/context/WishlistContext';
import ToastContainer       from '@/components/ui/Toast';
import StoreShell           from '@/components/layout/StoreShell';

export const metadata = {
  title:       { default: 'GlobalTech — Your Tech Superstore', template: '%s | GlobalTech' },
  description: 'Shop the latest phones, laptops, TVs, audio, gaming, appliances, cameras, and smart home devices.',
  keywords:    ['electronics', 'tech', 'phones', 'laptops', 'TVs', 'gaming', 'cameras'],
  openGraph: {
    type:        'website',
    locale:      'en_US',
    url:         'https://globaltech.store',
    siteName:    'GlobalTech',
    title:       'GlobalTech — Your Tech Superstore',
    description: 'Shop the latest electronics at unbeatable prices.',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <CurrencyProvider>
            <WishlistProvider>
              <CartProvider>
                <ToastProvider>
                  <ToastContainer />
                  <StoreShell>{children}</StoreShell>
                </ToastProvider>
              </CartProvider>
            </WishlistProvider>
          </CurrencyProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
