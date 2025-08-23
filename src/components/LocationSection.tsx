'use client';

import { MapPin, Phone, Clock, Car } from 'lucide-react';

export default function LocationSection() {
  return (
    <section id="location" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">오시는 길</h2>
          <p className="text-lg text-gray-600">신쭈꾸미 파주점으로 오시는 길을 안내해드립니다</p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-semibold mb-6 text-gray-900">매장 정보</h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="text-red-600 mt-1" size={20} />
                  <div>
                    <p className="font-semibold text-gray-900">주소</p>
                    <p className="text-gray-600">경기 파주시 신촌동 60-1</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Phone className="text-red-600 mt-1" size={20} />
                  <div>
                    <p className="font-semibold text-gray-900">전화번호</p>
                    <a href="tel:0507-1443-1858" className="text-red-600 hover:text-red-700">
                      0507-1443-1858
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Clock className="text-red-600 mt-1" size={20} />
                  <div>
                    <p className="font-semibold text-gray-900">영업시간</p>
                    <p className="text-gray-600">매일 11:00 - 22:00</p>
                    <p className="text-sm text-gray-500">라스트오더 21:30</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Car className="text-red-600 mt-1" size={20} />
                  <div>
                    <p className="font-semibold text-gray-900">주차</p>
                    <p className="text-gray-600">매장 전용 주차장 이용 가능</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 pt-6 border-t border-gray-200">
                <p className="text-sm text-gray-600">
                  <span className="font-semibold">예약 안내:</span> 전화 예약을 통해 대기 시간을 줄이실 수 있습니다.
                </p>
              </div>
            </div>
            
            <div className="bg-gray-300 rounded-lg shadow-lg h-[400px] flex items-center justify-center">
              <div className="text-center">
                <MapPin size={48} className="text-gray-500 mx-auto mb-4" />
                <p className="text-gray-600">지도 API 연동 예정</p>
                <p className="text-sm text-gray-500 mt-2">네이버 또는 카카오맵 연동</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}