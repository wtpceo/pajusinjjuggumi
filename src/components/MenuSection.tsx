'use client';

import { useState } from 'react';
import { menuData, categories } from '@/data/menuData';
import { Flame, Star } from 'lucide-react';

export default function MenuSection() {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  
  const filteredMenu = menuData.filter(item => item.category === selectedCategory);
  
  const formatPrice = (price: number) => {
    return price.toLocaleString('ko-KR') + '원';
  };
  
  const SpicyLevel = ({ level }: { level: number }) => {
    return (
      <div className="flex items-center">
        {[...Array(3)].map((_, i) => (
          <Flame 
            key={i} 
            size={16} 
            className={i < level ? 'text-red-500' : 'text-gray-300'}
          />
        ))}
      </div>
    );
  };
  
  return (
    <section id="menu" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 animate-fade-in-up">
            <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">특별한</span> 메뉴
          </h2>
          <p className="text-lg md:text-xl text-gray-600 animate-fade-in-up animation-delay-200">
            신선한 재료로 정성껏 준비한 요리들
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category, index) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-red-500 to-red-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-50 shadow-md hover:shadow-lg'
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {category}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-7xl mx-auto">
          {filteredMenu.map((item, index) => (
            <div 
              key={index}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transform transition-all duration-300 hover:-translate-y-1 overflow-hidden"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-red-600 transition-colors">
                    {item.name}
                    {item.isPopular && (
                      <Star className="inline-block ml-2 text-yellow-500 animate-pulse" size={18} fill="currentColor" />
                    )}
                  </h3>
                  {item.spicyLevel && <SpicyLevel level={item.spicyLevel} />}
                </div>
                
                {item.description && (
                  <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                    {item.description}
                  </p>
                )}
                
                <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                  <span className="text-2xl font-bold bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">
                    {formatPrice(item.price)}
                  </span>
                  {item.isPopular && (
                    <span className="text-xs bg-gradient-to-r from-yellow-400 to-orange-400 text-white px-3 py-1 rounded-full font-semibold shadow-md">
                      인기메뉴
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}