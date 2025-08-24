'use client';

import { useState } from 'react';
import { PlayCircle, X } from 'lucide-react';

export default function VideoSection() {
  const [selectedVideo, setSelectedVideo] = useState<{ title: string; link: string } | null>(null);
  
  const videos = [
    {
      id: 1,
      title: "신쭈꾸미 파주점 영상 1",
      link: "https://naver.me/GMPmqjOb",
      thumbnail: "매콤한 쭈꾸미 볶음",
      description: "불맛 가득한 쭈꾸미"
    },
    {
      id: 2,
      title: "신쭈꾸미 파주점 영상 2",
      link: "https://naver.me/GwSpD7S1",
      thumbnail: "신선한 재료 준비",
      description: "매일 신선하게 준비"
    },
    {
      id: 3,
      title: "신쭈꾸미 파주점 영상 3", 
      link: "https://naver.me/GA8L1IuN",
      thumbnail: "다양한 사이드 메뉴",
      description: "풍성한 한 상"
    },
    {
      id: 4,
      title: "신쭈꾸미 파주점 영상 4",
      link: "https://naver.me/5CFWbsqa",
      thumbnail: "매장 분위기",
      description: "편안한 공간"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* 섹션 헤더 */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 animate-fade-in-up">
            매장 <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">영상으로 보기</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 animate-fade-in-up animation-delay-200">
            신쭈꾸미 파주점의 생생한 현장을 영상으로 만나보세요
          </p>
        </div>

        {/* 비디오 그리드 */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-7xl mx-auto">
          {videos.map((video, index) => (
            <div
              key={video.id}
              className="relative group animate-fade-in-up cursor-pointer"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                {/* 썸네일 플레이스홀더 */}
                <div className="relative aspect-[9/16] bg-gradient-to-br from-red-500 to-orange-500 flex flex-col items-center justify-center p-6">
                  {/* 비디오 아이콘 */}
                  <PlayCircle className="text-white drop-shadow-lg mb-4" size={64} />
                  
                  {/* 썸네일 텍스트 */}
                  <h3 className="text-white text-lg font-bold text-center mb-2">{video.thumbnail}</h3>
                  <p className="text-white/80 text-sm text-center">{video.description}</p>
                  
                  {/* 비디오 제목 */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                    <p className="text-white text-sm font-semibold">{video.title}</p>
                    <a 
                      href={video.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/70 text-xs mt-1 hover:text-white underline"
                    >
                      네이버에서 보기 →
                    </a>
                  </div>
                </div>
                
                {/* 호버 효과 */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          ))}
        </div>

        {/* 추가 정보 */}
        <div className="text-center mt-12">
          <p className="text-gray-600">
            더 많은 영상과 리뷰는 
            <a 
              href="https://map.naver.com/p/search/신쭈꾸미%20파주점" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-red-600 hover:text-red-700 font-semibold mx-1 underline"
            >
              네이버 플레이스
            </a>
            에서 확인하세요!
          </p>
        </div>
      </div>
    </section>
  );
}