import * as React from 'react';
import { Layout } from 'antd';
import { Outlet, useLocation } from 'react-router-dom';
import Sidebar from '../components/Sidebar';

const { Sider, Content } = Layout;

const AppLayout: React.FC = () => {
  const location = useLocation(); // 获取当前路径

  // 判断是否是“项目数据库”页面
  const isProjectDatabasePage = location.pathname === '/project-database';

  return (
    <Layout style={{ minHeight: '100vh' }}>
      {/* 左侧导航栏 */}
      <Sider width={250} style={{ background: '#fff' }}>
        <Sidebar />
      </Sider>

      {/* 右侧主内容区域 */}
      <Layout
        style={{
          display: 'flex',
          flexDirection: 'column',
          flex: 1,
          overflow: 'hidden',
        }}
      >
        <Content
          style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            overflow: 'auto',
            background: '#f0f2f5',
            padding: isProjectDatabasePage ? '0' : '16px', // 项目数据库无边距，其他页面有
            alignItems: isProjectDatabasePage ? 'stretch' : 'center', // 其他页面居中
            justifyContent: isProjectDatabasePage ? 'flex-start' : 'center', // 其他页面垂直居中
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default AppLayout;
