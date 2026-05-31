'use client';

import { usePathname } from 'next/navigation';
import Navbar      from '@/components/layout/Navbar';
import Footer      from '@/components/layout/Footer';
import CartSidebar from '@/components/layout/CartSidebar';
import PromoPopup  from '@/components/ui/PromoPopup';

export default function StoreShell({ children }) {
  const pathname = usePathname();
  const isAdmin  = pathname?.startsWith('/admin');

  return (
    <>
      {!isAdmin && <Navbar />}
      {!isAdmin && <CartSidebar />}
      {!isAdmin && <PromoPopup />}
      <main className="min-h-screen">{children}</main>
      {!isAdmin && <Footer />}
    </>
  );
}
