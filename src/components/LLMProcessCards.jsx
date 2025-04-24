// components/LLMProcessCards.tsx
import React from 'react';

const LLMProcessCards = ({ steps }) => {
  return (
    <div style={containerStyle}>
      {steps.map((step, index) => (
        <React.Fragment key={index}>
          <div style={cardStyle}>
            <h3 style={cardTitleStyle}>{step.title}</h3>
            <ul style={listStyle}>
              {step.items.map((item, itemIndex) => (
                <li key={itemIndex} style={listItemStyle}>
                  <span style={bulletStyle}>•</span> {item}
                </li>
              ))}
            </ul>
          </div>
          {index < steps.length - 1 && (
            <div style={arrowStyle}>→</div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

const containerStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexWrap: 'wrap', // 允许换行，适应小屏幕
  margin: '30px 0',
};

const cardStyle = {
  border: '1px solid #eee',
  borderRadius: '8px',
  padding: '20px',
  margin: '10px',
  backgroundColor: '#fff',
  boxShadow: '0 2px 5px rgba(0, 0, 0, 0.05)',
  width: '250px', // 根据需要调整宽度
  minHeight: '200px', // 确保卡片高度一致
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
};

const cardTitleStyle = {
  fontSize: '1.2em',
  fontWeight: 'bold',
  color: '#0070f3', // 蓝色标题
  marginBottom: '15px',
  borderBottom: '1px solid #eee',
  paddingBottom: '10px',
};

const listStyle = {
  listStyle: 'none',
  padding: 0,
  margin: 0,
};

const listItemStyle = {
  marginBottom: '8px',
  lineHeight: '1.5',
  display: 'flex',
  alignItems: 'flex-start',
};

 const bulletStyle = {
    marginRight: '8px',
    color: '#0070f3', // 蓝色圆点
    fontSize: '1.2em',
    marginTop: '-2px', // 微调圆点位置
 }


const arrowStyle = {
  fontSize: '2em',
  color: '#0070f3', // 蓝色箭头
  margin: '0 15px',
  alignSelf: 'center', // 垂直居中箭头
};


export default LLMProcessCards;
