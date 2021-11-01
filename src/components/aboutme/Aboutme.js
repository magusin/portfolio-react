import React from 'react';
import "./aboutme.css";
import * as THREE from 'three';
import MindMapNode from './MindMapNode';

const Aboutme = () => {
    return (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexWrap: 'wrap',
            width: '300px'
          }}
        >
          <div style={{ margin: '5px' }}>
            <MindMapNode level={0} label="Hugo JACQUES" />
          </div>
          <div style={{ margin: '5px' }}>
            <MindMapNode level={1} label="Motivation" />
          </div>
          <div style={{ margin: '5px' }}>
            <MindMapNode level={2} label="Personnalité" />
          </div>
          <div style={{ margin: '5px' }}>
            <MindMapNode level={3} label="Passé" />
          </div>
        </div>
      );
        }

export default Aboutme;
