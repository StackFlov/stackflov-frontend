import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import * as S from '../styles/components/ProfilePageStyles';
import AttendanceCheckIn from "../components/AttendanceCheckIn";

const ProfilePage = () => {
  const { userId } = useParams();
  const navigate = useNavigate();
  const [profile, setProfile] = useState(null);
  const [activeTab, setActiveTab] = useState('boards');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        // 실제 API 엔드포인트에 맞춰 호출합니다.
        const response = await axios.get(`https://api.stackflov.com/users/${userId}/profile`);
        setProfile(response.data);
      } catch (err) {
        console.error("데이터 로드 실패:", err);
      } finally {
        setLoading(false);
      }
    };
    if (userId) fetchProfile();
  }, [userId]);

  if (loading) return <S.AdminBlockWrapper><h2>로딩 중...</h2></S.AdminBlockWrapper>;
  if (!profile) return <S.AdminBlockWrapper><h2>사용자를 찾을 수 없습니다.</h2></S.AdminBlockWrapper>;

  // 관리자 프로필 접근 제한 로직 유지
  if (profile.role === 'ADMIN') {
    return (
      <S.AdminBlockWrapper>
        <h2>🔒 접근 제한</h2>
        <p>관리자 프로필은 보안 정책상 열람이 불가능합니다.</p>
        <S.FollowButton onClick={() => navigate(-1)} style={{marginTop: '20px'}}>뒤로 가기</S.FollowButton>
      </S.AdminBlockWrapper>
    );
  }

  return (
    <S.ProfileWrapper>
      <S.HeaderCard>
        <S.ProfileImg src={profile.profileImageUrl} alt="프로필" />
        <S.InfoSection>
          <h1>{profile.nickname} <S.LevelBadge>Lv.{profile.level}</S.LevelBadge></h1>
          <p style={{color: '#64748b', margin: '5px 0'}}>{profile.email}</p>
          
          <S.StatGroup>
            <S.StatItem>
              <span>{profile.followers?.length || 0}</span>
              <span>팔로워</span>
            </S.StatItem>
            <S.StatItem>
              <span>{profile.following?.length || 0}</span>
              <span>팔로잉</span>
            </S.StatItem>
          </S.StatGroup>

          <S.FollowButton $isFollowing={profile.isFollowing}>
            {profile.isFollowing ? '언팔로우' : '팔로우'}
          </S.FollowButton>
        </S.InfoSection>
      </S.HeaderCard>
      <AttendanceCheckIn />

      <S.TabWrapper>
        <S.TabButton $active={activeTab === 'boards'} onClick={() => setActiveTab('boards')}>
          게시글 ({profile.boards?.length || 0})
        </S.TabButton>
        <S.TabButton $active={activeTab === 'reviews'} onClick={() => setActiveTab('reviews')}>
          리뷰 ({profile.reviews?.length || 0})
        </S.TabButton>
      </S.TabWrapper>

      <div style={{marginTop: '20px'}}>
        {activeTab === 'boards' ? (
          profile.boards?.length > 0 ? (
            profile.boards.map(b => (
              <S.ContentCard key={b.id} onClick={() => navigate(`/trace/detail/${b.id}`)}>
                <h3 style={{margin: '0 0 8px 0'}}>{b.title}</h3>
                <p style={{fontSize: '13px', color: '#94a3b8'}}>{new Date(b.createdAt).toLocaleDateString()} · 조회 {b.viewCount}</p>
              </S.ContentCard>
            ))
          ) : (
            <div style={{textAlign: 'center', padding: '40px', color: '#94a3b8'}}>작성한 게시글이 없습니다.</div>
          )
        ) : (
          profile.reviews?.length > 0 ? (
            profile.reviews.map(r => (
              /* ✅ 경로 수정: 클릭 시 /nibangnebang/{id}로 이동합니다. */
              <S.ContentCard key={r.id} onClick={() => navigate(`/nibangnebang/${r.id}`)} style={{cursor: 'pointer'}}>
                <div style={{color: '#f59e0b', fontWeight: 'bold', marginBottom: '8px'}}>★ {r.rating}</div>
                <p style={{margin: '0 0 10px 0', lineHeight: '1.5'}}>{r.content}</p>
                <span style={{fontSize: '12px', color: '#94a3b8'}}>{r.address}</span>
              </S.ContentCard>
            ))
          ) : (
            <div style={{textAlign: 'center', padding: '40px', color: '#94a3b8'}}>작성한 리뷰가 없습니다.</div>
          )
        )}
      </div>
    </S.ProfileWrapper>
  );
};

export default ProfilePage;