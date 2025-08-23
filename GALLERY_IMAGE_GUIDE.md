# 갤러리 이미지 가이드

## 📁 이미지 저장 위치

```
/public/images/gallery/
├── gallery-1.jpg    (신선한 쭈꾸미)
├── gallery-2.jpg    (매장 내부)
├── gallery-3.jpg    (쭈꾸미 철판)
├── gallery-4.jpg    (왕돈까스)
├── gallery-5.jpg    (화덕피자)
├── gallery-6.jpg    (정식 세트)
├── gallery-7.jpg    (달걀찜)
├── gallery-8.jpg    (냉면)
├── gallery-9.jpg    (볶음밥)
└── gallery-10.jpg   (매장 전경)
```

## 📸 추천 이미지 구성

### 메인요리 (3-4장)
- 쭈꾸미 볶음 클로즈업
- 쭈꾸미 철판 요리
- 볶음밥 완성 사진

### 사이드메뉴 (4-5장)
- 왕돈까스
- 화덕피자
- 달걀찜
- 냉면

### 매장 (2-3장)
- 매장 내부 전경
- 매장 외관
- 조리 과정

## 📏 권장 사양

- **크기**: 1200x1200px (정사각형)
- **용량**: 200KB 이하 (WebP 권장)
- **형식**: JPEG 또는 WebP

## 🔧 이미지 추가 방법

### 1단계: 이미지 준비
10장의 이미지를 준비하여 다음과 같이 저장:
```bash
gallery-1.jpg
gallery-2.jpg
gallery-3.jpg
... 
gallery-10.jpg
```

### 2단계: 폴더에 저장
```bash
/public/images/gallery/ 폴더에 복사
```

### 3단계: WebP 변환 (선택사항)
터미널에서 실행:
```bash
cd /Users/wtpceo/Desktop/wtpceo_app/파주신쭈꾸미/my-app/public/images/gallery

# 모든 이미지를 WebP로 변환
for file in *.jpg; do
  cwebp -q 80 -resize 1200 1200 "$file" -o "${file%.jpg}.webp"
done
```

### 4단계: 코드 수정 (WebP 사용 시)
`src/components/GallerySection.tsx`에서:
```typescript
// .jpg를 .webp로 변경
src: '/images/gallery/gallery-1.webp'
```

## 📝 이미지 정보 수정

`GallerySection.tsx`의 `galleryImages` 배열에서 각 이미지의 정보 수정:

```typescript
const galleryImages: GalleryImage[] = [
  { 
    id: 1, 
    src: '/images/gallery/gallery-1.jpg', 
    alt: '신선한 쭈꾸미',  // 이미지 설명
    category: '메인요리'    // 카테고리
  },
  // ... 나머지 이미지들
];
```

## 🎨 카테고리 분류

현재 설정된 카테고리:
- **메인요리**: 쭈꾸미 볶음, 철판, 볶음밥
- **사이드**: 돈까스, 피자, 달걀찜, 냉면
- **정식**: 정식 세트 메뉴
- **매장**: 매장 내/외부 사진

## ✨ 갤러리 기능

- **필터링**: 카테고리별 이미지 필터
- **라이트박스**: 클릭 시 큰 화면으로 보기
- **네비게이션**: 좌우 화살표로 이미지 이동
- **반응형**: 모바일/태블릿/데스크톱 최적화

## ✅ 체크리스트

- [ ] 10장의 이미지 준비
- [ ] `/public/images/gallery/` 폴더에 저장
- [ ] 파일명 규칙 준수 (gallery-1.jpg ~ gallery-10.jpg)
- [ ] WebP 변환 (선택사항)
- [ ] 이미지 설명 및 카테고리 수정