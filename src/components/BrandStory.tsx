'use client';

import { Users, Award, Clock } from 'lucide-react';
import Image from 'next/image';

export default function BrandStory() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* 메인 스토리 */}
        <div className="max-w-4xl mx-auto text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 md:mb-6 px-4">
            온 가족이 <span className="text-red-600">함께 즐기는</span> 착한 매운맛
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed mb-8 px-4">
            할머니부터 아이들까지, 매운 걸 못 먹는 분부터 매운맛 마니아까지
            <br />
            모두가 만족할 수 있는 <strong>특별한 비법</strong>으로 준비했습니다.
          </p>
          <div className="w-24 h-1 bg-red-600 mx-auto mb-8"></div>
        </div>

        {/* 3단 특징 카드 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          <div className="text-center group transform transition-all duration-300 hover:-translate-y-2">
            <div className="relative w-36 h-36 mx-auto mb-6 overflow-hidden rounded-2xl shadow-xl group-hover:shadow-2xl transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-transparent z-10 group-hover:opacity-0 transition-opacity duration-300"></div>
              <Image
                src="/images/brand/spicy.webp"  // 착한 매운맛 이미지
                alt="착한 매운맛"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">착한 매운맛</h3>
            <p className="text-gray-600 leading-relaxed">
              부담 없이 즐기는 중독성 있는 매운맛<br />
              먹을수록 당기는 신쭈꾸미만의 특제 양념
            </p>
          </div>

          <div className="text-center group transform transition-all duration-300 hover:-translate-y-2">
            <div className="relative w-36 h-36 mx-auto mb-6 overflow-hidden rounded-2xl shadow-xl group-hover:shadow-2xl transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-transparent z-10 group-hover:opacity-0 transition-opacity duration-300"></div>
              <Image
                src="/images/brand/variety.webp"  // 다양한 메뉴 이미지
                alt="다양한 메뉴"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">다양한 메뉴</h3>
            <p className="text-gray-600 leading-relaxed">
              화덕피자부터 바삭한 왕돈까스까지<br />
              온 가족 취향 저격하는 풍성한 메뉴 구성
            </p>
          </div>

          <div className="text-center group transform transition-all duration-300 hover:-translate-y-2">
            <div className="relative w-36 h-36 mx-auto mb-6 overflow-hidden rounded-2xl shadow-xl group-hover:shadow-2xl transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-transparent z-10 group-hover:opacity-0 transition-opacity duration-300"></div>
              <Image
                src="/images/brand/quality.webp"  // 정성 가득 이미지
                alt="정성 가득"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-green-500 to-green-600 bg-clip-text text-transparent">정성 가득</h3>
            <p className="text-gray-600 leading-relaxed">
              매일 신선한 재료로 정성껏 준비하는<br />
              엄마의 손맛 그대로, 집밥 같은 편안함
            </p>
          </div>
        </div>

        {/* 스페셜 포인트 */}
        <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-2xl p-8 md:p-12 max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                "쭈꾸미는 매워야 제맛이지만,<br />
                <span className="text-red-600">모두가 즐길 수 있어야 진짜 맛집"</span>
              </h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                3대가 함께 와도 모두가 행복한 한 끼를 즐길 수 있도록,
                매운 쭈꾸미 전문점이지만 화덕피자, 왕돈까스, 냉면 등
                다양한 메뉴를 준비했습니다.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                특히 저희 쭈꾸미는 <strong>'착한 매운맛'</strong>으로
                처음엔 살짝 매콤하지만, 먹을수록 계속 당기는
                중독성 있는 맛이 특징입니다.
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="bg-white rounded-lg p-4 shadow-md flex items-center space-x-4">
                <Users className="w-8 h-8 text-red-600 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold">가족 모임</h4>
                  <p className="text-sm text-gray-600">어린이부터 어르신까지 모두 OK</p>
                </div>
              </div>
              
              <div className="bg-white rounded-lg p-4 shadow-md flex items-center space-x-4">
                <Award className="w-8 h-8 text-orange-600 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold">신선한 재료</h4>
                  <p className="text-sm text-gray-600">매일 들어오는 신선한 쭈꾸미</p>
                </div>
              </div>
              
              <div className="bg-white rounded-lg p-4 shadow-md flex items-center space-x-4">
                <Clock className="w-8 h-8 text-green-600 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold">빠른 조리</h4>
                  <p className="text-sm text-gray-600">주문 즉시 불맛 가득 조리</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-xl text-gray-700 mb-6">
            파주에서 <strong>진짜 맛집</strong>을 찾고 계신가요?
          </p>
          <a 
            href="#menu" 
            className="inline-flex items-center justify-center px-8 py-4 bg-red-600 text-white font-semibold rounded-full hover:bg-red-700 transition shadow-lg transform hover:scale-105"
          >
            메뉴 확인하고 주문하기
          </a>
        </div>
      </div>
    </section>
  );
}