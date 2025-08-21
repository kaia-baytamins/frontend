import React, { useState, useEffect } from 'react';
import './Quest.css';

function Quest() {
  const [currentQuestTab, setCurrentQuestTab] = useState('daily');
  const [selectedDefiOption, setSelectedDefiOption] = useState(null);
  const [currentDefiType, setCurrentDefiType] = useState(null);
  const [showDefiModal, setShowDefiModal] = useState(false);

  const switchQuestTab = (tab) => {
    setCurrentQuestTab(tab);
  };

  const selectDefiOption = (option) => {
    setSelectedDefiOption(option);
  };

  const startDefiQuest = () => {
    if (!selectedDefiOption) {
      alert('먼저 DeFi 옵션을 선택해주세요!');
      return;
    }
    
    const options = {
      'stake': { name: '스테이킹', desc: '$100 스테이킹을 7일간 유지' },
      'lp': { name: 'LP 제공', desc: 'KAIA-USDT 페어에 $100 제공' },
      'lending': { name: '렌딩', desc: '$100 렌딩 예치' },
      'high_stake': { name: '고액 스테이킹', desc: '$500 스테이킹을 30일간 유지' },
      'multi_lp': { name: '멀티 LP', desc: '2개 LP 풀에 동시 제공' },
      'lending_borrow': { name: '렌딩+보로잉', desc: '복합 DeFi 전략 운용' }
    };
    
    const option = options[selectedDefiOption];
    
    if (window.confirm(`${option.name} 퀘스트를 시작하시겠습니까?\n\n내용: ${option.desc}\n\n퀘스트를 시작하면 DeFi 프로토콜로 자동 연결됩니다.`)) {
      alert(`🎉 ${option.name} 퀘스트 시작!\n\nDeFi 프로토콜 연결 중...\n퀘스트 진행 상황은 실시간으로 업데이트됩니다.`);
    }
  };

  const openDefiModal = (type) => {
    setCurrentDefiType(type);
    setShowDefiModal(true);
  };

  const closeDefiModal = () => {
    setShowDefiModal(false);
  };

  const participateDefi = () => {
    const typeNames = {
      'staking': '스테이킹',
      'lp': 'LP 제공',
      'lending': '렌딩'
    };
    
    alert(`🎉 ${typeNames[currentDefiType]} 참여 완료!\n\nDeFi 프로토콜이 연결되었습니다.\n관련 퀘스트 진행률이 업데이트됩니다.`);
    closeDefiModal();
  };

  const getDefiInfo = (type) => {
    const defiInfo = {
      'staking': {
        title: '💰 스테이킹',
        desc: 'KAIA 토큰을 스테이킹하여 안정적인 수익을 얻으세요.',
        apy: '12.5%'
      },
      'lp': {
        title: '🌊 LP 제공',
        desc: 'KAIA-USDT 페어에 유동성을 제공하고 더 높은 수익을 얻으세요.',
        apy: '24.8%'
      },
      'lending': {
        title: '🏦 렌딩',
        desc: 'KAIA를 예치하고 다른 토큰을 대출받아 레버리지 거래를 하세요.',
        apy: '18.3%'
      }
    };
    return defiInfo[type] || defiInfo.staking;
  };

  useEffect(() => {
    // 이벤트 타이머 업데이트
    const updateEventTimer = () => {
      const timerElement = document.querySelector('.event-timer');
      if (timerElement) {
        let timeLeft = 15 * 3600 + 23 * 60 + 47; // 15:23:47
        
        const interval = setInterval(() => {
          timeLeft--;
          const hours = Math.floor(timeLeft / 3600);
          const minutes = Math.floor((timeLeft % 3600) / 60);
          const seconds = timeLeft % 60;
          
          timerElement.textContent = `⏰ ${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')} 남음`;
          
          if (timeLeft <= 0) {
            timerElement.textContent = '⏰ 이벤트 종료';
            clearInterval(interval);
          }
        }, 1000);

        return () => clearInterval(interval);
      }
    };

    updateEventTimer();
  }, []);

  return (
    <div className="quest-page">
      <div className="container">
        {/* 헤더 */}
        <div className="header">
          <div className="page-title">📋 DeFi 퀘스트</div>
          <div className="wallet-info">
            <span>💰 1,250 KAIA</span>
          </div>
        </div>

        {/* DeFi 포트폴리오 현황 */}
        <div className="defi-portfolio">
          <div className="portfolio-header">
            <div className="portfolio-title">💎 내 DeFi 포트폴리오</div>
            <div className="total-value">$650</div>
            <div style={{fontSize: '11px', opacity: '0.8'}}>총 투자 가치</div>
          </div>
          
          <div className="portfolio-grid">
            <div className="portfolio-item">
              <div className="portfolio-icon">💰</div>
              <div className="portfolio-amount">$300</div>
              <div className="portfolio-label">스테이킹</div>
            </div>
            <div className="portfolio-item">
              <div className="portfolio-icon">🌊</div>
              <div className="portfolio-amount">$200</div>
              <div className="portfolio-label">LP 제공</div>
            </div>
            <div className="portfolio-item">
              <div className="portfolio-icon">🏦</div>
              <div className="portfolio-amount">$150</div>
              <div className="portfolio-label">렌딩</div>
            </div>
          </div>
          
          <div className="portfolio-actions">
            <button className="defi-btn" onClick={() => openDefiModal('staking')}>
              💰 스테이킹
            </button>
            <button className="defi-btn lp" onClick={() => openDefiModal('lp')}>
              🌊 LP 제공
            </button>
            <button className="defi-btn lending" onClick={() => openDefiModal('lending')}>
              🏦 렌딩
            </button>
          </div>
        </div>

        {/* 특별 이벤트 배너 */}
        <div className="special-event">
          <div className="event-sparkle" style={{top: '10%', left: '15%'}}>✨</div>
          <div className="event-sparkle" style={{top: '70%', right: '20%'}}>⭐</div>
          <div className="event-sparkle" style={{top: '30%', right: '10%'}}>✨</div>
          
          <div className="event-title">🌟 DeFi 부스트 이벤트!</div>
          <div className="event-description">모든 DeFi 퀘스트 보상 2배! + 추가 수익률 증가!</div>
          <div className="event-timer">⏰ 15:23:47 남음</div>
        </div>

        {/* 퀘스트 탭 */}
        <div className="quest-tabs">
          <button 
            className={`quest-tab ${currentQuestTab === 'daily' ? 'active' : ''}`}
            onClick={() => switchQuestTab('daily')}
          >
            📅<br/>일일
          </button>
          <button 
            className={`quest-tab ${currentQuestTab === 'weekly' ? 'active' : ''}`}
            onClick={() => switchQuestTab('weekly')}
          >
            🗓️<br/>주간
          </button>
          <button 
            className={`quest-tab ${currentQuestTab === 'special' ? 'active' : ''}`}
            onClick={() => switchQuestTab('special')}
          >
            🌟<br/>특별
          </button>
          <button 
            className={`quest-tab ${currentQuestTab === 'legendary' ? 'active' : ''}`}
            onClick={() => switchQuestTab('legendary')}
          >
            👑<br/>전설
          </button>
        </div>

        {/* 일일 퀘스트 */}
        {currentQuestTab === 'daily' && (
          <div className="quest-section">
            <div className="quest-card completed">
              <div className="quest-header">
                <div className="quest-type-badge daily">일일</div>
                <div className="quest-status-icon status-completed">✅</div>
              </div>
              <div className="quest-title">🍖 펫에게 사료 주기</div>
              <div className="quest-description">
                우주견 코스모에게 맛있는 사료를 줘서 체력을 회복시켜주세요.
              </div>
              <div className="quest-progress">
                <div className="progress-bar">
                  <div className="progress-fill" style={{width: '100%'}}></div>
                </div>
                <div className="progress-text">
                  <span>진행률</span>
                  <span>1/1 완료</span>
                </div>
              </div>
              <div className="quest-reward">
                <div className="reward-info">
                  <div className="reward-icon">💰</div>
                  <div className="reward-details">
                    <div className="reward-name">5 KAIA</div>
                    <div className="reward-value">즉시 지급 완료</div>
                  </div>
                </div>
                <button className="claim-btn" disabled>
                  수령완료
                </button>
              </div>
            </div>

            <div className="quest-card in-progress">
              <div className="quest-header">
                <div className="quest-type-badge daily">일일</div>
                <div className="quest-status-icon status-progress">⏳</div>
              </div>
              <div className="quest-title">🏃‍♂️ 펫 훈련 3회 완료</div>
              <div className="quest-description">
                민첩성과 지능을 높이기 위해 펫 훈련을 3번 완료하세요.
              </div>
              <div className="quest-progress">
                <div className="progress-bar">
                  <div className="progress-fill" style={{width: '66%'}}></div>
                </div>
                <div className="progress-text">
                  <span>진행률</span>
                  <span>2/3 완료</span>
                </div>
              </div>
              <div className="quest-reward">
                <div className="reward-info">
                  <div className="reward-icon">⚙️</div>
                  <div className="reward-details">
                    <div className="reward-name">일반 엔진 NFT</div>
                    <div className="reward-value">추진력 +120</div>
                  </div>
                </div>
                <button className="claim-btn" disabled>
                  1회 더 필요
                </button>
              </div>
            </div>

            <div className="quest-card">
              <div className="quest-header">
                <div className="quest-type-badge daily">일일</div>
                <div className="quest-status-icon status-locked">🔒</div>
              </div>
              <div className="quest-title">🚀 아무 행성 탐험 1회</div>
              <div className="quest-description">
                어떤 행성이든 탐험을 성공적으로 완료하세요. NFT 4개가 소각되지만 토큰을 받을 수 있습니다.
              </div>
              <div className="quest-progress">
                <div className="progress-bar">
                  <div className="progress-fill" style={{width: '0%'}}></div>
                </div>
                <div className="progress-text">
                  <span>진행률</span>
                  <span>0/1 완료</span>
                </div>
              </div>
              <div className="quest-reward">
                <div className="reward-info">
                  <div className="reward-icon">💰</div>
                  <div className="reward-details">
                    <div className="reward-name">10 KAIA + 경험치</div>
                    <div className="reward-value">즉시 지급</div>
                  </div>
                </div>
                <button className="claim-btn" disabled>
                  탐험 필요
                </button>
              </div>
            </div>

            <div className="quest-card">
              <div className="quest-header">
                <div className="quest-type-badge daily">일일</div>
                <div className="quest-status-icon status-locked">🔒</div>
              </div>
              <div className="quest-title">💰 $10 DeFi 참여</div>
              <div className="quest-description">
                스테이킹, LP 제공, 렌딩 중 아무거나 $10 이상 참여하세요.
              </div>
              <div className="quest-progress">
                <div className="progress-bar">
                  <div className="progress-fill" style={{width: '0%'}}></div>
                </div>
                <div className="progress-text">
                  <span>진행률</span>
                  <span>$0/$10</span>
                </div>
              </div>
              <div className="quest-reward">
                <div className="reward-info">
                  <div className="reward-icon">⚙️</div>
                  <div className="reward-details">
                    <div className="reward-name">일반 엔진 NFT</div>
                    <div className="reward-value">추진력 +100</div>
                  </div>
                </div>
                <button className="claim-btn" disabled>
                  DeFi 참여 필요
                </button>
              </div>
            </div>
          </div>
        )}

        {/* 주간 퀘스트 */}
        {currentQuestTab === 'weekly' && (
          <div className="quest-section">
            <div className="quest-card">
              <div className="quest-header">
                <div className="quest-type-badge weekly">주간</div>
                <div className="quest-status-icon status-locked">🔒</div>
              </div>
              <div className="quest-title">💎 DeFi 마스터 (선택형)</div>
              <div className="quest-description">
                아래 옵션 중 하나를 선택하여 7일간 유지하세요. 모든 옵션의 보상은 동일합니다.
              </div>
              
              <div className="defi-options show">
                <div className="option-selector">
                  <div className="option-header">🎯 옵션을 선택하세요 (택1)</div>
                  <div className="option-buttons">
                    <div 
                      className={`option-btn ${selectedDefiOption === 'stake' ? 'selected' : ''}`}
                      onClick={() => selectDefiOption('stake')}
                    >
                      <div>💰 스테이킹</div>
                      <div className="option-details">$100, 7일 유지</div>
                    </div>
                    <div 
                      className={`option-btn ${selectedDefiOption === 'lp' ? 'selected' : ''}`}
                      onClick={() => selectDefiOption('lp')}
                    >
                      <div>🌊 LP 제공</div>
                      <div className="option-details">KAIA-USDT $100</div>
                    </div>
                    <div 
                      className={`option-btn ${selectedDefiOption === 'lending' ? 'selected' : ''}`}
                      onClick={() => selectDefiOption('lending')}
                    >
                      <div>🏦 렌딩</div>
                      <div className="option-details">$100 예치</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="quest-progress">
                <div className="progress-bar">
                  <div className="progress-fill" style={{width: '0%'}}></div>
                </div>
                <div className="progress-text">
                  <span>진행률</span>
                  <span>옵션 선택 필요</span>
                </div>
              </div>
              <div className="quest-reward">
                <div className="reward-info">
                  <div className="reward-icon">🔥</div>
                  <div className="reward-details">
                    <div className="reward-name">희귀 NFT</div>
                    <div className="reward-value">랜덤 희귀 등급</div>
                  </div>
                </div>
                <button className="select-btn" onClick={startDefiQuest}>
                  옵션 선택
                </button>
              </div>
            </div>

            <div className="quest-card">
              <div className="quest-header">
                <div className="quest-type-badge weekly">주간</div>
                <div className="quest-status-icon status-locked">🔒</div>
              </div>
              <div className="quest-title">🛍️ 마켓 거래왕</div>
              <div className="quest-description">
                마켓플레이스에서 총 50 KAIA 이상의 거래를 완료하세요.
              </div>
              <div className="quest-progress">
                <div className="progress-bar">
                  <div className="progress-fill" style={{width: '32%'}}></div>
                </div>
                <div className="progress-text">
                  <span>진행률</span>
                  <span>16/50 KAIA</span>
                </div>
              </div>
              <div className="quest-reward">
                <div className="reward-info">
                  <div className="reward-icon">⛽</div>
                  <div className="reward-details">
                    <div className="reward-name">희귀 연료통</div>
                    <div className="reward-value">용량 400L</div>
                  </div>
                </div>
                <button className="claim-btn" disabled>
                  34 KAIA 더 필요
                </button>
              </div>
            </div>
          </div>
        )}

        {/* 특별 퀘스트 */}
        {currentQuestTab === 'special' && (
          <div className="quest-section">
            <div className="quest-card">
              <div className="quest-header">
                <div className="quest-type-badge special">특별</div>
                <div className="quest-status-icon status-locked">🔒</div>
              </div>
              <div className="quest-title">🌟 DeFi 고수 (선택형)</div>
              <div className="quest-description">
                고난이도 DeFi 전략 중 하나를 선택하여 30일간 유지하세요.
              </div>
              
              <div className="defi-options show">
                <div className="option-selector">
                  <div className="option-header">🎯 고난이도 옵션 (택1)</div>
                  <div className="option-buttons">
                    <div 
                      className={`option-btn ${selectedDefiOption === 'high_stake' ? 'selected' : ''}`}
                      onClick={() => selectDefiOption('high_stake')}
                    >
                      <div>💰 고액 스테이킹</div>
                      <div className="option-details">$500, 30일</div>
                    </div>
                    <div 
                      className={`option-btn ${selectedDefiOption === 'multi_lp' ? 'selected' : ''}`}
                      onClick={() => selectDefiOption('multi_lp')}
                    >
                      <div>🌊 멀티 LP</div>
                      <div className="option-details">2개 풀 동시</div>
                    </div>
                    <div 
                      className={`option-btn ${selectedDefiOption === 'lending_borrow' ? 'selected' : ''}`}
                      onClick={() => selectDefiOption('lending_borrow')}
                    >
                      <div>🏦 렌딩+보로잉</div>
                      <div className="option-details">복합 전략</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="quest-progress">
                <div className="progress-bar">
                  <div className="progress-fill" style={{width: '0%'}}></div>
                </div>
                <div className="progress-text">
                  <span>진행률</span>
                  <span>옵션 선택 필요</span>
                </div>
              </div>
              <div className="quest-reward">
                <div className="reward-info">
                  <div className="reward-icon">⚡</div>
                  <div className="reward-details">
                    <div className="reward-name">전설 NFT</div>
                    <div className="reward-value">고성능 장비</div>
                  </div>
                </div>
                <button className="select-btn" onClick={startDefiQuest}>
                  옵션 선택
                </button>
              </div>
            </div>

            <div className="quest-card">
              <div className="quest-header">
                <div className="quest-type-badge special">특별</div>
                <div className="quest-status-icon status-locked">🔒</div>
              </div>
              <div className="quest-title">🪐 전설 행성 정복자</div>
              <div className="quest-description">
                베텔기우스, 안드로메다, 블랙홀 중 하나를 성공적으로 탐험하세요.
              </div>
              <div className="quest-progress">
                <div className="progress-bar">
                  <div className="progress-fill" style={{width: '0%'}}></div>
                </div>
                <div className="progress-text">
                  <span>진행률</span>
                  <span>0/1 완료</span>
                </div>
              </div>
              <div className="quest-reward">
                <div className="reward-info">
                  <div className="reward-icon">⚡</div>
                  <div className="reward-details">
                    <div className="reward-name">워프 드라이브</div>
                    <div className="reward-value">순간이동 능력</div>
                  </div>
                </div>
                <button className="claim-btn" disabled>
                  전설 행성 필요
                </button>
              </div>
            </div>
          </div>
        )}

        {/* 전설 퀘스트 */}
        {currentQuestTab === 'legendary' && (
          <div className="quest-section">
            <div className="quest-card">
              <div className="quest-header">
                <div className="quest-type-badge legendary">전설</div>
                <div className="quest-status-icon status-locked">🔒</div>
              </div>
              <div className="quest-title">💎 Yield Farming 마스터</div>
              <div className="quest-description">
                LP 제공 → 스테이킹 → 컴파운딩까지 모든 DeFi 전략을 90일간 운용하세요.
              </div>
              <div className="quest-progress">
                <div className="progress-bar">
                  <div className="progress-fill" style={{width: '5%'}}></div>
                </div>
                <div className="progress-text">
                  <span>진행률</span>
                  <span>5/90 일</span>
                </div>
              </div>
              <div className="quest-reward">
                <div className="reward-info">
                  <div className="reward-icon">🌌</div>
                  <div className="reward-details">
                    <div className="reward-name">우주 제조기</div>
                    <div className="reward-value">무한 NFT 생성</div>
                  </div>
                </div>
                <button className="claim-btn" disabled>
                  85일 더 필요
                </button>
              </div>
            </div>

            <div className="quest-card">
              <div className="quest-header">
                <div className="quest-type-badge legendary">전설</div>
                <div className="quest-status-icon status-locked">🔒</div>
              </div>
              <div className="quest-title">🏆 우주 정복자</div>
              <div className="quest-description">
                모든 행성을 성공적으로 탐험하고 랭킹 1위에 도달하세요.
              </div>
              <div className="quest-progress">
                <div className="progress-bar">
                  <div className="progress-fill" style={{width: '15%'}}></div>
                </div>
                <div className="progress-text">
                  <span>진행률</span>
                  <span>3/6 행성 + 47위</span>
                </div>
              </div>
              <div className="quest-reward">
                <div className="reward-info">
                  <div className="reward-icon">👑</div>
                  <div className="reward-details">
                    <div className="reward-name">황금 우주선</div>
                    <div className="reward-value">모든 능력치 +999</div>
                  </div>
                </div>
                <button className="claim-btn" disabled>
                  전설적 업적 필요
                </button>
              </div>
            </div>

            <div className="quest-card">
              <div className="quest-header">
                <div className="quest-type-badge legendary">전설</div>
                <div className="quest-status-icon status-locked">🔒</div>
              </div>
              <div className="quest-title">🤝 커뮤니티 리더</div>
              <div className="quest-description">
                LINE 친구 10명 초대 + 100명의 유저와 거래 완료하세요.
              </div>
              <div className="quest-progress">
                <div className="progress-bar">
                  <div className="progress-fill" style={{width: '3%'}}></div>
                </div>
                <div className="progress-text">
                  <span>진행률</span>
                  <span>0/10 친구 + 3/100 거래</span>
                </div>
              </div>
              <div className="quest-reward">
                <div className="reward-info">
                  <div className="reward-icon">🎭</div>
                  <div className="reward-details">
                    <div className="reward-name">특별 펫 스킨</div>
                    <div className="reward-value">유니크 외형 + 보너스</div>
                  </div>
                </div>
                <button className="claim-btn" disabled>
                  커뮤니티 활동 필요
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* DeFi 모달 */}
      {showDefiModal && (
        <div className="defi-modal">
          <div className="modal-content">
            <div className="modal-title" style={{fontSize: '18px', fontWeight: 'bold', marginBottom: '15px', color: '#FFD700'}}>
              {getDefiInfo(currentDefiType).title}
            </div>
            <div style={{fontSize: '12px', opacity: '0.8', marginBottom: '20px'}}>
              {getDefiInfo(currentDefiType).desc}
            </div>
            
            <div style={{background: 'rgba(255,255,255,0.1)', padding: '15px', borderRadius: '12px', marginBottom: '15px'}}>
              <div style={{fontSize: '12px', fontWeight: 'bold', marginBottom: '8px'}}>현재 APY</div>
              <div style={{fontSize: '20px', fontWeight: 'bold', color: '#4CAF50'}}>
                {getDefiInfo(currentDefiType).apy}
              </div>
            </div>
            
            <div style={{display: 'flex', gap: '10px', marginTop: '20px'}}>
              <button 
                style={{flex: 1, padding: '12px', border: 'none', borderRadius: '10px', background: 'rgba(255,255,255,0.2)', color: 'white', fontWeight: 'bold', cursor: 'pointer'}} 
                onClick={closeDefiModal}
              >
                취소
              </button>
              <button 
                style={{flex: 1, padding: '12px', border: 'none', borderRadius: '10px', background: 'linear-gradient(45deg, #4CAF50, #8BC34A)', color: 'white', fontWeight: 'bold', cursor: 'pointer'}} 
                onClick={participateDefi}
              >
                참여하기
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Quest;