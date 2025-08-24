'use client';

import { useEffect, useRef } from 'react';
import Script from 'next/script';

interface NaverMaps {
  LatLng: new (lat: number, lng: number) => unknown;
  Map: new (element: HTMLElement, options: unknown) => unknown;
  Marker: new (options: unknown) => unknown;
  InfoWindow: new (options: unknown) => { open: (map: unknown, marker: unknown) => void; close: () => void; getMap: () => unknown };
  Animation: { BOUNCE: unknown };
  Position: { TOP_RIGHT: unknown; TOP_LEFT: unknown };
  Size: new (width: number, height: number) => unknown;
  Point: new (x: number, y: number) => unknown;
  Event: {
    addListener: (target: unknown, eventName: string, listener: () => void) => void;
  };
}

declare global {
  interface Window {
    naver: {
      maps: NaverMaps;
    };
  }
}

interface NaverMapProps {
  className?: string;
}

export default function NaverMap({ className = '' }: NaverMapProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<unknown>(null);

  const initializeMap = () => {
    if (!mapRef.current || !window.naver) return;

    const mapOptions = {
      // 신쭈꾸미 파주점 좌표 (경기 파주시 신촌동 60-1)
      center: new window.naver.maps.LatLng(37.7595, 126.7885),
      zoom: 17,
      minZoom: 7,
      maxZoom: 19,
      zoomControl: true,
      zoomControlOptions: {
        position: window.naver.maps.Position.TOP_RIGHT,
      },
      mapTypeControl: true,
      mapTypeControlOptions: {
        position: window.naver.maps.Position.TOP_LEFT,
      },
    };

    // 지도 생성
    const map = new window.naver.maps.Map(mapRef.current, mapOptions);
    mapInstanceRef.current = map;

    // 마커 생성
    const marker = new window.naver.maps.Marker({
      position: new window.naver.maps.LatLng(37.7595, 126.7885),
      map: map,
      title: '신쭈꾸미 파주점',
      animation: window.naver.maps.Animation.BOUNCE,
    });

    // 정보창 생성
    const infoWindow = new window.naver.maps.InfoWindow({
      content: `
        <div style="padding: 20px; min-width: 200px;">
          <h4 style="margin: 0 0 8px 0; font-weight: bold; font-size: 16px;">신쭈꾸미 파주점</h4>
          <p style="margin: 4px 0; color: #666; font-size: 14px;">경기 파주시 신촌동 60-1</p>
          <p style="margin: 4px 0; color: #666; font-size: 14px;">☎ 0507-1443-1858</p>
          <div style="margin-top: 12px; display: flex; gap: 8px;">
            <a href="https://map.naver.com/v5/search/신쭈꾸미%20파주점" 
               target="_blank" 
               rel="noopener noreferrer"
               style="padding: 6px 12px; background: #03C75A; color: white; text-decoration: none; border-radius: 4px; font-size: 13px;">
              네이버지도
            </a>
            <a href="https://map.naver.com/v5/directions/-/14117853.509857586,4541982.879610872,신쭈꾸미%20파주점,1469898,PLACE_POI/-/-/transit?c=15,0,0,0,dh" 
               target="_blank" 
               rel="noopener noreferrer"
               style="padding: 6px 12px; background: #4285F4; color: white; text-decoration: none; border-radius: 4px; font-size: 13px;">
              길찾기
            </a>
          </div>
        </div>
      `,
      borderWidth: 0,
      backgroundColor: 'white',
      anchorSize: new window.naver.maps.Size(20, 10),
      anchorSkew: true,
      anchorColor: 'white',
      pixelOffset: new window.naver.maps.Point(0, -10)
    });

    // 마커 클릭 이벤트
    window.naver.maps.Event.addListener(marker, 'click', () => {
      if (infoWindow.getMap()) {
        infoWindow.close();
      } else {
        infoWindow.open(map, marker);
      }
    });

    // 초기에 정보창 열기
    infoWindow.open(map, marker);

    // 3초 후 정보창 닫기
    setTimeout(() => {
      infoWindow.close();
    }, 3000);

    // 반응형 처리
    window.naver.maps.Event.addListener(map, 'resize', () => {
      map.setCenter(new window.naver.maps.LatLng(37.7595, 126.7885));
    });
  };

  useEffect(() => {
    // 네이버 지도 API가 로드된 후 지도 초기화
    if (window.naver && window.naver.maps) {
      initializeMap();
    }
  }, []);

  return (
    <>
      <Script
        src={`https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.NEXT_PUBLIC_NAVER_MAP_CLIENT_ID || '3v9kbcnxom'}`}
        strategy="afterInteractive"
        onLoad={initializeMap}
      />
      <div 
        ref={mapRef} 
        className={`w-full h-full min-h-[400px] rounded-lg ${className}`}
        style={{ minHeight: '400px' }}
      />
    </>
  );
}