export interface MenuItem {
  name: string;
  price: number;
  description?: string;
  category: string;
  isPopular?: boolean;
  spicyLevel?: number;
}

export const menuData: MenuItem[] = [
  // 1인 메뉴
  {
    name: "쭈꾸미볶음밥",
    price: 12000,
    category: "1인 메뉴",
    isPopular: true,
    spicyLevel: 2
  },
  {
    name: "꼬막비빔밥",
    price: 12000,
    category: "1인 메뉴"
  },
  {
    name: "왕돈까스",
    price: 12000,
    category: "1인 메뉴"
  },
  {
    name: "직화쭈꾸미 볶음",
    price: 12000,
    category: "1인 메뉴",
    isPopular: true,
    spicyLevel: 3
  },
  {
    name: "버섯냉면",
    price: 9000,
    category: "1인 메뉴"
  },
  {
    name: "물냉면",
    price: 9000,
    category: "1인 메뉴"
  },
  
  // 점판 메뉴
  {
    name: "쭈꾸미철판(1인)",
    price: 15000,
    category: "철판 메뉴",
    description: "신선한 쭈꾸미와 야채를 매콤하게 볶아낸 철판요리",
    isPopular: true,
    spicyLevel: 3
  },
  {
    name: "직화쭈꾸미 삼겹(중)",
    price: 40000,
    category: "철판 메뉴",
    description: "쭈꾸미와 삼겹살의 환상적인 조합",
    spicyLevel: 2
  },
  {
    name: "직화쭈꾸미 삼겹(대)",
    price: 50000,
    category: "철판 메뉴",
    description: "쭈꾸미와 삼겹살의 환상적인 조합",
    spicyLevel: 2
  },
  
  // 단품 메뉴
  {
    name: "버섯로월&도토리전 (8EA)",
    price: 10000,
    category: "단품 메뉴"
  },
  {
    name: "버섯로월 (8EA)",
    price: 10000,
    category: "단품 메뉴"
  },
  {
    name: "치즈듬뿍달걀찜",
    price: 20000,
    category: "단품 메뉴"
  },
  {
    name: "통성옥가스",
    price: 10000,
    category: "단품 메뉴"
  },
  {
    name: "도토리전",
    price: 8000,
    category: "단품 메뉴"
  },
  {
    name: "족사발",
    price: 5000,
    category: "단품 메뉴"
  },
  {
    name: "순두부",
    price: 5000,
    category: "단품 메뉴"
  },
  {
    name: "달걀찜(찜바카추가)",
    price: 3000,
    category: "단품 메뉴"
  },
  {
    name: "달걀찜(일반/일반미니)",
    price: 12000,
    category: "단품 메뉴",
    description: "일반 9인분 / 일반미니 11인분"
  },
  
  // 주류 및 음료
  {
    name: "맥주",
    price: 5000,
    category: "주류 및 음료"
  },
  {
    name: "소주",
    price: 5000,
    category: "주류 및 음료"
  },
  {
    name: "막걸리",
    price: 5000,
    category: "주류 및 음료"
  },
  {
    name: "청하",
    price: 4000,
    category: "주류 및 음료"
  },
  {
    name: "청포도에이드",
    price: 6000,
    category: "주류 및 음료"
  },
  {
    name: "오미자에이드",
    price: 6000,
    category: "주류 및 음료"
  },
  {
    name: "콜라, 사이다 (355ml)",
    price: 3000,
    category: "주류 및 음료"
  },
  {
    name: "콜라, 사이다 (1.25L)",
    price: 3000,
    category: "주류 및 음료"
  },
  
  // 정식 세트
  {
    name: "쭈꾸미볶음 정식",
    price: 16000,
    category: "정식 세트",
    description: "쭈꾸미볶음 + 된장찌개 + 도토리묵 + 계란찜 or 계란후라이",
    isPopular: true,
    spicyLevel: 3
  },
  {
    name: "꼬막비빔밥 정식",
    price: 14000,
    category: "정식 세트",
    description: "꼬막비빔밥 + 된장찌개 + 도토리묵 + 계란찜 or 계란후라이"
  },
  {
    name: "불백고기 정식",
    price: 18000,
    category: "정식 세트",
    description: "불백고기 + 공기밥 + 된장찌개 + 도토리묵 + 계란찜 or 계란후라이",
    spicyLevel: 1
  },
  {
    name: "쭈꾸미(피자치즈) 정식",
    price: 16000,
    category: "정식 세트",
    description: "쭈꾸미볶음(피자치즈토핑) + 공기밥 + 된장찌개 + 도토리묵 + 계란찜 or 계란후라이",
    spicyLevel: 2
  },
  {
    name: "쭈꾸미(피자치즈+돈) 정식",
    price: 18000,
    category: "정식 세트",
    description: "쭈꾸미볶음(피자치즈+삼겹살) + 공기밥 + 된장찌개 + 도토리묵 + 계란찜 or 계란후라이",
    spicyLevel: 2
  }
];

export const categories = Array.from(new Set(menuData.map(item => item.category)));