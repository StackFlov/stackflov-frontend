import styled from "styled-components";

export const ProfileWrapper = styled.div`
  max-width: 900px;
  margin: 40px auto;
  padding: 20px;
  font-family: 'Inter', sans-serif;
`;

export const HeaderCard = styled.div`
  display: flex;
  align-items: center;
  background: #fff;
  padding: 30px;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  gap: 40px;
  border: 1px solid #f0f0f0;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

export const ProfileImg = styled.img`
  width: 160px;
  height: 160px;
  border-radius: 50%;
  object-fit: cover;
  border: 5px solid #f8faff;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;

export const InfoSection = styled.div`
  flex: 1;

  h1 {
    font-size: 32px;
    font-weight: 800;
    margin: 0;
    display: flex;
    align-items: center;
    gap: 12px;
  }
`;

export const LevelBadge = styled.span`
  font-size: 14px;
  background: #eff6ff;
  color: #2563eb;
  padding: 4px 12px;
  border-radius: 50px;
  font-weight: 700;
`;

export const StatGroup = styled.div`
  display: flex;
  gap: 30px;
  margin: 25px 0;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

/* 에러 해결: export 추가 */
export const StatItem = styled.div`
  span:first-child {
    display: block;
    font-size: 20px;
    font-weight: 900;
    color: #1e293b;
  }
  span:last-child {
    font-size: 14px;
    color: #64748b;
  }
`;

export const FollowButton = styled.button`
  padding: 12px 35px;
  border-radius: 10px;
  border: none;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.2s;
  background-color: ${(props) => (props.$isFollowing ? "#f1f5f9" : "#2563eb")};
  color: ${(props) => (props.$isFollowing ? "#475569" : "#fff")};

  &:hover {
    transform: translateY(-2px);
    opacity: 0.9;
  }
`;

/* 에러 해결: export 추가 */
export const TabWrapper = styled.div`
  display: flex;
  margin-top: 40px;
  border-bottom: 2px solid #f1f5f9;
`;

export const TabButton = styled.button`
  flex: 1;
  padding: 18px;
  border: none;
  background: none;
  font-weight: 700;
  cursor: pointer;
  color: ${(props) => (props.$active ? "#2563eb" : "#94a3b8")};
  border-bottom: ${(props) => (props.$active ? "3px solid #2563eb" : "none")};
  transition: 0.3s;
`;

export const ContentCard = styled.div`
  background: #fff;
  padding: 20px;
  border-radius: 15px;
  margin-top: 20px;
  border: 1px solid #f1f5f9;
  transition: 0.2s;

  &:hover {
    border-color: #2563eb;
    box-shadow: 0 5px 15px rgba(37, 99, 235, 0.05);
  }
`;

export const AdminBlockWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 100px 20px;
  text-align: center;

  h2 { color: #ef4444; font-size: 24px; }
  p { color: #64748b; margin-top: 10px; }
`;