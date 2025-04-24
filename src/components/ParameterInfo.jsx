// components/ParameterInfo.jsx
import React from 'react';

const ParameterInfo = ({ name, description, range, impact, suggestion }) => {
  return (
    <div style={paramContainerStyle}>
      <h4 style={paramNameStyle}>{name}</h4>
      <p><strong style={paramLabelStyle}>作用：</strong> {description}</p>
      <p><strong style={paramLabelStyle}>取值范围：</strong> {range}</p>
      <p><strong style={paramLabelStyle}>影响：</strong> {impact}</p>
      <p><strong style={paramLabelStyle}>建议：</strong> {suggestion}</p>
    </div>
  );
};

const paramContainerStyle = {
  border: '1px solid #eee',
  borderRadius: '8px',
  padding: '15px',
  marginBottom: '20px',
  backgroundColor: '#fefefe', // 浅色背景
};

const paramNameStyle = {
  fontSize: '1.1em',
  fontWeight: 'bold',
  color: '#0070f3',
  marginBottom: '10px',
};

 const paramLabelStyle = {
    fontWeight: 'bold',
    marginRight: '5px',
 }


export default ParameterInfo;
