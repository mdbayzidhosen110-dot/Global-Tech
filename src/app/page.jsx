import HeroBanner       from '@/components/home/HeroBanner';
import CategoryGrid     from '@/components/home/CategoryGrid';
import FlashDeals       from '@/components/home/FlashDeals';
import FeaturedProducts from '@/components/home/FeaturedProducts';
import BrandLogos       from '@/components/home/BrandLogos';
import Newsletter       from '@/components/home/Newsletter';

export default function HomePage() {
  return (
    <>
      <HeroBanner />
      <CategoryGrid />
      <FlashDeals />
      <FeaturedProducts />
      <BrandLogos />
      <Newsletter />
    </>
  );
}
