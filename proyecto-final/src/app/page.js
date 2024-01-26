'use client'
import React from 'react';
import CardButton from './CardButton';  
import CardContainer from './CardContainer';  
import CardExperience from './CardExperience';  
import CardIcon from './CardIcon';  
import CardPortfolio from './CardPortfolio';  

export default function Home() {
  return (
    <div>
      <h1>Bienvenido a Mi Aplicación</h1>
      
      <CardContainer />
      
      <p>Explora nuestras increíbles características:</p>
      <CardButton />
      <CardExperience />
      <CardIcon />
      <CardPortfolio />

      <p>¿Listo para comenzar? <a href="/registro">Regístrate ahora</a>.</p>
    </div>
  );
}