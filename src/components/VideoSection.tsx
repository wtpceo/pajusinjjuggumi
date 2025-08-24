'use client';

import { PlayCircle } from 'lucide-react';

export default function VideoSection() {
  const videos = [
    {
      id: 1,
      title: "신쭈꾸미 파주점 영상 1",
      link: "https://naver.me/GMPmqjOb"
    },
    {
      id: 2,
      title: "신쭈꾸미 파주점 영상 2",
      link: "https://naver.me/GwSpD7S1"
    },
    {
      id: 3,
      title: "신쭈꾸미 파주점 영상 3", 
      link: "https://naver.me/GA8L1IuN"
    },
    {
      id: 4,
      title: "신쭈꾸미 파주점 영상 4",
      link: "https://naver.me/5CFWbsqa"
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
            <a
              key={video.id}
              href={video.link}
              target="_blank"
              rel="noopener noreferrer"
              className="relative group animate-fade-in-up block"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                {/* 썸네일 플레이스홀더 */}
                <div className="relative aspect-[9/16] bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center">
                  {/* 비디오 아이콘 */}
                  <PlayCircle className="text-white drop-shadow-lg" size={64} />
                  
                  {/* 비디오 제목 */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                    <p className="text-white text-sm font-semibold">{video.title}</p>
                    <p className="text-white/70 text-xs mt-1">클릭하여 시청하기</p>
                  </div>
                </div>
                
                {/* 호버 효과 */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </a>
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