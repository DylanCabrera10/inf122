"use client"
import React from 'react';
import CardIcon from './CardIcon';
import IconText from './IconText';

const CardContainer = () => {
  return (
    <div className="card-container">
      <CardIcon />
      <IconText title="Victor Alvarado" text="Software Enginner" />
      {/* Agrega las imágenes y enlaces según sea necesario */}
    </div>
  );
};

export default CardContainer;