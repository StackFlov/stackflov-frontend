import React from 'react';
import { useRecoilState } from 'recoil';
import { levelUpModalState } from '../../recoil/modalAtom';
import styled from 'styled-components';
import Confetti from 'react-confetti';
import { motion, AnimatePresence } from 'framer-motion';
// import levelUpIcon from '../../assets/images/levelup_box.png'; // 📦 자취 박스 아이콘 같은 거 넣으면 좋아요!

const Backdrop = styled(motion.div)`
  position: fixed; top: 0; left: 0; width: 100vw; height: 100vh;
  background: rgba(0, 0, 0, 0.75); z-index: 9999;
  display: flex; justify-content: center; align-items: center;
`;

const ModalContainer = styled(motion.div)`
  background: linear-gradient(135deg, #fff 0%, #f3f4f6 100%);
  padding: 40px; border-radius: 24px;
  text-align: center; position: relative; overflow: hidden;
  max-width: 480px; width: 90%;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  border: 2px solid #8b5cf6; // 보라색 테두리 강조
`;

const Title = styled.h2`
  font-size: 28px; font-weight: 900; color: #8b5cf6;
  margin-bottom: 16px; letter-spacing: -0.5px;
`;

const LevelName = styled.div`
  font-size: 36px; font-weight: 800; color: #1f2937;
  margin: 20px 0; text-shadow: 2px 2px 0px #e5e7eb;
`;

const Message = styled.p`
  font-size: 16px; color: #4b5563; margin-bottom: 32px; line-height: 1.5;
`;

const ConfirmButton = styled(motion.button)`
  padding: 12px 32px; font-size: 18px; font-weight: 700; color: white;
  background: linear-gradient(90deg, #8b5cf6 0%, #a78bfa 100%);
  border: none; border-radius: 12px; cursor: pointer;
  box-shadow: 0 4px 6px rgba(139, 92, 246, 0.25);
  &:hover { box-shadow: 0 10px 15px rgba(139, 92, 246, 0.4); }
`;

export default function LevelUpModal() {
  const [{ isOpen, levelName, message }, setModalState] = useRecoilState(levelUpModalState);

  const handleClose = () => setModalState(prev => ({ ...prev, isOpen: false }));

  return (
    <AnimatePresence>
      {isOpen && (
        <Backdrop
          onClick={handleClose}
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
        >
          <Confetti numberOfPieces={300} recycle={false} gravity={0.2} />
          <ModalContainer
            onClick={e => e.stopPropagation()}
            initial={{ scale: 0.7, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0, transition: { type: "spring", stiffness: 200, damping: 15 } }}
            exit={{ scale: 0.8, opacity: 0, y: -20 }}
          >
            <Title>🎉 자취력 진화 성공! 🎉</Title>
            {/* <img src={levelUpIcon} alt="Level Up" style={{ width: '100px', margin: '10px auto' }} /> */}
            <LevelName>"{levelName}"</LevelName>
            <Message>{message}</Message>
            <ConfirmButton
              onClick={handleClose}
              whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
            >
              확인했습니다! 😎
            </ConfirmButton>
          </ModalContainer>
        </Backdrop>
      )}
    </AnimatePresence>
  );
}