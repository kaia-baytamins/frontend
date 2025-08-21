import React, { useState, useEffect } from 'react';
import './Explore.css';

function Explore() {
  const [currentTab, setCurrentTab] = useState('training');
  const [showPlanetModal, setShowPlanetModal] = useState(false);

  const switchTab = (tab) => {
    setCurrentTab(tab);
  };

  const showPlanetSelection = () => {
    setShowPlanetModal(true);
  };

  const closePlanetSelection = () => {
    setShowPlanetModal(false);
  };

  const selectPlanet = (planet) => {
    const planetNames = {
      'moon': '달',
      'mars': '화성',
      'jupiter': '목성'
    };
    
    if (window.confirm(`${planetNames[planet]} 탐험을 시작하시겠습니까?\n\n⚠️ 장착된 NFT가 모두 소각됩니다!\n- ⚙️ 터보 엔진 V3\n- 🛡️ 크리스탈 유리`)) {
      closePlanetSelection();
      alert(`🚀 ${planetNames[planet]}로 출발합니다!\n탐험 화면으로 이동...`);
    }
  };

  const showSpaceshipInfo = () => {
    alert(`🚀 코스모의 우주선\n\n장착된 NFT:\n⚙️ 터보 엔진 V3 (추진력 +150)\n🛡️ 크리스탈 유리 (방어력 +80)\n\n총 스펙: 310점\n상태: 탐험 준비 완료! ✅`);
  };

  const feedPet = () => {
    alert('🍖 맛있는 우주 사료를 줬습니다!\n체력 +5 증가!');
  };

  const trainPet = () => {
    alert('🏃‍♂️ 무중력 훈련을 완료했습니다!\n민첩성 +3 증가!');
  };

  const openStakingModal = () => {
    alert('💰 스테이킹 모달이 열립니다!\n\n스테이킹 옵션:\n• $10 → 체력 +10\n• $50 → 체력 +50 + 희귀 아이템\n• $100 → 모든 능력치 +20 + 전설 아이템');
  };

  const selectSlot = (slot) => {
    const slotNames = {
      'engine': '엔진',
      'fuel': '연료통',
      'armor': '강화유리',
      'special': '특수장비'
    };
    
    alert(`${slotNames[slot]} 슬롯을 선택했습니다!\n인벤토리에서 장착할 NFT를 선택해주세요.`);
  };

  const openInventory = () => {
    alert('🎒 인벤토리가 열립니다!\n\n보유 NFT:\n⚙️ 터보 엔진 V5 (1개)\n🔥 플라즈마 엔진 (2개)\n⛽ 메가 연료통 (1개)\n💎 다이아몬드 유리 (1개)\n\n장착하거나 마켓에 판매할 수 있습니다.');
  };

  useEffect(() => {
    // 별 생성
    const createStars = () => {
      const starsContainer = document.getElementById('stars-container');
      if (starsContainer) {
        for (let i = 0; i < 50; i++) {
          const star = document.createElement('div');
          star.className = 'explore-star';
          star.textContent = Math.random() > 0.5 ? '⭐' : '✨';
          star.style.left = Math.random() * 100 + '%';
          star.style.top = Math.random() * 100 + '%';
          star.style.fontSize = (Math.random() * 6 + 6) + 'px';
          star.style.animationDelay = Math.random() * 3 + 's';
          starsContainer.appendChild(star);
        }
      }
    };

    createStars();
  }, []);

  return (
    <div className="explore-page">
      {/* 별 배경 */}
      <div className="explore-stars" id="stars-container"></div>

      <div className="space-container">
        {/* 왼쪽 사이드바 */}
        <div className="sidebar">
          <div 
            className={`sidebar-tab ${currentTab === 'launch' ? 'active' : ''}`}
            onClick={() => switchTab('launch')}
          >
            <div className="tab-icon">🚀</div>
            <div className="tab-label">발사<br/>기지</div>
          </div>
          
          <div 
            className={`sidebar-tab ${currentTab === 'training' ? 'active' : ''}`}
            onClick={() => switchTab('training')}
          >
            <div className="tab-icon">🏃‍♂️</div>
            <div className="tab-label">펫<br/>훈련</div>
          </div>
          
          <div 
            className={`sidebar-tab ${currentTab === 'garage' ? 'active' : ''}`}
            onClick={() => switchTab('garage')}
          >
            <div className="tab-icon">🔧</div>
            <div className="tab-label">우주선<br/>정비</div>
          </div>
        </div>

        {/* 메인 콘텐츠 */}
        <div className="main-content">
          {/* 헤더 */}
          <div className="space-header">
            <div className="space-title">🌌 코스모의 우주기지</div>
            <div className="space-stats">
              <div className="stat-item">💰 1,250 KAIA</div>
              <div className="stat-item">🏆 Lv.5</div>
            </div>
          </div>

          {/* 우주 공간 */}
          <div className="space-area">
            <div className="spaceship-center" onClick={showSpaceshipInfo}>
              <div className="equipped-nfts">
                <div className="equipped-nft">⚙️</div>
                <div className="equipped-nft">🛡️</div>
              </div>
              <div className="spaceship">
                <div className="pet-in-ship">🐕</div>
              </div>
            </div>
          </div>

          {/* 발사기지 콘텐츠 */}
          {currentTab === 'launch' && (
            <div className="content-section">
              <div className="launch-pad">
                <div className="launch-status">
                  <div className="status-title">🚀 발사 준비 상태</div>
                  <div className="ship-specs">
                    <div className="spec-item">
                      <div className="spec-value">230</div>
                      <div className="spec-label">추진력</div>
                    </div>
                    <div className="spec-item">
                      <div className="spec-value">80</div>
                      <div className="spec-label">방어력</div>
                    </div>
                    <div className="spec-item">
                      <div className="spec-value">310</div>
                      <div className="spec-label">종합점수</div>
                    </div>
                  </div>
                  <div style={{fontSize: '12px', opacity: '0.8', marginBottom: '15px'}}>
                    🌕 달, 🔴 화성, 🪐 목성 탐험 가능
                  </div>
                  <button className="explore-btn" onClick={showPlanetSelection}>
                    🌌 우주 탐험 시작!
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* 펫 훈련 콘텐츠 */}
          {currentTab === 'training' && (
            <div className="content-section">
              <div className="pet-training">
                <div className="pet-status">
                  <div className="status-title">🐕 코스모 훈련장</div>
                  <div className="pet-avatar-large">🐕</div>
                  <div className="pet-stats">
                    <div className="spec-item">
                      <div className="spec-value">85</div>
                      <div className="spec-label">체력</div>
                    </div>
                    <div className="spec-item">
                      <div className="spec-value">62</div>
                      <div className="spec-label">민첩성</div>
                    </div>
                    <div className="spec-item">
                      <div className="spec-value">73</div>
                      <div className="spec-label">지능</div>
                    </div>
                  </div>
                  <div className="training-actions">
                    <button className="training-btn" onClick={feedPet}>
                      🍖 사료 주기
                    </button>
                    <button className="training-btn" onClick={trainPet}>
                      🏃‍♂️ 훈련하기
                    </button>
                  </div>
                </div>
                
                <button className="explore-btn staking" onClick={openStakingModal}>
                  💰 스테이킹으로 성장시키기
                </button>
              </div>
            </div>
          )}

          {/* 우주선 정비 콘텐츠 */}
          {currentTab === 'garage' && (
            <div className="content-section">
              <div className="ship-garage">
                <div className="pet-status">
                  <div className="status-title">🔧 우주선 정비소</div>
                  <div className="equipment-slots">
                    <div className="equipment-slot equipped" onClick={() => selectSlot('engine')}>
                      <div className="slot-icon">⚙️</div>
                      <div className="slot-label">엔진</div>
                      <div className="slot-name">터보 엔진 V3</div>
                    </div>
                    
                    <div className="equipment-slot" onClick={() => selectSlot('fuel')}>
                      <div className="slot-icon">⛽</div>
                      <div className="slot-label">연료통</div>
                      <div className="slot-name">빈 슬롯</div>
                    </div>
                    
                    <div className="equipment-slot equipped" onClick={() => selectSlot('armor')}>
                      <div className="slot-icon">🛡️</div>
                      <div className="slot-label">강화유리</div>
                      <div className="slot-name">크리스탈 유리</div>
                    </div>
                    
                    <div className="equipment-slot" onClick={() => selectSlot('special')}>
                      <div className="slot-icon">⚡</div>
                      <div className="slot-label">특수장비</div>
                      <div className="slot-name">빈 슬롯</div>
                    </div>
                  </div>
                </div>
                
                <button className="explore-btn inventory" onClick={openInventory}>
                  🎒 인벤토리 열기
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* 행성 선택 모달 */}
      {showPlanetModal && (
        <div className="planet-modal">
          <div className="modal-content">
            <button className="close-btn" onClick={closePlanetSelection}>&times;</button>
            <div className="modal-header">
              <div className="modal-title">🌌 탐험할 행성을 선택하세요</div>
              <div style={{fontSize: '12px', opacity: '0.8'}}>현재 스펙: 310점</div>
            </div>
            
            <div className="planets-grid">
              <div className="planet-card available" onClick={() => selectPlanet('moon')}>
                <div className="planet-icon">🌕</div>
                <div className="planet-name">달</div>
                <div className="planet-requirement">필요: 100점</div>
                <div className="planet-reward">기본 NFT</div>
              </div>

              <div className="planet-card available" onClick={() => selectPlanet('mars')}>
                <div className="planet-icon">🔴</div>
                <div className="planet-name">화성</div>
                <div className="planet-requirement">필요: 200점</div>
                <div className="planet-reward">희귀 NFT</div>
              </div>

              <div className="planet-card available" onClick={() => selectPlanet('jupiter')}>
                <div className="planet-icon">🪐</div>
                <div className="planet-name">목성</div>
                <div className="planet-requirement">필요: 300점</div>
                <div className="planet-reward">전설 NFT</div>
              </div>

              <div className="planet-card locked">
                <div className="planet-icon">⭐</div>
                <div className="planet-name">베텔기우스</div>
                <div className="planet-requirement">필요: 500점</div>
                <div className="planet-reward">신화 NFT</div>
                <div className="lock-overlay">🔒</div>
              </div>

              <div className="planet-card locked">
                <div className="planet-icon">🌌</div>
                <div className="planet-name">안드로메다</div>
                <div className="planet-requirement">필요: 800점</div>
                <div className="planet-reward">우주 NFT</div>
                <div className="lock-overlay">🔒</div>
              </div>

              <div className="planet-card locked">
                <div className="planet-icon">🕳️</div>
                <div className="planet-name">블랙홀</div>
                <div className="planet-requirement">필요: 1000점</div>
                <div className="planet-reward">??? NFT</div>
                <div className="lock-overlay">🔒</div>
              </div>
            </div>
            
            <div style={{textAlign: 'center', fontSize: '11px', opacity: '0.7', marginTop: '10px'}}>
              ⚠️ 탐험 시 장착된 NFT가 소각됩니다
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Explore;