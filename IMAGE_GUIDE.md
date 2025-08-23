# 히어로 이미지 가이드

## 📁 이미지 저장 위치

### 옵션 1: 로컬 이미지 (public 폴더)
```
/public/images/hero/
├── hero-1.jpg
├── hero-2.jpg
└── hero-3.jpg
```

### 옵션 2: 최적화된 WebP 형식 (권장)
```
/public/images/hero/
├── hero-1.webp
├── hero-2.webp
└── hero-3.webp
```

## 📏 권장 이미지 사양

### 크기 및 해상도
- **권장 크기**: 1920x1080px (Full HD)
- **최소 크기**: 1600x900px
- **비율**: 16:9 권장

### 파일 형식 및 용량
- **WebP** (가장 권장): 200-500KB
- **JPEG**: 300-800KB
- **최대 용량**: 1MB 이하

## 🔧 이미지 최적화 방법

### 1. WebP 변환 (온라인 도구)
- [Squoosh](https://squoosh.app/) - Google 제공 무료 도구
- [CloudConvert](https://cloudconvert.com/jpg-to-webp)
- [Convertio](https://convertio.co/kr/jpg-webp/)

### 2. 이미지 압축 (온라인 도구)
- [TinyPNG](https://tinypng.com/) - PNG/JPEG 압축
- [Compressor.io](https://compressor.io/)
- [ImageOptim](https://imageoptim.com/online) - Mac용

### 3. 명령줄 도구 (선택사항)
```bash
# WebP 변환 (cwebp 설치 필요)
brew install webp
cwebp -q 80 hero-1.jpg -o hero-1.webp

# ImageMagick으로 리사이즈
brew install imagemagick
convert hero-1.jpg -resize 1920x1080 -quality 85 hero-1-optimized.jpg
```

## 💻 코드 수정 방법

### 로컬 이미지 사용 시 (Hero.tsx 수정)

```typescript
// src/components/Hero.tsx

const images = [
  '/images/hero/hero-1.webp',  // 또는 .jpg
  '/images/hero/hero-2.webp',
  '/images/hero/hero-3.webp',
];
```

### 외부 CDN 사용 시 (현재 설정)

```typescript
// src/components/Hero.tsx

const images = [
  'https://images.unsplash.com/...', // 현재 설정
  // 또는 다른 CDN 서비스
  'https://res.cloudinary.com/your-cloud/image/upload/v1234/hero-1.jpg',
  'https://imgur.com/your-image.jpg',
];
```

## 🌐 무료 이미지 호스팅 서비스

### 1. Cloudinary (추천)
- 무료: 25GB 대역폭/월
- 자동 최적화 지원
- URL: https://cloudinary.com/

### 2. Imgur
- 무료 호스팅
- 직접 업로드 가능
- URL: https://imgur.com/

### 3. ImageKit
- 무료: 20GB 대역폭/월
- 실시간 이미지 최적화
- URL: https://imagekit.io/

### 4. Uploadcare
- 무료: 3,000 이미지
- CDN 포함
- URL: https://uploadcare.com/

## 📝 이미지 추가 체크리스트

- [ ] 이미지 3장 준비 (쭈꾸미 요리, 매장 내부, 시그니처 메뉴)
- [ ] 1920x1080px로 리사이즈
- [ ] WebP 또는 JPEG로 최적화 (500KB 이하)
- [ ] /public/images/hero/ 폴더에 저장
- [ ] Hero.tsx의 images 배열 수정
- [ ] next.config.ts 수정 (외부 도메인 사용 시)

## 🔄 적용 방법

1. 이미지를 준비하고 최적화
2. `/public/images/hero/` 폴더에 저장
3. `src/components/Hero.tsx` 파일 열기
4. `images` 배열을 다음과 같이 수정:

```typescript
const images = [
  '/images/hero/hero-1.webp',
  '/images/hero/hero-2.webp',
  '/images/hero/hero-3.webp',
];
```

5. 저장 후 브라우저에서 확인

## ⚠️ 주의사항

- 이미지 파일명에 한글 사용 금지
- 공백 대신 하이픈(-) 또는 언더스코어(_) 사용
- 모든 이미지는 동일한 비율로 준비
- WebP를 지원하지 않는 브라우저를 위해 JPEG 백업 준비 고려