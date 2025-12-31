import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ProfilePage = () => {
  const { userId } = useParams(); // URL의 :userId 값을 가져옴
  const [profile, setProfile] = useState(null);
  const [activeTab, setActiveTab] = useState('boards'); // 'boards' 또는 'reviews'
  const [loading, setLoading] = useState(true);

  useEffect(() => {
  const fetchProfile = async () => {
    try {
      // 1. 실제 도메인 주소로 변경
      // 만약 백엔드에서 모든 API 앞에 /api를 붙이기로 했다면 /api/users/... 로 작성하세요.
      const response = await axios.get(`https://api.stackflov.com/users/${userId}/profile`);
      setProfile(response.data);
    } catch (error) {
      console.error("프로필 데이터를 불러오지 못했습니다.", error);
      // 에러 발생 시 profile 상태가 null이므로 "사용자를 찾을 수 없습니다"가 표시됨
    } finally {
      setLoading(false);
    }
  };

  if (userId) fetchProfile();
}, [userId]);

  if (loading) return <div className="p-10 text-center">정보를 불러오는 중...</div>;
  if (!profile) return <div className="p-10 text-center">사용자를 찾을 수 없습니다.</div>;

  return (
    <div className="max-w-5xl mx-auto p-6">
      {/* 1. 프로필 상단 영역 */}
      <div className="flex flex-col md:flex-row items-center gap-8 border-b pb-10">
        <img 
          src={profile.profileImageUrl} 
          alt="Profile" 
          className="w-32 h-32 rounded-full border-2 border-gray-200 object-cover"
        />
        <div className="flex-1">
          <div className="flex items-center gap-4 mb-2">
            <h1 className="text-3xl font-bold">{profile.nickname}</h1>
            <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded">Lv.{profile.level}</span>
          </div>
          <p className="text-gray-500 mb-4">{profile.email}</p>
          
          <div className="flex gap-6 mb-4">
            <span><strong>{profile.followers?.length || 0}</strong> 팔로워</span>
            <span><strong>{profile.following?.length || 0}</strong> 팔로잉</span>
          </div>

          <button className={`px-4 py-2 rounded font-semibold ${
            profile.isFollowing ? 'bg-gray-200' : 'bg-blue-600 text-white'
          }`}>
            {profile.isFollowing ? '언팔로우' : '팔로우'}
          </button>
        </div>
      </div>

      {/* 2. 탭 메뉴 */}
      <div className="flex mt-6 border-b">
        <button 
          onClick={() => setActiveTab('boards')}
          className={`px-6 py-3 font-bold ${activeTab === 'boards' ? 'border-b-2 border-black' : 'text-gray-400'}`}
        >
          게시글
        </button>
        <button 
          onClick={() => setActiveTab('reviews')}
          className={`px-6 py-3 font-bold ${activeTab === 'reviews' ? 'border-b-2 border-black' : 'text-gray-400'}`}
        >
          리뷰
        </button>
      </div>

      {/* 3. 리스트 영역 */}
      <div className="mt-6">
        {activeTab === 'boards' ? (
          <div className="grid grid-cols-1 gap-4">
            {profile.boards.map(board => (
              <div key={board.id} className="p-4 border rounded hover:bg-gray-50 cursor-pointer">
                <h3 className="text-lg font-semibold">{board.title}</h3>
                <p className="text-sm text-gray-500 mt-1">{new Date(board.createdAt).toLocaleDateString()}</p>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-4">
            {profile.reviews.map(review => (
              <div key={review.id} className="p-4 border rounded bg-yellow-50">
                <div className="font-bold text-yellow-700">★ {review.rating}</div>
                <p className="mt-1">{review.content}</p>
                <p className="text-xs text-gray-400 mt-2">{review.address}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfilePage;