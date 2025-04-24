import React from 'react';
import './ExampleBlock.css'; // 导入 CSS 文件

const ExampleBlock = ({ question, answer }) => {
  return (
    <div className="example-block-container">
      <div className="example-block-question">
        <div className="example-block-label">问题：</div>
        <div className="example-block-content">{question}</div>
      </div>
      <div className="example-block-answer">
        <div className="example-block-label">回答：</div>
        <div className="example-block-content">{answer}</div>
      </div>
    </div>
  );
};

export default ExampleBlock;
