"use client"
import React from 'react';
import CardContainer from './CardContainer';
import CardExperience from './CardExperience';
import CardButton from './CardButton';
import CardPortfolio from './CardPortfolio';
import CardImage from './CardImage';

const MainComponent = () => {
  return (
    <div className="main">
      <CardContainer />
      <CardExperience />
      <CardButton />
      <CardPortfolio />
      <CardImage />
      {/* Agrega más componentes según sea necesario */}
    </div>
  );
};

export default MainComponent;