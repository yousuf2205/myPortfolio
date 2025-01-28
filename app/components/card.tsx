'use client'

import React, { useState } from 'react';
import styles from './card.module.css';
import Image from 'next/image';

const Card = () => {
    const [hoverDirections, setHoverDirections] = useState<{ x: number; y: number }[]>([]);

    const handleMouseMove = (e: React.MouseEvent, index: number) => {
      const { offsetWidth, offsetHeight } = e.currentTarget as HTMLDivElement;
      const x = (e.nativeEvent.offsetX / offsetWidth) * 2 - 1; // Normalize x position
      const y = (e.nativeEvent.offsetY / offsetHeight) * 2 - 1; // Normalize y position
  
      const newDirections = [...hoverDirections];
      newDirections[index] = { x, y }; // Update the direction for the specific card
      setHoverDirections(newDirections);
    };
  
    const handleMouseLeave = (index: number) => {
      const newDirections = [...hoverDirections];
      newDirections[index] = { x: 0, y: 0 }; // Reset hover direction for this card
      setHoverDirections(newDirections);
    };
  
    const cards = [
      { id: 1, title: 'Responsive Design', image: "/Responsive.svg" },
      { id: 2, title: 'User Friendly', image: "/userFriendly.svg" },
      { id: 3, title: 'Fast & Scalable', image: "/fast&scalable.svg"},
      // Add as many cards as you need
    ];
  return (
    <div className={styles.cardsContainer}>
      {cards.map((card, index) => (
        <div
        key={card.id}
        className={styles.card}
        onMouseMove={(e) => handleMouseMove(e, index)}
        onMouseLeave={() => handleMouseLeave(index)} // Call to reset hover state
        style={{
          transform: `perspective(1000px) rotateX(${hoverDirections[index]?.y * 25}deg) rotateY(${hoverDirections[index]?.x * 25}deg)`,
          transition: 'transform 0.2s ease-out', // Smooth reset transition
        }}
      >
          <div className={styles.cardContent}>
            <Image 
            src={card.image}
             alt='responsive image'
            width={70}
            height={70}
             />
            <h3>{card.title}</h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
