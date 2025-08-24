'use client';

import { useState, useEffect } from 'react';
import { MapPin } from 'lucide-react';
import Image from 'next/image';

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // 최적화된 WebP 이미지 사용
  const images = [
    '/images/hero/hero-1-optimized.webp',
    '/images/hero/hero-2-optimized.webp',
    '/images/hero/hero-3-optimized.webp',
  ];
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // 5초마다 이미지 변경
    
    return () => clearInterval(interval);
  }, [images.length]);
  
  return (
    <section className="relative min-h-[500px] md:min-h-[700px] flex items-center justify-center mt-14 md:mt-16 overflow-hidden">
      {/* 배경 이미지 슬라이더 */}
      <div className="absolute inset-0">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1500 ease-in-out ${
              index === currentImageIndex 
                ? 'opacity-100 scale-100' 
                : 'opacity-0 scale-110'
            }`}
          >
            <Image
              src={image}
              alt={`신쭈꾸미 이미지 ${index + 1}`}
              fill
              className="object-cover"
              priority={index === 0}
            />
          </div>
        ))}
        {/* 그라데이션 오버레이 */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60"></div>
      </div>
      
      {/* 콘텐츠 */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-4 md:mb-6 animate-fade-in-up">
            <span className="bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
              신쭈꾸미
            </span>{' '}
            <span className="drop-shadow-2xl">파주점</span>
          </h1>
          
          <p className="text-lg sm:text-xl md:text-3xl text-white/95 mb-8 md:mb-10 drop-shadow-lg animate-fade-in-up animation-delay-200 px-4 md:px-0">
            신선한 쭈꾸미와 정성으로 만드는 특별한 맛
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10 animate-fade-in-up animation-delay-400">
            <a 
              href="https://booking.naver.com/booking/6/bizes/1469898" 
              className="group relative inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-red-600 to-red-700 text-white font-semibold rounded-full shadow-xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl overflow-hidden text-sm sm:text-base"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-red-700 to-red-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <svg className="w-5 h-5 mr-2 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span className="relative z-10">예약하기</span>
            </a>
            
            <a 
              href="#menu" 
              className="group relative inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-white/95 backdrop-blur-sm text-red-600 font-semibold rounded-full shadow-xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl border-2 border-white/50 text-sm sm:text-base"
            >
              <span className="absolute inset-0 w-full h-full bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></span>
              <span className="relative z-10">메뉴 보기</span>
            </a>
          </div>
          
          <div className="inline-flex items-center text-white bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/20 animate-fade-in-up animation-delay-600">
            <MapPin size={20} className="mr-2 animate-pulse" />
            <span>경기 파주시 신촌동 60-1</span>
          </div>
        </div>
      </div>
      
      {/* 이미지 인디케이터 */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentImageIndex 
                ? 'bg-white w-8' 
                : 'bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`이미지 ${index + 1}로 이동`}
          />
        ))}
      </div>
      
      {/* 웨이브 효과 */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg className="w-full h-24 text-white" preserveAspectRatio="none" viewBox="0 0 1440 100">
          <path fill="currentColor" d="M0,50 C360,100 1080,0 1440,50 L1440,100 L0,100 Z"></path>
        </svg>
      </div>
    </section>
  );
}