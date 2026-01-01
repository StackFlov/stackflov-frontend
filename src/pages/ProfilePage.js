import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const ProfilePage = () => {
  const { userId } = useParams();
  const navigate = useNavigate();
  const [profile, setProfile] = useState(null);
  const [activeTab, setActiveTab] = useState('boards');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get(`https://api.stackflov.com/users/${userId}/profile`);
        setProfile(response.data);
      } catch (error) {
        console.error("프로필 데이터를 불러오지 못했습니다.", error);
      } finally {
        setLoading(false);
      }
    };
    if (userId) fetchProfile();
  }, [userId]);

  // 로딩 중 또는 프로필이 없을 때
  if (loading) return <div className="flex justify-center items-center h-screen text-gray-500">로딩 중...</div>;
  if (!profile) return <div className="flex justify-center items-center h-screen text-gray-500">사용자를 찾을 수 없습니다.</div>;

  // ✅ 관리자 프로필 접근 차단 로직
  if (profile.role === 'ADMIN') {
    return (
      <div className="flex flex-col items-center justify-center h-96">
        <p className="text-xl font-bold text-gray-700 mb-4">해당 프로필에 접근할 수 없습니다.</p>
        <button 
          onClick={() => navigate('/')} 
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
        >
          메인으로 돌아가기
        </button>
      </div>
    );
  }

  // 디자인된 프로필 페이지 렌더링
  return (
    <div className="max-w-4xl mx-auto p-4 mt-8">
      {/* 1. 프로필 헤더 영역 */}
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col md:flex-row items-center gap-8">
        <img 
          src={profile.profileImageUrl} 
          alt="Profile" 
          className="w-32 h-32 rounded-full border-4 border-blue-50 object-cover shadow-sm"
        />
        <div className="flex-1 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-3 mb-2">
            <h1 className="text-3xl font-bold text-gray-900">{profile.nickname}</h1>
            <span className="bg-blue-100 text-blue-600 text-xs font-bold px-2.5 py-1 rounded-full">Lv.{profile.level}</span>
          </div>
          
          {/* 팔로워/팔로잉 통계 */}
          <div className="flex justify-center md:justify-start gap-8 my-4">
            <div className="text-center cursor-pointer hover:opacity-75 transition">
              <span className="block text-xl font-bold text-gray-900">{profile.followers.length}</span>
              <span className="text-sm text-gray-500">팔로워</span>
            </div>
            <div className="text-center cursor-pointer hover:opacity-75 transition">
              <span className="block text-xl font-bold text-gray-900">{profile.following.length}</span>
              <span className="text-sm text-gray-500">팔로잉</span>
            </div>
          </div>

          {/* 팔로우 버튼 */}
          <button className={`w-full md:w-auto px-6 py-2.5 rounded-lg font-semibold transition-all ${
            profile.isFollowing 
              ? 'bg-gray-100 text-gray-700 border border-gray-300 hover:bg-gray-200' 
              : 'bg-blue-600 text-white hover:bg-blue-700 shadow-md hover:shadow-lg'
          }`}>
            {profile.isFollowing ? '팔로잉' : '팔로우'}
          </button>
        </div>
      </div>

      {/* 2. 탭 메뉴 */}
      <div className="flex mt-8 border-b border-gray-200">
        {['boards', 'reviews'].map(tab => (
          <button 
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`flex-1 py-4 text-center font-bold relative transition-colors ${
              activeTab === tab ? 'text-blue-600' : 'text-gray-400 hover:text-gray-600'
            }`}
          >
            {tab === 'boards' ? '작성한 게시글' : '작성한 리뷰'}
            <span className="ml-2 bg-gray-100 text-gray-600 text-xs px-2 py-0.5 rounded-full">
              {tab === 'boards' ? profile.boards.length : profile.reviews.length}
            </span>
            {activeTab === tab && <div className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600"></div>}
          </button>
        ))}
      </div>

      {/* 3. 리스트 콘텐츠 영역 */}
      <div className="mt-6 grid gap-4">
        {activeTab === 'boards' ? (
          profile.boards.length > 0 ? (
            profile.boards.map(board => (
              <div key={board.id} className="bg-white p-5 border border-gray-100 rounded-xl hover:shadow-md transition cursor-pointer flex gap-4">
                {board.thumbnailUrl && (
                  <img src={board.thumbnailUrl} alt="thumbnail" className="w-24 h-24 object-cover rounded-lg" />
                )}
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900 mb-1 line-clamp-1">{board.title}</h3>
                  <p className="text-sm text-gray-500">{new Date(board.createdAt).toLocaleDateString()} · 조회 {board.viewCount}</p>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-10 text-gray-400">작성한 게시글이 없습니다.</div>
          )
        ) : (
          profile.reviews.length > 0 ? (
            profile.reviews.map(review => (
              <div key={review.id} className="bg-white p-5 border border-gray-100 rounded-xl hover:shadow-md transition">
                <div className="flex items-center gap-2 mb-2">
                  <span className="bg-yellow-100 text-yellow-700 font-bold text-sm px-2 py-0.5 rounded">★ {review.rating}</span>
                  <span className="text-sm font-semibold text-gray-700 truncate">{review.address}</span>
                </div>
                <p className="text-gray-700 line-clamp-2">{review.content}</p>
                <p className="text-xs text-gray-400 mt-3">{new Date(review.createdAt).toLocaleDateString()}</p>
              </div>
            ))
          ) : (
            <div className="text-center py-10 text-gray-400">작성한 리뷰가 없습니다.</div>
          )
        )}
      </div>
    </div>
  );
};

export default ProfilePage;