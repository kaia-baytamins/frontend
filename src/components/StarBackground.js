import React, { useEffect } from 'react';
import './StarBackground.css';

function StarBackground() {
  useEffect(() => {
    // 별들에 랜덤 애니메이션 딜레이 적용
    const stars = document.querySelectorAll('.star');
    stars.forEach(star => {
      star.style.animationDelay = Math.random() * 3 + 's';
    });
  }, []);

  return (
    <div className="star-background">
      <div className="star" style={{top: '10%', left: '10%'}}>⭐</div>
      <div className="star" style={{top: '20%', right: '15%'}}>✨</div>
      <div className="star" style={{top: '40%', left: '20%'}}>⭐</div>
      <div className="star" style={{top: '60%', right: '25%'}}>✨</div>
      <div className="star" style={{top: '80%', left: '30%'}}>⭐</div>
      <div className="star" style={{top: '15%', left: '70%'}}>⭐</div>
      <div className="star" style={{top: '35%', right: '40%'}}>✨</div>
      <div className="star" style={{top: '55%', left: '60%'}}>⭐</div>
      <div className="star" style={{top: '75%', right: '10%'}}>✨</div>
      <div className="star" style={{top: '90%', left: '80%'}}>⭐</div>
    </div>
  );
}

export default StarBackground;