import * as React from 'react';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppLayout from './layout/Layout';
import Home from './pages/Home';
import UploadSidebar from './components/UploadSidebar';
import ProjectEvaluation from './pages/ProjectEvaluation';
import ProjectDatabase from './pages/ProjectDatabase'; // ✅ 添加 ProjectDatabase 导入

const App: React.FC = () => {
  // 控制上传侧栏的显示/隐藏
  const [uploadVisible, setUploadVisible] = useState(false);

  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<AppLayout />}>
          {/* 故障分析报告生成页面 */}
          <Route index element={<Home openUploadSidebar={() => setUploadVisible(true)} />} />
          <Route path="analysis" element={<Home openUploadSidebar={() => setUploadVisible(true)} />} />
          {/* 项目评估报告生成页面 */}
          <Route path="project-evaluation" element={<ProjectEvaluation />} />
          {/* ✅ 添加项目数据库页面路由 */}
          <Route path="project-database" element={<ProjectDatabase />} />
        </Route>
      </Routes>

      {/* 右侧弹出的上传文件侧栏 */}
      <UploadSidebar visible={uploadVisible} onClose={() => setUploadVisible(false)} />
    </BrowserRouter>
  );
};

export default App;
