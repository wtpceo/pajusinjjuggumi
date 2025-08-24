'use client';

import { PlayCircle } from 'lucide-react';

export default function VideoSection() {
  const videos = [
    {
      id: 1,
      src: "https://m.naver.com/shorts/?mediaId=3A06EF6674A5D345DC7D0019BA0F3338DF97&serviceType=MOMENT&recType=SEARCH&panelType=vs_place&entryPoint=https%253A%252F%252Fpcmap.place.naver.com%252Frestaurant%252F2019570911%252Fhome%253Fentry%253Dbmp%2526from%253Dmap%2526fromPanelNum%253D2%2526timestamp%253D202508241520%2526locale%253Dko%2526svcName%253Dmap_pcv5%2526searchText%253D%2525ED%25258C%25258C%2525EC%2525A3%2525BC%252520%2525EC%25258B%2525A0%2525EC%2525AD%252588%2525EA%2525BE%2525B8%2525EB%2525AF%2525B8&blogId=foreverepde&docNo=11328428&recId=%7B%22type%22%3A%22PLACE%22%2C%22order%22%3A%22RECENT%22%2C%22query%22%3A%222019570911%22%2C%22seedIndex%22%3A1%7D&enableReverse=true&clickNsc=mapv5.restaurant&clickArea=cpr.clipvideo&oembed=true"
    },
    {
      id: 2,
      src: "https://m.naver.com/shorts/?mediaId=3A06EF6674A5D345DC7D0019BA0F3338DF97&serviceType=MOMENT&recType=SEARCH&panelType=vs_place&entryPoint=https%253A%252F%252Fpcmap.place.naver.com%252Frestaurant%252F2019570911%252Fhome%253Fentry%253Dbmp%2526from%253Dmap%2526fromPanelNum%253D2%2526timestamp%253D202508241520%2526locale%253Dko%2526svcName%253Dmap_pcv5%2526searchText%253D%2525ED%25258C%25258C%2525EC%2525A3%2525BC%252520%2525EC%25258B%2525A0%2525EC%2525AD%252588%2525EA%2525BE%2525B8%2525EB%2525AF%2525B8&blogId=foreverepde&docNo=11328428&recId=%7B%22type%22%3A%22PLACE%22%2C%22order%22%3A%22RECENT%22%2C%22query%22%3A%222019570911%22%2C%22seedIndex%22%3A1%7D&enableReverse=true&clickNsc=mapv5.restaurant&clickArea=cpr.clipvideo&oembed=true"
    },
    {
      id: 3,
      src: "https://m.naver.com/shorts/?mediaId=3A06EF6674A5D345DC7D0019BA0F3338DF97&serviceType=MOMENT&recType=SEARCH&panelType=vs_place&entryPoint=https%253A%252F%252Fpcmap.place.naver.com%252Frestaurant%252F2019570911%252Fhome%253Fentry%253Dbmp%2526from%253Dmap%2526fromPanelNum%253D2%2526timestamp%253D202508241520%2526locale%253Dko%2526svcName%253Dmap_pcv5%2526searchText%253D%2525ED%25258C%25258C%2525EC%2525A3%2525BC%252520%2525EC%25258B%2525A0%2525EC%2525AD%252588%2525EA%2525BE%2525B8%2525EB%2525AF%2525B8&blogId=foreverepde&docNo=11328428&recId=%7B%22type%22%3A%22PLACE%22%2C%22order%22%3A%22RECENT%22%2C%22query%22%3A%222019570911%22%2C%22seedIndex%22%3A1%7D&enableReverse=true&clickNsc=mapv5.restaurant&clickArea=cpr.clipvideo&oembed=true"
    },
    {
      id: 4,
      src: "https://m.naver.com/shorts/?mediaId=3A06EF6674A5D345DC7D0019BA0F3338DF97&serviceType=MOMENT&recType=SEARCH&panelType=vs_place&entryPoint=https%253A%252F%252Fpcmap.place.naver.com%252Frestaurant%252F2019570911%252Fhome%253Fentry%253Dbmp%2526from%253Dmap%2526fromPanelNum%253D2%2526timestamp%253D202508241520%2526locale%253Dko%2526svcName%253Dmap_pcv5%2526searchText%253D%2525ED%25258C%25258C%2525EC%2525A3%2525BC%252520%2525EC%25258B%2525A0%2525EC%2525AD%252588%2525EA%2525BE%2525B8%2525EB%2525AF%2525B8&blogId=foreverepde&docNo=11328428&recId=%7B%22type%22%3A%22PLACE%22%2C%22order%22%3A%22RECENT%22%2C%22query%22%3A%222019570911%22%2C%22seedIndex%22%3A1%7D&enableReverse=true&clickNsc=mapv5.restaurant&clickArea=cpr.clipvideo&oembed=true"
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-7xl mx-auto">
          {videos.map((video, index) => (
            <div 
              key={video.id}
              className="relative group animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                {/* 비디오 아이콘 오버레이 */}
                <div className="absolute top-4 left-4 z-10">
                  <PlayCircle className="text-white drop-shadow-lg" size={32} />
                </div>
                
                {/* 네이버 클립 임베드 */}
                <div className="relative" style={{ paddingBottom: '177.8%' }}> {/* 9:16 비율 */}
                  <iframe 
                    src={video.src}
                    className="absolute inset-0 w-full h-full"
                    frameBorder="0" 
                    allow="autoplay; clipboard-write; web-share" 
                    allowFullScreen
                    title={`신쭈꾸미 파주점 영상 ${video.id}`}
                    loading="lazy"
                  />
                </div>
                
                {/* 호버 효과 */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
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