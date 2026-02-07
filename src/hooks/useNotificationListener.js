import { useEffect } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { userState } from '../recoil/userAtom'; // 유저 정보 상태 (ID 확인용)
import { levelUpModalState } from '../recoil/modalAtom'; // 아까 만든 모달 상태
import SockJS from 'sockjs-client';
import Stomp from 'stompjs';
import { toast } from 'react-toastify';

export const useNotificationListener = () => {
  const me = useRecoilValue(userState); // 현재 로그인한 유저 정보
  const setLevelUpModal = useSetRecoilState(levelUpModalState);

  useEffect(() => {
    // 1. 유저가 로그인 상태가 아니면 연결하지 않음
    if (!me?.id) return;

    // 2. 웹소켓 연결 설정 (백엔드 경로가 /ws 인지 확인 필요)
    const socket = new SockJS('http://localhost:8080/ws'); 
    const client = Stomp.over(socket);

    // 디버그 로그가 너무 많으면 아래 줄로 끌 수 있습니다.
    // client.debug = null;

    client.connect({}, () => {
      console.log('Connected to WebSocket: ' + me.id);

      // 3. 내 전용 알림 채널 구독
      client.subscribe(`/sub/notifications/${me.id}`, (message) => {
        const notification = JSON.parse(message.body);
        const type = notification.notificationType || notification.type;

        // ✅ LEVELUP 혹은 SYSTEM 타입인 경우: 화려한 축하 모달 오픈
        if (type === 'LEVELUP' || type === 'SYSTEM') {
          // 메시지에서 등급명(대괄호 사이) 추출 로직
          const match = notification.message.match(/\[(.*?)\]/);
          const levelName = match ? match[1] : '새로운 등급';

          setLevelUpModal({
            isOpen: true,
            message: notification.message,
            levelName: levelName,
          });
        } 
        // ✅ 그 외 일반 알림(댓글, 팔로우 등): 토스트 메시지 출력
        else {
          toast.info(notification.message, {
            position: "top-right",
            autoClose: 5000,
            onClick: () => { /* 클릭 시 이동 로직 필요하면 추가 */ }
          });
        }
      });
    }, (error) => {
      console.error('WebSocket Connection Error:', error);
    });

    // 4. 언마운트 시 연결 해제 (메모리 누수 방지)
    return () => {
      if (client.connected) client.disconnect();
    };
  }, [me, setLevelUpModal]);
};