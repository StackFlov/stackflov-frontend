import styled from "styled-components";
import "../../Fonts/fonts.css";

export const MetaRow = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin: 8px 0 12px;
`;

export const TraceDetailWrapper = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 1400px;
  min-height: 1400px;
  padding: 0 16px;
  box-sizing: border-box;

  @media (max-width: 1400px) {
    min-height: 600px;
    padding: 0 8px;
  }
`;

export const TraceImagesWrapper = styled.div`
  width: 100%;
  margin-top: 20px;
  padding-top: 20px;
  border-top: 1px solid #eee; /* 본문과 구분선 (선택 사항) */

  /* 이미지 스타일 */
  img {
    width: 100%;
    max-width: 600px; /* 이미지 최대 너비 (디자인에 맞게 조절) */
    height: auto;
    object-fit: cover;
    margin-top: 15px;
    border-radius: 8px;
    display: block; /* 이미지 간 정렬을 위해 */
    margin-left: auto;
    margin-right: auto;
  }
`;

export const TraceDetailTopContent = styled.div`
  width: 100%;
  max-width: 1400px;
  min-height: 85px;
  border-bottom: 5px solid black;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 8px 0;

  @media (max-width: 1400px) {
    min-height: 60px;
    padding: 4px 0;
  }
  @media (max-width: 600px) {
    min-height: 40px;
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const TraceDiv = styled.div`
  width: 100%;
  font-size: 16px;
  font-weight: bold;
  color: #b6b6b6;
  margin-bottom: 4px;

  @media (max-width: 1400px) {
    font-size: 14px;
  }
  @media (max-width: 600px) {
    font-size: 12px;
  }
`;

export const TraceTitleDiv = styled.div`
  flex: 1;
  font-size: 32px;
  font-weight: 700;

  @media (max-width: 1400px) {
    font-size: 24px;
  }
  @media (max-width: 600px) {
    font-size: 18px;
    margin-bottom: 4px;
  }
`;

export const TraceCategoryDiv = styled.div`
  width: 110px;
  min-width: 80px;
  font-size: 16px;
  font-weight: bold;
  margin-left: 12px;

  @media (max-width: 1400px) {
    font-size: 14px;
    width: 80px;
  }
  @media (max-width: 600px) {
    width: 100%;
    margin-left: 0;
    margin-top: 4px;
  }
`;

export const TraceCategorySelectorItem = styled.li`
  width: 100px;
  padding: 8px 12px;
  height: 50px;
  list-style: none;
  border: 2px solid #cdd8e3;
  border-radius: 15px;
  margin: 8px 0 0 0;
  text-align: center;
  background-color: #cdd8e3;
  font-size: 15px;

  @media (max-width: 1400px) {
    width: 60px;
    font-size: 13px;
  }
  @media (max-width: 600px) {
    width: 50px;
    font-size: 12px;
    padding: 6px 8px;
  }
`;

export const TraceDetailMiddleContent = styled.div`
  width: 100%;
  max-width: 1400px;
  min-height: 200px;
  padding: 12px 0;

  @media (max-width: 1400px) {
    min-height: 120px;
    padding: 8px 0;
  }
  @media (max-width: 600px) {
    min-height: 80px;
    padding: 4px 0;
  }
`;

export const TraceCreatedAtDiv = styled.div`
  padding: 8px 0;
  font-size: 18px;
  font-weight: 600;
  color: #b6b6b6;
  @media (max-width: 1400px) {
    font-size: 15px;
    padding: 6px 0;
  }
`;

export const TraceUpdateDiv = styled.div`
  min-width: 92px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  padding: 0 12px;
  font-size: 16px;
  font-weight: bold;
  color: black;
  border: 2px solid rgba(208, 208, 208, 0.5);
  transition-duration: 500ms;
`;

export const TraceContentDiv = styled.div`
  font-size: 28px;
  word-break: break-word;
  width: 100%;
  @media (max-width: 1400px) {
    font-size: 18px;
  }
`;

export const TraceDetailBottomContent = styled.div`
  width: 100%;
  max-width: 1400px;
  min-height: 120px;
  border-top: 3px solid #b6b6b6;
  display: flex;
  align-items: center;
  padding: 18px 0;

  @media (max-width: 1400px) {
    min-height: 90px;
    padding: 10px 0;
  }
  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
    min-height: 70px;
    padding: 4px 0;
  }
`;

export const UserImageDiv = styled.div`
  width: 100px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 1400px) {
    width: 60px;
    height: 60px;
  }
  @media (max-width: 600px) {
    width: 40px;
    height: 40px;
    margin-bottom: 6px;
  }
`;

export const UserInfoDiv = styled.div`
  margin-left: 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 1400px) {
    margin-left: 12px;
  }
  @media (max-width: 600px) {
    margin-left: 0;
  }
`;

export const UserNickName = styled.div`
  font-size: 21px;
  margin-bottom: 8px;
  width: 20%;
  @media (max-width: 1400px) {
    font-size: 16px;
  }
  @media (max-width: 600px) {
    font-size: 13px;
  }
