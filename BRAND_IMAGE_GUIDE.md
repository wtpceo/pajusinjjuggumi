# 브랜드 스토리 이미지 가이드

## 📁 이미지 저장 위치

```
/public/images/brand/
├── spicy.jpg        (또는 .webp) - 착한 매운맛 이미지
├── variety.jpg      (또는 .webp) - 다양한 메뉴 이미지
└── quality.jpg      (또는 .webp) - 정성 가득 이미지
```

## 📸 각 섹션별 추천 이미지

### 1. 착한 매운맛 (spicy.jpg)
- **추천**: 빨간 쭈꾸미 볶음 클로즈업
- **포인트**: 매콤한 색감이 돋보이는 요리 사진

### 2. 다양한 메뉴 (variety.jpg)  
- **추천**: 여러 메뉴가 함께 있는 사진 또는 피자/돈까스
- **포인트**: 다양성을 보여주는 구성

### 3. 정성 가득 (quality.jpg)
- **추천**: 요리 과정 또는 신선한 재료 사진
- **포인트**: 정성과 신선함이 느껴지는 이미지

## 📏 권장 사양

- **크기**: 400x400px (정사각형)
- **용량**: 100KB 이하 (WebP 권장)
- **형식**: WebP > JPEG > PNG

## 🔧 이미지 추가 방법

### 1단계: 이미지 준비
3장의 이미지를 준비하여 다음 위치에 저장:
```bash
/public/images/brand/spicy.jpg
/public/images/brand/variety.jpg
/public/images/brand/quality.jpg
```

### 2단계: WebP 변환 (선택사항)
```bash
# 터미널에서 실행
cd /Users/wtpceo/Desktop/wtpceo_app/파주신쭈꾸미/my-app/public/images/brand
cwebp -q 80 -resize 400 400 spicy.jpg -o spicy.webp
cwebp -q 80 -resize 400 400 variety.jpg -o variety.webp
cwebp -q 80 -resize 400 400 quality.jpg -o quality.webp
```

### 3단계: 코드 수정
`src/components/BrandStory.tsx` 파일에서 이미지 경로 수정:

```typescript
// 현재 (Unsplash 이미지)
src="https://images.unsplash.com/..."

// 변경 후 (로컬 이미지)
src="/images/brand/spicy.webp"    // 착한 매운맛
src="/images/brand/variety.webp"  // 다양한 메뉴
src="/images/brand/quality.webp"  // 정성 가득
```

## ✅ 체크리스트

- [ ] 3장의 이미지 준비 (착한 매운맛, 다양한 메뉴, 정성 가득)
- [ ] `/public/images/brand/` 폴더에 저장
- [ ] 400x400px로 크기 조정
- [ ] WebP로 변환 (선택사항)
- [ ] BrandStory.tsx 파일 수정

## 📝 파일명 규칙

- 영문 소문자만 사용
- 공백 대신 하이픈(-) 사용
- 예: `spicy-food.jpg` ✅ / `매운맛.jpg` ❌