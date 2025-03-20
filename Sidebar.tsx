import * as React from 'react';
import { useState } from 'react';
import { Layout, Menu, Input, Button, Divider, Collapse } from 'antd';
import {
  MessageOutlined,
  BarChartOutlined,
  ProjectOutlined,
  DeleteOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined
} from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

const { Sider } = Layout;
const { Search } = Input;
const { Panel } = Collapse;

const Sidebar: React.FC = () => {
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);
  const [selectedKey, setSelectedKey] = useState<string[]>(['/analysis']);

  // 处理菜单点击
  const handleMenuClick = (e: { key: string }) => {
    setSelectedKey([e.key]);
    navigate(e.key);
  };

  // 切换侧边栏展开/收缩
  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  // 最近对话数据（模拟）
  const chatHistory = {
    today: ['对话 1', '对话 2', '对话 3'],
    week: ['对话 4', '对话 5', '对话 6'],
    month: ['对话 7', '对话 8', '对话 9', '对话 10'],
  };

  return (
    <Sider
      width={250}
      collapsible
      collapsed={collapsed}
      trigger={null}
      style={{ background: '#fff', padding: '10px', transition: 'width 0.3s' }}
    >
      {/* 侧边栏收缩/展开按钮 */}
      <Button
        type="text"
        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        onClick={toggleSidebar}
        style={{ position: 'absolute', top: 10, right: 10, zIndex: 100 }}
      />

      {/* Logo */}
      {!collapsed && (
        <div style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '10px', textAlign: 'center' }}>
          <span style={{ color: '#1890ff' }}>AI</span> PowerMind
        </div>
      )}

      {/* 搜索框 */}
      {!collapsed && <Search placeholder="搜索历史对话" style={{ marginBottom: '10px' }} />}

      {/* 导航菜单 */}
      <Menu mode="vertical" selectedKeys={selectedKey} onClick={handleMenuClick}>
        <Menu.Item key="/qa" icon={<MessageOutlined />}>
          智能问答
        </Menu.Item>
        <Menu.Item key="/analysis" icon={<BarChartOutlined />}>
          故障分析
        </Menu.Item>
        <Menu.Item key="/project-evaluation" icon={<ProjectOutlined />}>
          项目评估
        </Menu.Item>
      </Menu>

      {/* 分隔线 */}
      <Divider />

      {/* 最近对话标题 */}
      {!collapsed && (
        <div style={{ fontWeight: 'bold', marginBottom: '5px', fontSize: '14px' }}>最近对话</div>
      )}

      {/* 纵向分类的最近对话 */}
      {!collapsed && (
        <Collapse defaultActiveKey={['1', '2', '3']} ghost>
          <Panel header="今天" key="1">
            {chatHistory.today.map((chat, index) => (
              <div
                key={index}
                style={{ padding: '5px 10px', cursor: 'pointer', color: '#1890ff' }}
                onClick={() => console.log(`点击了 ${chat}`)}
              >
                {chat}
              </div>
            ))}
          </Panel>
          <Panel header="7天内" key="2">
            {chatHistory.week.map((chat, index) => (
              <div
                key={index}
                style={{ padding: '5px 10px', cursor: 'pointer', color: '#1890ff' }}
                onClick={() => console.log(`点击了 ${chat}`)}
              >
                {chat}
              </div>
            ))}
          </Panel>
          <Panel header="30天内" key="3">
            {chatHistory.month.map((chat, index) => (
              <div
                key={index}
                style={{ padding: '5px 10px', cursor: 'pointer', color: '#1890ff' }}
                onClick={() => console.log(`点击了 ${chat}`)}
              >
                {chat}
              </div>
            ))}
          </Panel>
        </Collapse>
      )}

      {/* 清除所有对话按钮 */}
      {!collapsed && (
        <Button type="primary" danger icon={<DeleteOutlined />} style={{ width: '100%', marginTop: '10px' }}>
          清除所有对话
        </Button>
      )}
    </Sider>
  );
};

export default Sidebar;
