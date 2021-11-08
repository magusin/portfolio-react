import React, { createRef, useEffect } from 'react';
import renderMindMap from './renderMindMap';
import "./aboutme.css";

export default function Aboutme() {
  const divRef = createRef();
  useEffect(() => renderMindMap(divRef.current), [divRef]);
  return (
    
  <div className="about-me" ref={divRef} />
    
  );
}