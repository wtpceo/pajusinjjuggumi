import Header from '@/components/Header';
import Hero from '@/components/Hero';
import BrandStory from '@/components/BrandStory';
import ReviewSection from '@/components/ReviewSection';
import GallerySection from '@/components/GallerySection';
import MenuSection from '@/components/MenuSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <BrandStory />
        <ReviewSection />
        <GallerySection />
        <MenuSection />
      </main>
      <Footer />
    </>
  );
}
