import { atom } from 'recoil';

export const levelUpModalState = atom({
  key: 'levelUpModalState', // 고유한 키 값
  default: {
    isOpen: false,   // 모달 열림 여부
    message: '',     // 알림 전체 메시지
    levelName: '',   // 추출한 등급 이름 (예: '편의점 미슐랭')
  },
});