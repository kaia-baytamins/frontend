import React, { useState } from 'react';
import './Settings.css';

function Settings() {
  const [notifications, setNotifications] = useState(true);
  const [soundEffects, setSoundEffects] = useState(true);
  const [language, setLanguage] = useState('ko');

  const toggleNotifications = () => {
    setNotifications(!notifications);
  };

  const toggleSoundEffects = () => {
    setSoundEffects(!soundEffects);
  };

  const changeLanguage = (lang) => {
    setLanguage(lang);
  };

  const connectWallet = () => {
    alert('🔗 지갑 연결\n\n사용 가능한 지갑:\n• Kaia Wallet\n• LINE Wallet\n• MetaMask\n\n지갑을 선택해주세요.');
  };

  const viewProfile = () => {
    alert('👤 프로필 정보\n\n닉네임: 우주견 코스모\nLevel: 5\n탐험한 행성: 3개\n보유 NFT: 12개\n총 거래량: 45.2 KAIA\n\n가입일: 2024.01.15');
  };

  const exportData = () => {
    alert('📤 데이터 내보내기\n\n다음 데이터를 내보낼 수 있습니다:\n• 게임 진행 상황\n• NFT 목록\n• 거래 내역\n• 스테이킹 현황\n\nJSON 형식으로 내보내시겠습니까?');
  };

  const showSupport = () => {
    alert('🆘 고객 지원\n\n문의 방법:\n• LINE 공식 계정: @spacepet\n• 이메일: support@spacepet.game\n• 디스코드: discord.gg/spacepet\n\n운영시간: 평일 09:00-18:00 (KST)');
  };

  const showTerms = () => {
    alert('📄 이용약관\n\n주요 내용:\n• 서비스 이용 규칙\n• 개인정보 처리방침\n• NFT 소유권 규정\n• 환불 정책\n\n자세한 내용은 웹사이트에서 확인하세요.');
  };

  const logout = () => {
    if (window.confirm('정말 로그아웃하시겠습니까?\n\n게임 진행 상황은 블록체인에 저장되므로 안전합니다.')) {
      alert('로그아웃되었습니다.\n다음에 또 만나요! 🚀');
    }
  };

  return (
    <div className="settings-page">
      <div className="container">
        {/* 헤더 */}
        <div className="header">
          <div className="page-title">⚙️ 설정</div>
          <div className="wallet-info">
            <span>💰 1,250 KAIA</span>
          </div>
        </div>

        {/* 프로필 정보 */}
        <div className="profile-section">
          <div className="section-title">👤 내 프로필</div>
          <div className="profile-card">
            <div className="profile-avatar">🐕</div>
            <div className="profile-details">
              <div className="profile-name">우주견 코스모</div>
              <div className="profile-level">Level 5 • 탐험가</div>
              <div className="profile-stats">
                <span>🪐 3개 행성</span>
                <span>💎 12개 NFT</span>
                <span>💰 45.2 KAIA</span>
              </div>
            </div>
            <button className="profile-btn" onClick={viewProfile}>
              프로필 보기
            </button>
          </div>
        </div>

        {/* 지갑 & 계정 */}
        <div className="settings-section">
          <div className="section-title">💼 지갑 & 계정</div>
          
          <div className="setting-item" onClick={connectWallet}>
            <div className="setting-info">
              <div className="setting-name">🔗 지갑 연결</div>
              <div className="setting-desc">Kaia Wallet 연결됨</div>
            </div>
            <div className="setting-arrow">›</div>
          </div>

          <div className="setting-item" onClick={exportData}>
            <div className="setting-info">
              <div className="setting-name">📤 데이터 내보내기</div>
              <div className="setting-desc">게임 데이터를 백업하세요</div>
            </div>
            <div className="setting-arrow">›</div>
          </div>
        </div>

        {/* 게임 설정 */}
        <div className="settings-section">
          <div className="section-title">🎮 게임 설정</div>
          
          <div className="setting-item">
            <div className="setting-info">
              <div className="setting-name">🔔 알림</div>
              <div className="setting-desc">퀘스트 및 이벤트 알림</div>
            </div>
            <div 
              className={`toggle-switch ${notifications ? 'active' : ''}`}
              onClick={toggleNotifications}
            >
              <div className="toggle-slider"></div>
            </div>
          </div>

          <div className="setting-item">
            <div className="setting-info">
              <div className="setting-name">🔊 효과음</div>
              <div className="setting-desc">게임 내 사운드 효과</div>
            </div>
            <div 
              className={`toggle-switch ${soundEffects ? 'active' : ''}`}
              onClick={toggleSoundEffects}
            >
              <div className="toggle-slider"></div>
            </div>
          </div>

          <div className="setting-item">
            <div className="setting-info">
              <div className="setting-name">🌐 언어</div>
              <div className="setting-desc">한국어 선택됨</div>
            </div>
            <select 
              className="language-select" 
              value={language} 
              onChange={(e) => changeLanguage(e.target.value)}
            >
              <option value="ko">한국어</option>
              <option value="en">English</option>
              <option value="ja">日本語</option>
              <option value="zh">中文</option>
            </select>
          </div>
        </div>

        {/* DeFi 설정 */}
        <div className="settings-section">
          <div className="section-title">💰 DeFi 설정</div>
          
          <div className="defi-stats">
            <div className="defi-stat-item">
              <div className="stat-icon">💰</div>
              <div className="stat-info">
                <div className="stat-name">총 스테이킹</div>
                <div className="stat-value">$300</div>
              </div>
            </div>
            
            <div className="defi-stat-item">
              <div className="stat-icon">🌊</div>
              <div className="stat-info">
                <div className="stat-name">LP 제공</div>
                <div className="stat-value">$200</div>
              </div>
            </div>
            
            <div className="defi-stat-item">
              <div className="stat-icon">🏦</div>
              <div className="stat-info">
                <div className="stat-name">렌딩</div>
                <div className="stat-value">$150</div>
              </div>
            </div>
            
            <div className="defi-stat-item">
              <div className="stat-icon">📈</div>
              <div className="stat-info">
                <div className="stat-name">총 수익률</div>
                <div className="stat-value">+18.4%</div>
              </div>
            </div>
          </div>
        </div>

        {/* 고객 지원 */}
        <div className="settings-section">
          <div className="section-title">🆘 고객 지원</div>
          
          <div className="setting-item" onClick={showSupport}>
            <div className="setting-info">
              <div className="setting-name">💬 문의하기</div>
              <div className="setting-desc">LINE 공식계정 또는 이메일</div>
            </div>
            <div className="setting-arrow">›</div>
          </div>

          <div className="setting-item">
            <div className="setting-info">
              <div className="setting-name">⭐ 평점 남기기</div>
              <div className="setting-desc">앱스토어에서 리뷰를 작성해주세요</div>
            </div>
            <div className="setting-arrow">›</div>
          </div>

          <div className="setting-item" onClick={showTerms}>
            <div className="setting-info">
              <div className="setting-name">📄 이용약관</div>
              <div className="setting-desc">서비스 약관 및 개인정보처리방침</div>
            </div>
            <div className="setting-arrow">›</div>
          </div>
        </div>

        {/* 앱 정보 */}
        <div className="settings-section">
          <div className="section-title">📱 앱 정보</div>
          
          <div className="app-info">
            <div className="app-logo">🚀</div>
            <div className="app-details">
              <div className="app-name">스페이스펫</div>
              <div className="app-version">버전 1.2.0</div>
              <div className="app-description">
                우주 탐험 동물 키우기 게임<br/>
                Built on Kaia Blockchain
              </div>
            </div>
          </div>
        </div>

        {/* 로그아웃 */}
        <div className="logout-section">
          <button className="logout-btn" onClick={logout}>
            🚪 로그아웃
          </button>
        </div>
      </div>
    </div>
  );
}

export default Settings;