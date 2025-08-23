'use client';

import { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

interface Review {
  id: number;
  author: string;
  rating: number;
  date: string;
  content: string;
  menu?: string;
}

const reviewData: Review[] = [
  {
    id: 1,
    author: "김민수",
    rating: 5,
    date: "2024년 1월",
    content: "쭈꾸미가 정말 신선하고 양념이 적당히 매콤해서 계속 당기는 맛이에요. 아이들은 돈까스 먹고 어른들은 쭈꾸미 먹으니 온 가족이 만족했습니다!",
    menu: "쭈꾸미철판, 왕돈까스"
  },
  {
    id: 2,
    author: "이서연",
    rating: 5,
    date: "2024년 1월",
    content: "파주에서 이런 맛집을 찾다니! 쭈꾸미도 맛있지만 같이 나오는 달걀찜이 진짜 예술이에요. 재방문 의사 100%입니다.",
    menu: "쭈꾸미볶음 정식"
  },
  {
    id: 3,
    author: "박준혁",
    rating: 5,
    date: "2023년 12월",
    content: "회사 회식으로 갔는데 다들 만족했어요. 매운거 못 먹는 동료도 냉면이랑 돈까스 있어서 좋았고, 쭈꾸미 양도 푸짐해서 배부르게 먹었습니다.",
    menu: "직화쭈꾸미 삼겹(대)"
  },
  {
    id: 4,
    author: "최유진",
    rating: 5,
    date: "2023년 12월",
    content: "맵지만 계속 먹게 되는 중독성 있는 맛! 볶음밥까지 먹으면 정말 꿀맛이에요. 사장님도 친절하시고 가게도 깔끔해요.",
    menu: "쭈꾸미볶음밥"
  },
  {
    id: 5,
    author: "정하은",
    rating: 5,
    date: "2023년 11월",
    content: "부모님 모시고 갔는데 너무 좋아하셨어요. 어르신들이 드시기에도 부담없는 매운맛이고, 반찬들도 정갈하니 맛있었습니다.",
    menu: "꼬막비빔밥 정식"
  },
  {
    id: 6,
    author: "강동우",
    rating: 5,
    date: "2023년 11월",
    content: "쭈꾸미 전문점 많이 다녀봤는데 여기가 제일 맛있어요. 불맛도 나고 양념도 자극적이지 않고 딱 좋아요. 단골 예정!",
    menu: "쭈꾸미철판"
  }
];

export default function ReviewSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // 자동 슬라이드
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviewData.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const handlePrev = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + reviewData.length) % reviewData.length);
  };

  const handleNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % reviewData.length);
  };

  const StarRating = ({ rating }: { rating: number }) => {
    return (
      <div className="flex items-center space-x-1">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={18}
            className={i < rating ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'}
          />
        ))}
        <span className="ml-2 text-sm font-semibold text-gray-700">{rating}.0</span>
      </div>
    );
  };

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* 배경 장식 */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-red-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-500 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 md:mb-16 px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 animate-fade-in-up">
            파주에서 <span className="bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">진짜 맛집</span>을 찾고 계신가요?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 animate-fade-in-up animation-delay-200">
            실제 고객님들이 남겨주신 생생한 후기를 확인해보세요
          </p>
        </div>

        {/* 리뷰 슬라이더 */}
        <div className="max-w-5xl mx-auto relative">
          <div className="overflow-hidden rounded-3xl">
            <div 
              className="flex transition-all duration-700 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {reviewData.map((review) => (
                <div key={review.id} className="w-full flex-shrink-0 px-4">
                  <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl p-8 md:p-12 relative border border-gray-100 hover:shadow-3xl transition-shadow duration-300">
                    <Quote className="absolute top-8 left-8 text-red-100/50" size={50} />
                    
                    <div className="relative z-10">
                      <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                        <div className="mb-4 md:mb-0">
                          <h3 className="font-bold text-xl text-gray-900">{review.author}</h3>
                          <p className="text-sm text-gray-500 mt-1">{review.date}</p>
                        </div>
                        <div className="flex items-center space-x-2">
                          <StarRating rating={review.rating} />
                        </div>
                      </div>
                      
                      {review.menu && (
                        <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-red-50 to-orange-50 rounded-full mb-4">
                          <svg className="w-4 h-4 mr-2 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                          </svg>
                          <p className="text-sm text-red-700 font-semibold">
                            {review.menu}
                          </p>
                        </div>
                      )}
                      
                      <p className="text-gray-700 leading-relaxed text-lg md:text-xl">
                        &ldquo;{review.content}&rdquo;
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 네비게이션 버튼 */}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-16 bg-white/90 backdrop-blur-sm rounded-full p-3 md:p-4 shadow-xl hover:shadow-2xl hover:scale-110 transition-all duration-300 group"
            aria-label="이전 리뷰"
          >
            <ChevronLeft size={24} className="text-gray-700 group-hover:text-red-600 transition-colors" />
          </button>
          
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-16 bg-white/90 backdrop-blur-sm rounded-full p-3 md:p-4 shadow-xl hover:shadow-2xl hover:scale-110 transition-all duration-300 group"
            aria-label="다음 리뷰"
          >
            <ChevronRight size={24} className="text-gray-700 group-hover:text-red-600 transition-colors" />
          </button>

          {/* 인디케이터 */}
          <div className="flex justify-center space-x-3 mt-8">
            {reviewData.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentIndex(index);
                  setIsAutoPlaying(false);
                }}
                className={`transition-all duration-300 ${
                  index === currentIndex 
                    ? 'w-12 h-3 bg-gradient-to-r from-red-500 to-red-600 shadow-lg' 
                    : 'w-3 h-3 bg-gray-300 hover:bg-gray-400 hover:scale-125'
                } rounded-full`}
                aria-label={`리뷰 ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* 리뷰 플랫폼 안내 */}
        <div className="text-center mt-16 animate-fade-in-up animation-delay-600">
          <p className="text-gray-600 mb-6 text-lg">
            더 많은 리뷰를 확인하고 싶으신가요?
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="group px-8 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-full shadow-lg hover:shadow-2xl transform transition-all duration-300 hover:scale-105">
              <span className="flex items-center justify-center">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
                네이버 플레이스
              </span>
            </button>
            <button className="group px-8 py-3 bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 rounded-full shadow-lg hover:shadow-2xl transform transition-all duration-300 hover:scale-105">
              <span className="flex items-center justify-center font-semibold">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
                </svg>
                카카오맵
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}