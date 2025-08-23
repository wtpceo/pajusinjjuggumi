import { Phone, MapPin, Clock } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 md:py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">신쭈꾸미 파주점</h3>
            <p className="text-gray-400">
              신선한 쭈꾸미로 만드는 정성 가득한 요리
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">영업 정보</h4>
            <div className="space-y-2 text-gray-400">
              <div className="flex items-start space-x-2">
                <Clock size={18} className="mt-1" />
                <div>
                  <p>매일 11:00 - 22:00</p>
                  <p className="text-sm">라스트오더 21:30</p>
                </div>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin size={18} className="mt-1" />
                <p>경기 파주시 신촌동 60-1</p>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">문의</h4>
            <div className="space-y-2 text-gray-400">
              <div className="flex items-center space-x-2">
                <Phone size={18} />
                <a href="tel:0507-1443-1858" className="hover:text-white transition">
                  0507-1443-1858
                </a>
              </div>
              <p className="text-sm">
                예약 및 포장 주문 가능
              </p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 신쭈꾸미 파주점. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}