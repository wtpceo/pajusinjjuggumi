'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Phone, Menu, X } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-white shadow-md z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-3 md:py-4">
          <Link href="/" className="flex items-center space-x-1">
            <div className="text-xl md:text-2xl font-bold text-red-600">신쭈꾸미</div>
            <span className="text-xs md:text-sm text-gray-600">파주점</span>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#menu" className="text-gray-700 hover:text-red-600 transition">메뉴</a>
            <a href="#location" className="text-gray-700 hover:text-red-600 transition">위치</a>
            <a href="#contact" className="text-gray-700 hover:text-red-600 transition">연락처</a>
          </nav>
          
          <div className="flex items-center space-x-2">
            <a href="tel:0507-1443-1858" className="flex items-center space-x-1 text-red-600 font-semibold p-2">
              <Phone size={20} />
              <span className="hidden sm:inline text-sm">0507-1443-1858</span>
            </a>
            
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* 모바일 메뉴 */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <nav className="flex flex-col">
            <a 
              href="#menu" 
              className="px-4 py-3 text-gray-700 hover:bg-gray-50 border-b"
              onClick={() => setIsMenuOpen(false)}
            >
              메뉴
            </a>
            <a 
              href="#location" 
              className="px-4 py-3 text-gray-700 hover:bg-gray-50 border-b"
              onClick={() => setIsMenuOpen(false)}
            >
              위치
            </a>
            <a 
              href="#contact" 
              className="px-4 py-3 text-gray-700 hover:bg-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              연락처
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}