`;

export const UserFollowBtn = styled.div`
  width: 100px;
  height: 20px;
  padding: 12px 8px;
  border: 2px solid rgba(208, 208, 208);
  border-radius: 30px;
  margin: 0 0 0 5px;
  transition-duration: 500ms;
  text-align: center;
  cursor: pointer;
  font-size: 15px;
  &:hover {
    border: 2px solid rgba(208, 208, 208, 0.5);
    background-color: rgba(208, 208, 208, 0.5);
  }

  @media (max-width: 1400px) {
    font-size: 13px;
    width: 80px;
    padding: 8px 6px;
  }
  @media (max-width: 600px) {
    font-size: 11px;
    width: 70px;
    padding: 6px 4px;
  }
`;

/* 댓글 입력창 */
export const ReplyCreateDiv = styled.div`
  display: flex;
  align-items: flex-start;
  background: #f1f5f9;
  border-radius: 18px;
  padding: 24px 28px;
  margin: 30px 0 10px 0;
  max-width: 1400px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);

  @media (max-width: 1400px) {
    padding: 14px 10px;
    margin: 18px 0 8px 0;
    max-width: 100%;
  }
  @media (max-width: 600px) {
    flex-direction: column;
    padding: 8px 2px;
    margin: 10px 0 6px 0;
  }
`;

export const ReplyInput = styled.textarea`
  flex: 1;
  min-height: 60px;
  max-height: 180px;
  border: none;
  border-radius: 12px;
  padding: 16px;
  font-size: 16px;
  resize: vertical;
  background: #fff;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.03);
  margin-right: 18px;
  outline: none;
  transition: box-shadow 0.2s;

  &:focus {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  }

  @media (max-width: 1400px) {
    font-size: 14px;
    padding: 10px;
    margin-right: 8px;
  }
  @media (max-width: 600px) {
    font-size: 13px;
    padding: 7px;
    margin-right: 0;
    margin-bottom: 8px;
    min-height: 40px;
  }
`;

export const ReplyCreateBtn = styled.button`
  min-width: 110px;
  height: 48px;
  background: #4361ee;
  color: #fff;
  font-size: 17px;
  font-weight: 600;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06);
  transition: background 0.2s;

  &:hover {
    background: #2743b8;
  }

  @media (max-width: 1400px) {
    min-width: 80px;
    height: 36px;
    font-size: 14px;
  }
  @media (max-width: 600px) {
    min-width: 60px;
    height: 32px;
    font-size: 12px;
  }
`;

/* 댓글 카드 */
export const ReplyDiv = styled.div`
  display: flex;
  align-items: flex-start;
  background: #f8fafc;
  border-radius: 18px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
  padding: 24px 28px;
  margin: 18px 0;
  min-height: 70px;
  max-width: 1400px;
  transition: box-shadow 0.2s;

  &:hover {
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.11);
  }

  @media (max-width: 1400px) {
    padding: 14px 10px;
    min-height: 80px;
    max-width: 100%;
  }
  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 8px 2px;
    min-height: 60px;
  }
`;

/* 프로필 이미지 */
export const ReplyUserImageDiv = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  overflow: hidden;
  background: #e6e6e6;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 22px;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.07);

  svg {
    font-size: 60px;
    color: #bfc5cb;
  }

  @media (max-width: 1400px) {
    width: 40px;
    height: 40px;
    margin-right: 10px;
    svg {
      font-size: 40px;
    }
  }
  @media (max-width: 600px) {
    width: 32px;
    height: 32px;
    margin-right: 0;
    margin-bottom: 6px;
    svg {
      font-size: 32px;
    }
  }
`;

/* 댓글 내용 전체 */
export const ReplyContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

/* 유저명과 날짜 한 줄에 */
export const ReplyHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 6px;

  @media (max-width: 600px) {
    margin-bottom: 2px;
  }
`;

/* 유저명 */
export const ReplyUserUserNameDiv = styled.div`
  font-size: 18px;
  font-weight: 600;
  color: #2d3748;
  margin-right: 16px;

  @media (max-width: 1400px) {
    font-size: 14px;
    margin-right: 8px;
  }
  @media (max-width: 600px) {
    font-size: 12px;
    margin-right: 4px;
  }
`;

/* 날짜 */
export const ReplyCreateAtDiv = styled.div`
  font-size: 13px;
  color: #8b95a1;

  @media (max-width: 1400px) {
    font-size: 11px;
  }
  @media (max-width: 600px) {
    font-size: 10px;
  }
`;

/* 댓글 내용 */
export const ReplyContentDiv = styled.div`
  font-size: 17px;
  color: #222;
  margin-top: 6px;
  word-break: break-all;

  @media (max-width: 1400px) {
    font-size: 13px;
    margin-top: 4px;
  }
  @media (max-width: 600px) {
    font-size: 11px;
    margin-top: 2px;
  }
`;

export const ImagesGrid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 12px;
  margin-top: 16px;
  justify-content: start;  /* 그리드 트랙 좌측 정렬 */
  justify-items: start;    /* 각 카드 좌측 정렬 */
`;