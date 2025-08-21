import React, { useState } from 'react';
import './Market.css';

function Market() {
  const [currentCategory, setCurrentCategory] = useState('all');
  const [currentMarketType, setCurrentMarketType] = useState('mint');
  const [showItemModal, setShowItemModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const itemData = {
    'basic_engine': {
      name: '기본 엔진 MK-1',
      icon: '⚙️',
      stats: '추진력 +100',
      price: '2 KAIA',
      seller: '보급형 아이템',
      type: 'mint'
    },
    'advanced_engine': {
      name: '플라즈마 엔진',
      icon: '🔥',
      stats: '추진력 +180',
      price: '8 KAIA',
      seller: '보급형 아이템',
      type: 'mint'
    },
    'turbo_v5': {
      name: '터보 엔진 V5',
      icon: '⚙️',
      stats: '추진력 +250',
      price: '15 KAIA',
      seller: 'SpaceTrader님이 판매',
      type: 'user'
    },
    'warp_drive': {
      name: '워프 드라이브',
      icon: '⚡',
      stats: '순간이동 능력',
      price: '50 KAIA',
      seller: 'CosmicMaster님이 판매 (퀘스트 전용)',
      type: 'quest'
    },
    'basic_glass': {
      name: '기본 강화유리',
      icon: '🛡️',
      stats: '방어력 +50',
      price: '1.5 KAIA',
      seller: '보급형 아이템',
      type: 'mint'
    },
    'crystal_glass': {
      name: '크리스탈 유리',
      icon: '💎',
      stats: '방어력 +120',
      price: '6 KAIA',
      seller: '보급형 아이템',
      type: 'mint'
    },
    'basic_fuel': {
      name: '표준 연료통',
      icon: '⛽',
      stats: '용량 200L',
      price: '2 KAIA',
      seller: '보급형 아이템',
      type: 'mint'
    },
    'large_fuel': {
      name: '대형 연료통',
      icon: '🛢️',
      stats: '용량 500L',
      price: '7 KAIA',
      seller: '보급형 아이템',
      type: 'mint'
    }
  };

  const filterCategory = (category) => {
    setCurrentCategory(category);
  };

  const switchMarketType = (type) => {
    setCurrentMarketType(type);
  };

  const searchItems = (query) => {
    const items = document.querySelectorAll('.item-card');
    const searchTerm = query.toLowerCase();
    
    items.forEach(item => {
      const itemName = item.querySelector('.item-name')?.textContent.toLowerCase();
      if (itemName && (itemName.includes(searchTerm) || searchTerm === '')) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  };

  const sortItems = (sortType) => {
    // 정렬 로직은 실제 구현에서 데이터 정렬로 처리
    console.log('Sorting by:', sortType);
  };

  const openItemModal = (itemId) => {
    const item = itemData[itemId];
    if (item) {
      setSelectedItem(item);
      setShowItemModal(true);
    }
  };

  const closeModal = () => {
    setShowItemModal(false);
    setSelectedItem(null);
  };

  const purchaseItem = () => {
    if (selectedItem && window.confirm(`${selectedItem.name}을(를) ${selectedItem.price}에 구매하시겠습니까?`)) {
      alert(`🎉 구매 완료!\n${selectedItem.name}이(가) 인벤토리에 추가되었습니다.`);
      closeModal();
    }
  };

  const openSellModal = () => {
    alert('🎒 인벤토리에서 판매할 아이템을 선택해주세요!\n\n보유 아이템:\n⚙️ 터보 엔진 V3 (1개)\n🔥 플라즈마 엔진 (2개)\n⛽ 대형 연료통 (1개)\n💎 다이아몬드 유리 (1개)\n\n가격을 직접 설정할 수 있습니다.');
  };

  return (
    <div className="market-page">
      <div className="container">
        {/* 헤더 */}
        <div className="header">
          <div className="page-title">🛍️ 마켓플레이스</div>
          <div className="wallet-info">
            <span>💰 1,250 KAIA</span>
          </div>
        </div>

        {/* 검색 및 필터 */}
        <div className="search-section">
          <input 
            type="text" 
            className="search-bar" 
            placeholder="🔍 아이템 이름 검색..." 
            onKeyUp={(e) => searchItems(e.target.value)}
          />
          
          <div className="filter-tabs">
            <button 
              className={`filter-tab ${currentCategory === 'all' ? 'active' : ''}`}
              onClick={() => filterCategory('all')}
            >
              전체
            </button>
            <button 
              className={`filter-tab ${currentCategory === 'engine' ? 'active' : ''}`}
              onClick={() => filterCategory('engine')}
            >
              ⚙️ 엔진
            </button>
            <button 
              className={`filter-tab ${currentCategory === 'material' ? 'active' : ''}`}
              onClick={() => filterCategory('material')}
            >
              🛡️ 우주선소재
            </button>
            <button 
              className={`filter-tab ${currentCategory === 'special' ? 'active' : ''}`}
              onClick={() => filterCategory('special')}
            >
              ⚡ 특수장비
            </button>
            <button 
              className={`filter-tab ${currentCategory === 'fuel' ? 'active' : ''}`}
              onClick={() => filterCategory('fuel')}
            >
              ⛽ 연료통
            </button>
          </div>

          <div className="market-type-toggle">
            <button 
              className={`toggle-btn ${currentMarketType === 'mint' ? 'active' : ''}`}
              onClick={() => switchMarketType('mint')}
            >
              🏭 보급형
            </button>
            <button 
              className={`toggle-btn ${currentMarketType === 'user' ? 'active' : ''}`}
              onClick={() => switchMarketType('user')}
            >
              👥 사용자
            </button>
          </div>
        </div>

        {/* 보급형 마켓 (민팅) */}
        {currentMarketType === 'mint' && (
          <div className="market-section">
            <div className="section-header">
              <div className="section-title">🏭 보급형 아이템 (즉시 구매)</div>
              <select className="sort-select" onChange={(e) => sortItems(e.target.value)}>
                <option value="price-low">가격 낮은순</option>
                <option value="price-high">가격 높은순</option>
                <option value="popular">인기순</option>
              </select>
            </div>

            <div className="items-grid">
              {/* 엔진 카테고리 */}
              <div 
                className={`item-card common ${(currentCategory === 'all' || currentCategory === 'engine') ? '' : 'hidden'}`}
                data-category="engine"
                onClick={() => openItemModal('basic_engine')}
              >
                <div className="item-type-badge mint-badge">보급형</div>
                <div className="item-icon">⚙️</div>
                <div className="item-name">기본 엔진 MK-1</div>
                <div className="item-stats">추진력 +100</div>
                <div className="item-price">
                  <div className="price-amount">2 KAIA</div>
                  <button className="buy-btn">구매</button>
                </div>
              </div>

              <div 
                className={`item-card rare ${(currentCategory === 'all' || currentCategory === 'engine') ? '' : 'hidden'}`}
                data-category="engine"
                onClick={() => openItemModal('advanced_engine')}
              >
                <div className="item-type-badge mint-badge">보급형</div>
                <div className="item-icon">🔥</div>
                <div className="item-name">플라즈마 엔진</div>
                <div className="item-stats">추진력 +180</div>
                <div className="item-price">
                  <div className="price-amount">8 KAIA</div>
                  <button className="buy-btn">구매</button>
                </div>
              </div>

              {/* 우주선 소재 카테고리 */}
              <div 
                className={`item-card common ${(currentCategory === 'all' || currentCategory === 'material') ? '' : 'hidden'}`}
                data-category="material"
                onClick={() => openItemModal('basic_glass')}
              >
                <div className="item-type-badge mint-badge">보급형</div>
                <div className="item-icon">🛡️</div>
                <div className="item-name">기본 강화유리</div>
                <div className="item-stats">방어력 +50</div>
                <div className="item-price">
                  <div className="price-amount">1.5 KAIA</div>
                  <button className="buy-btn">구매</button>
                </div>
              </div>

              <div 
                className={`item-card rare ${(currentCategory === 'all' || currentCategory === 'material') ? '' : 'hidden'}`}
                data-category="material"
                onClick={() => openItemModal('crystal_glass')}
              >
                <div className="item-type-badge mint-badge">보급형</div>
                <div className="item-icon">💎</div>
                <div className="item-name">크리스탈 유리</div>
                <div className="item-stats">방어력 +120</div>
                <div className="item-price">
                  <div className="price-amount">6 KAIA</div>
                  <button className="buy-btn">구매</button>
                </div>
              </div>

              {/* 연료통 카테고리 */}
              <div 
                className={`item-card common ${(currentCategory === 'all' || currentCategory === 'fuel') ? '' : 'hidden'}`}
                data-category="fuel"
                onClick={() => openItemModal('basic_fuel')}
              >
                <div className="item-type-badge mint-badge">보급형</div>
                <div className="item-icon">⛽</div>
                <div className="item-name">표준 연료통</div>
                <div className="item-stats">용량 200L</div>
                <div className="item-price">
                  <div className="price-amount">2 KAIA</div>
                  <button className="buy-btn">구매</button>
                </div>
              </div>

              <div 
                className={`item-card rare ${(currentCategory === 'all' || currentCategory === 'fuel') ? '' : 'hidden'}`}
                data-category="fuel"
                onClick={() => openItemModal('large_fuel')}
              >
                <div className="item-type-badge mint-badge">보급형</div>
                <div className="item-icon">🛢️</div>
                <div className="item-name">대형 연료통</div>
                <div className="item-stats">용량 500L</div>
                <div className="item-price">
                  <div className="price-amount">7 KAIA</div>
                  <button className="buy-btn">구매</button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 사용자 마켓 */}
        {currentMarketType === 'user' && (
          <div className="market-section">
            <div className="section-header">
              <div className="section-title">👥 사용자 판매 아이템</div>
              <select className="sort-select" onChange={(e) => sortItems(e.target.value)}>
                <option value="price-low">가격 낮은순</option>
                <option value="price-high">가격 높은순</option>
                <option value="recent">최신순</option>
              </select>
            </div>

            <div className="items-grid">
              <div 
                className={`item-card legendary ${(currentCategory === 'all' || currentCategory === 'engine') ? '' : 'hidden'}`}
                data-category="engine"
                onClick={() => openItemModal('turbo_v5')}
              >
                <div className="item-type-badge user-badge">사용자</div>
                <div className="item-icon">⚙️</div>
                <div className="item-name">터보 엔진 V5</div>
                <div className="item-stats">추진력 +250</div>
                <div className="item-price">
                  <div className="price-amount">15 KAIA</div>
                  <div className="seller-info">by SpaceTrader</div>
                </div>
              </div>

              <div 
                className={`item-card legendary ${(currentCategory === 'all' || currentCategory === 'special') ? '' : 'hidden'}`}
                data-category="special"
                onClick={() => openItemModal('warp_drive')}
              >
                <div className="item-type-badge quest-badge">퀘스트</div>
                <div className="item-icon">⚡</div>
                <div className="item-name">워프 드라이브</div>
                <div className="item-stats">순간이동</div>
                <div className="item-price">
                  <div className="price-amount">50 KAIA</div>
                  <div className="seller-info">by CosmicMaster</div>
                </div>
              </div>

              <div className="item-card rare" data-category="material">
                <div className="item-type-badge user-badge">사용자</div>
                <div className="item-icon">🛡️</div>
                <div className="item-name">티타늄 장갑</div>
                <div className="item-stats">방어력 +200</div>
                <div className="item-price">
                  <div className="price-amount">12 KAIA</div>
                  <div className="seller-info">by PlanetHunter</div>
                </div>
              </div>

              <div className="item-card legendary" data-category="fuel">
                <div className="item-type-badge quest-badge">퀘스트</div>
                <div className="item-icon">🌟</div>
                <div className="item-name">퀀텀 연료통</div>
                <div className="item-stats">무한 용량</div>
                <div className="item-price">
                  <div className="price-amount">100 KAIA</div>
                  <div className="seller-info">by QuantumExplorer</div>
                </div>
              </div>

              <div className="item-card rare" data-category="engine">
                <div className="item-type-badge user-badge">사용자</div>
                <div className="item-icon">💫</div>
                <div className="item-name">이온 엔진</div>
                <div className="item-stats">추진력 +200</div>
                <div className="item-price">
                  <div className="price-amount">9.5 KAIA</div>
                  <div className="seller-info">by SpaceEngineer</div>
                </div>
              </div>

              <div className="item-card rare" data-category="special">
                <div className="item-type-badge user-badge">사용자</div>
                <div className="item-icon">📡</div>
                <div className="item-name">고급 스캐너</div>
                <div className="item-stats">탐지력 +150</div>
                <div className="item-price">
                  <div className="price-amount">8 KAIA</div>
                  <div className="seller-info">by TechMaster</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 내 판매 현황 */}
        <div className="my-sales">
          <div className="section-title" style={{marginBottom: '15px'}}>📦 내 판매 현황</div>
          <button className="sell-btn" onClick={openSellModal}>
            + 내 아이템 판매하기
          </button>
          
          <div className="my-items-grid">
            <div className="my-item">
              <div className="selling-indicator"></div>
              <div className="my-item-icon">🔥</div>
              <div className="my-item-name">플라즈마 엔진</div>
              <div className="my-item-price">10 KAIA</div>
            </div>
            
            <div className="my-item">
              <div className="my-item-icon">⛽</div>
              <div className="my-item-name">대형 연료통</div>
              <div className="my-item-price">판매 대기</div>
            </div>
            
            <div className="my-item">
              <div className="selling-indicator"></div>
              <div className="my-item-icon">💎</div>
              <div className="my-item-name">다이아몬드 유리</div>
              <div className="my-item-price">25 KAIA</div>
            </div>
          </div>
        </div>
      </div>

      {/* 아이템 상세 모달 */}
      {showItemModal && selectedItem && (
        <div className="item-modal">
          <div className="modal-content">
            <div className="modal-item-icon">{selectedItem.icon}</div>
            <div className="modal-name">{selectedItem.name}</div>
            <div className="modal-stats">{selectedItem.stats}</div>
            <div className="modal-price">{selectedItem.price}</div>
            <div className="modal-seller">{selectedItem.seller}</div>
            
            <div className="modal-buttons">
              <button className="modal-btn btn-secondary" onClick={closeModal}>취소</button>
              <button className="modal-btn btn-primary" onClick={purchaseItem}>구매하기</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Market;