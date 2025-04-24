import React from 'react';

const ExampleBlock = ({ question, answer }) => {
  return (
    <div className="w-full px-4 mx-auto mb-8">

      {/* 用户部分 - 气泡靠左，标记在左侧 */}
      <div className="flex justify-start mb-4">
        {/* 使用 flex 容器来包含标记和气泡 */}
        <div className="flex items-start gap-2"> {/* 使用 items-start 使内容顶部对齐，gap-2 增加标记和气泡之间的间距 */}
          {/* 用户标记 */}
          <span className="text-sm font-semibold text-gray-700 mt-1">用户:</span> {/* 字体稍大，加粗，颜色稍深，mt-1 使标记与气泡顶部微调对齐 */}
          {/* 用户气泡 */}
          <div className="bg-gray-200 text-gray-800 rounded-lg p-4 min-w-32 max-w-sm shadow-md relative">
            <p className="leading-relaxed">{question}</p>
          </div>
        </div>
      </div>

      {/* AI部分 - 气泡靠右，标记在右侧 */}
      <div className="flex justify-end">
        {/* 使用 flex 容器来包含气泡和标记 */}
        <div className="flex items-start gap-2"> {/* 使用 items-start 使内容顶部对齐，gap-2 增加气泡和标记之间的间距 */}
          {/* AI气泡 */}
          <div className="bg-blue-500 text-white rounded-lg p-4 min-w-32 max-w-sm shadow-md relative">
            <p className="leading-relaxed">{answer}</p>
          </div>
           {/* AI标记 */}
           <span className="text-sm font-semibold text-gray-700 mt-1">:AI</span> {/* 字体稍大，加粗，颜色稍深，mt-1 使标记与气泡顶部微调对齐 */}
        </div>
      </div>
    </div>
  );
};

export default ExampleBlock;
