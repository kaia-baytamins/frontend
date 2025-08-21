import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

function Home() {
  const navigate = useNavigate();
  const [currentRankingType, setCurrentRankingType] = useState('global');
  const [currentLeaderboard, setCurrentLeaderboard] = useState('exploration');

  const leaderboardData = {
    global: {
      exploration: [
        {rank: 1, name: '우주냥 Luna', subtitle: 'SpaceExplorer_KR', avatar: '🐱', score: '127 🪐'},
        {rank: 2, name: '판다로켓 Panda', subtitle: 'PandaSpaceForce', avatar: '🐼', score: '98 🪐'},
        {rank: 3, name: '토끼우주선 Bunny', subtitle: 'BunnyToTheMoon', avatar: '🐰', score: '87 🪐'},
        {rank: 47, name: '우주견 코스모 (나)', subtitle: 'CosmoExplorer', avatar: '🐕', score: '3 🪐', isMe: true},
        {rank: 48, name: '여우우주여행 Fox', subtitle: 'FoxInSpace', avatar: '🦊', score: '2 🪐'}
      ],
      nft: [
        {rank: 1, name: '수집가 Dragon', subtitle: 'NFTCollector_Pro', avatar: '🐉', score: '2,847 💎'},
        {rank: 2, name: '보물사냥꾼 Tiger', subtitle: 'TreasureHunter', avatar: '🐅', score: '1,923 💎'},
        {rank: 3, name: '우주냥 Luna', subtitle: 'SpaceExplorer_KR', avatar: '🐱', score: '1,576 💎'},
        {rank: 156, name: '우주견 코스모 (나)', subtitle: 'CosmoExplorer', avatar: '🐕', score: '12 💎', isMe: true},
        {rank: 157, name: '느린거북 Turtle', subtitle: 'SlowAndSteady', avatar: '🐢', score: '11 💎'}
      ]
    },
    friends: {
      exploration: [
        {rank: 1, name: '김철수', subtitle: 'LINE 친구', avatar: '🐱', score: '15 🪐'},
        {rank: 2, name: '박영희', subtitle: 'LINE 친구', avatar: '🐼', score: '8 🪐'},
        {rank: 3, name: '우주견 코스모 (나)', subtitle: 'CosmoExplorer', avatar: '🐕', score: '3 🪐', isMe: true},
        {rank: 4, name: '최민지', subtitle: 'LINE 친구', avatar: '🐰', score: '1 🪐'}
      ],
      nft: [
        {rank: 1, name: '김철수', subtitle: 'LINE 친구', avatar: '🐱', score: '45 💎'},
        {rank: 2, name: '박영희', subtitle: 'LINE 친구', avatar: '🐼', score: '28 💎'},
        {rank: 3, name: '우주견 코스모 (나)', subtitle: 'CosmoExplorer', avatar: '🐕', score: '12 💎', isMe: true},
        {rank: 4, name: '최민지', subtitle: 'LINE 친구', avatar: '🐰', score: '7 💎'}
      ]
    }
  };

  const switchRankingType = (type) => {
    setCurrentRankingType(type);
  };

  const switchLeaderboard = (type) => {
    setCurrentLeaderboard(type);
  };

  const navigateToExplore = () => {
    navigate('/explore');
  };

  const visitFriend = (friendId) => {
    alert(`친구 ${friendId}의 우주선을 구경하러 갑니다! 🚀`);
  };

  const inviteFriend = (friendId) => {
    alert(`${friendId}님에게 스페이스펫 초대 메시지를 보냅니다! 📱`);
  };

  return (
    <div className="home-page">
      <div className="container">
        {/* 헤더 */}
        <div className="header">
          <div className="logo">🚀 스페이스펫</div>
          <div className="wallet-info">
            <span>💰 1,250 KAIA</span>
          </div>
        </div>

        {/* 내 프로필 */}
        <div className="my-profile">
          <div className="profile-pet">🐕</div>
          <div className="profile-info">
            <div className="profile-name">우주견 코스모</div>
            <div className="profile-stats">
              <span>🪐 탐험: 3개</span>
              <span>🏆 NFT: 12개</span>
            </div>
          </div>
          <div className="profile-rank">#47</div>
        </div>

        {/* 퀵 액션 */}
        <div className="quick-actions">
          <div className="quick-action" onClick={navigateToExplore}>
            <div className="action-icon">🏃‍♂️</div>
            <div className="action-text">펫 훈련</div>
          </div>
          <div className="quick-action" onClick={navigateToExplore}>
            <div className="action-icon">🚀</div>
            <div className="action-text">우주 탐험</div>
          </div>
        </div>

        {/* 리더보드 */}
        <div className="leaderboard-section">
          <div className="section-header">
            <div className="section-title">🏆 탐험 랭킹</div>
            <div className="tab-switch">
              <button 
                className={`tab-btn ${currentRankingType === 'global' ? 'active' : ''}`}
                onClick={() => switchRankingType('global')}
              >
                글로벌
              </button>
              <button 
                className={`tab-btn ${currentRankingType === 'friends' ? 'active' : ''}`}
                onClick={() => switchRankingType('friends')}
              >
                LINE 친구
              </button>
            </div>
          </div>

          <div className="leaderboard-tabs">
            <button 
              className={`board-tab ${currentLeaderboard === 'exploration' ? 'active' : ''}`}
              onClick={() => switchLeaderboard('exploration')}
            >
              🪐 탐험
            </button>
            <button 
              className={`board-tab ${currentLeaderboard === 'nft' ? 'active' : ''}`}
              onClick={() => switchLeaderboard('nft')}
            >
              💎 NFT
            </button>
          </div>

          <div className="leaderboard-list">
            {leaderboardData[currentRankingType][currentLeaderboard].map((player) => {
              const rankClass = player.rank <= 3 ? `rank-${player.rank}` : 'rank-other';
              const meClass = player.isMe ? 'me' : '';
              
              return (
                <div key={player.rank} className={`leaderboard-item ${meClass}`}>
                  <div className={`rank-number ${rankClass}`}>{player.rank}</div>
                  <div className="player-avatar">{player.avatar}</div>
                  <div className="player-info">
                    <div className="player-name">{player.name}</div>
                    <div className="player-subtitle">{player.subtitle}</div>
                  </div>
                  <div className="player-score">{player.score}</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* LINE 친구 요청 */}
        <div className="friend-requests">
          <div className="section-title" style={{marginBottom: '15px'}}>👥 LINE 친구와 함께</div>
          
          <div className="friend-item">
            <div className="friend-avatar">🐱</div>
            <div className="friend-info">
              <div className="friend-name">김철수</div>
              <div className="friend-status">온라인 • 방금 목성 탐험 성공!</div>
            </div>
            <button className="friend-btn" onClick={() => visitFriend('kimcs')}>방문</button>
          </div>

          <div className="friend-item">
            <div className="friend-avatar">🐼</div>
            <div className="friend-info">
              <div className="friend-name">박영희</div>
              <div className="friend-status">오프라인 • 2시간 전</div>
            </div>
            <button className="friend-btn" onClick={() => visitFriend('parkys')}>방문</button>
          </div>

          <div className="friend-item">
            <div className="friend-avatar">🐰</div>
            <div className="friend-info">
              <div className="friend-name">이민수</div>
              <div className="friend-status">스페이스펫 초대 대기중</div>
            </div>
            <button className="friend-btn" onClick={() => inviteFriend('leems')}>초대</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;