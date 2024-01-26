"use client"
import React from 'react';

const IconText = ({ title, text }) => {
  return (
    <div className="icon-text">
      <h2 className="icon-title">{title}</h2>
      <p className="icon-text">{text}</p>
      {/* Agrega imágenes según sea necesario */}
    </div>
  );
};

export default IconText;