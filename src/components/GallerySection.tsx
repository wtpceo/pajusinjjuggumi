'use client';

import { useState } from 'react';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  category: string;
}

// 갤러리 이미지 데이터
// 실제 이미지가 준비되면 주석을 해제하고 사용하세요
const galleryImages: GalleryImage[] = [
  // 실제 이미지 경로 (이미지 준비 후 주석 해제)
  // { id: 1, src: '/images/gallery/gallery-1.jpg', alt: '신선한 쭈꾸미', category: '메인요리' },
  // { id: 2, src: '/images/gallery/gallery-2.jpg', alt: '매장 내부', category: '매장' },
  // { id: 3, src: '/images/gallery/gallery-3.jpg', alt: '쭈꾸미 철판', category: '메인요리' },
  // { id: 4, src: '/images/gallery/gallery-4.jpg', alt: '왕돈까스', category: '사이드' },
  // { id: 5, src: '/images/gallery/gallery-5.jpg', alt: '화덕피자', category: '사이드' },
  // { id: 6, src: '/images/gallery/gallery-6.jpg', alt: '정식 세트', category: '정식' },
  // { id: 7, src: '/images/gallery/gallery-7.jpg', alt: '달걀찜', category: '사이드' },
  // { id: 8, src: '/images/gallery/gallery-8.jpg', alt: '냉면', category: '사이드' },
  // { id: 9, src: '/images/gallery/gallery-9.jpg', alt: '볶음밥', category: '메인요리' },
  // { id: 10, src: '/images/gallery/gallery-10.jpg', alt: '매장 전경', category: '매장' },
  
  // 개발용 목업 이미지
  { id: 1, src: 'https://images.unsplash.com/photo-1583835746434-cf1534674b41?w=800&h=800&fit=crop', alt: '신선한 쭈꾸미', category: '메인요리' },
  { id: 2, src: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=800&fit=crop', alt: '매장 내부', category: '매장' },
  { id: 3, src: 'https://images.unsplash.com/photo-1590301157890-4810ed352733?w=800&h=800&fit=crop', alt: '쭈꾸미 철판', category: '메인요리' },
  { id: 4, src: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&h=800&fit=crop', alt: '왕돈까스', category: '사이드' },
  { id: 5, src: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&h=800&fit=crop', alt: '화덕피자', category: '사이드' },
  { id: 6, src: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&h=800&fit=crop', alt: '정식 세트', category: '정식' },
  { id: 7, src: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&h=800&fit=crop', alt: '달걀찜', category: '사이드' },
  { id: 8, src: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=800&h=800&fit=crop', alt: '냉면', category: '사이드' },
  { id: 9, src: 'https://images.unsplash.com/photo-1559058789-672da06263d8?w=800&h=800&fit=crop', alt: '볶음밥', category: '메인요리' },
  { id: 10, src: 'https://images.unsplash.com/photo-1537047902294-62a40c20a6ae?w=800&h=800&fit=crop', alt: '매장 전경', category: '매장' },
];

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('전체');
  
  const categories = ['전체', ...Array.from(new Set(galleryImages.map(img => img.category)))];
  
  const filteredImages = selectedCategory === '전체' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);
  
  const openLightbox = (image: GalleryImage) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  };
  
  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };
  
  const navigateImage = (direction: 'prev' | 'next') => {
    if (!selectedImage) return;
    
    const currentIndex = galleryImages.findIndex(img => img.id === selectedImage.id);
    let newIndex;
    
    if (direction === 'prev') {
      newIndex = currentIndex > 0 ? currentIndex - 1 : galleryImages.length - 1;
    } else {
      newIndex = currentIndex < galleryImages.length - 1 ? currentIndex + 1 : 0;
    }
    
    setSelectedImage(galleryImages[newIndex]);
  };
  
  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        {/* 섹션 헤더 */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 animate-fade-in-up">
            매장 <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">갤러리</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 animate-fade-in-up animation-delay-200">
            신쭈꾸미 파주점의 특별한 순간들을 만나보세요
          </p>
        </div>
        
        {/* 카테고리 필터 */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category, index) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-red-500 to-red-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-50 shadow-md hover:shadow-lg'
              }`}
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {category}
            </button>
          ))}
        </div>
        
        {/* 갤러리 그리드 - 모바일 최적화 */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 sm:gap-3 md:gap-4 max-w-7xl mx-auto">
          {filteredImages.map((image, index) => (
            <div
              key={image.id}
              className="group relative aspect-square overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
              onClick={() => openLightbox(image)}
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="relative w-full h-full bg-gray-200">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                />
                {/* 오버레이 */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <p className="text-sm font-semibold">{image.alt}</p>
                    <p className="text-xs opacity-80">{image.category}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* 인스타그램 연동 안내 */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-4">
            더 많은 사진과 소식을 보고 싶으신가요?
          </p>
          <button className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full shadow-lg hover:shadow-2xl transform transition-all duration-300 hover:scale-105">
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.405a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z"/>
            </svg>
            Instagram 팔로우
          </button>
        </div>
      </div>
      
      {/* 라이트박스 */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
            onClick={closeLightbox}
          >
            <X size={32} />
          </button>
          
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              navigateImage('prev');
            }}
          >
            <ChevronLeft size={40} />
          </button>
          
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              navigateImage('next');
            }}
          >
            <ChevronRight size={40} />
          </button>
          
          <div 
            className="relative max-w-5xl max-h-[90vh] w-full h-full"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedImage.src}
              alt={selectedImage.alt}
              fill
              className="object-contain"
              sizes="100vw"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6 text-white">
              <h3 className="text-xl font-semibold">{selectedImage.alt}</h3>
              <p className="text-sm opacity-80">{selectedImage.category}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}