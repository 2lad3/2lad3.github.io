import * as React from 'react';
import { useState } from 'react';
import { Typography, Card, Row, Col, Button, Radio, Space, Dropdown, Menu, Drawer } from 'antd';
import {
  ExclamationCircleOutlined,
  CloudUploadOutlined,
  SyncOutlined,
  FormOutlined,
  FileTextOutlined,
  EyeOutlined,
  UserOutlined,
  CloseOutlined,
  DownloadOutlined,
} from '@ant-design/icons';
import ReportPreview from '../components/ReportPreview'; // ✅ 引入 ReportPreview 组件

const { Title, Text } = Typography;

// ✅ 添加 `openUploadSidebar` 作为 `props`
interface HomeProps {
  openUploadSidebar: () => void;
}

const Home: React.FC<HomeProps> = ({ openUploadSidebar }) => {
  const [selectedTemplate, setSelectedTemplate] = useState<string>('template1');

  // ✅ 报告预览侧栏状态
  const [previewVisible, setPreviewVisible] = useState<boolean>(false);
  const [currentReport, setCurrentReport] = useState<{ title: string; wordUrl: string; pdfUrl: string } | null>(null);

  // ✅ 生成报告侧栏状态
  const [generateDrawerVisible, setGenerateDrawerVisible] = useState<boolean>(false);

  // ✅ 是否已经生成过报告，用于切换按钮样式/文字
  const [isGenerated, setIsGenerated] = useState<boolean>(false);

  // 用户菜单（可选）
  const userMenu = (
    <Menu>
      <Menu.Item key="1">个人中心</Menu.Item>
      <Menu.Item key="2">设置</Menu.Item>
      <Menu.Item key="3">退出登录</Menu.Item>
    </Menu>
  );

  // ✅ 点击“开始生成报告”或“重新生成报告”
  const handleGenerateReport = () => {
    // 生成报告逻辑（此处仅做示例）
    setIsGenerated(true);
    setGenerateDrawerVisible(true);
    // 你也可以在这里发起后端请求，等待生成完成后再 setGenerateDrawerVisible(true)
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        maxWidth: '1000px',
        position: 'relative',
      }}
    >
      {/* 右上角用户头像按钮 */}
      <div style={{ position: 'absolute', top: 20, right: 20 }}>
        <Dropdown overlay={userMenu} placement="bottomRight">
          <Button type="text" icon={<UserOutlined style={{ fontSize: '24px' }} />} />
        </Dropdown>
      </div>

      {/* 标题 & 说明区域 */}
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <ExclamationCircleOutlined
          style={{
            fontSize: '40px',
            color: '#1890ff',
            display: 'block',
            margin: '0 auto 10px',
          }}
        />
        <Title level={2} style={{ marginBottom: '10px' }}>故障分析报告生成</Title>
        <Text type="secondary">
          快速捕捉数据读取、故障分析、报告生成的全流程，让您的报告随手可得~
        </Text>
      </div>

      {/* 输入数据模块 */}
      <div style={{ width: '100%', marginBottom: '40px' }}>
        <Title level={4} style={{ color: '#1890ff', marginBottom: '20px' }}>
          <Space>
            <FormOutlined style={{ fontSize: '18px', color: '#1890ff' }} />
            输入数据
          </Space>
        </Title>
        <Row gutter={[16, 16]} justify="center">
          <Col xs={24} sm={12}>
            <Card hoverable style={{ textAlign: 'center' }} onClick={() => console.log('同步数据')}>
              <SyncOutlined style={{ fontSize: '24px', color: '#1890ff' }} />
              <Title level={5}>同步数据</Title>
              <Text type="secondary">通过接口同步系统数据</Text>
            </Card>
          </Col>
          <Col xs={24} sm={12}>
            <Card hoverable style={{ textAlign: 'center' }} onClick={openUploadSidebar}>
              <CloudUploadOutlined style={{ fontSize: '24px', color: '#1890ff' }} />
              <Title level={5}>上传文件</Title>
              <Text type="secondary">根据上传的文件内容创建报告</Text>
            </Card>
          </Col>
        </Row>
      </div>

      {/* 选择报告模板 */}
      <div style={{ width: '100%', marginBottom: '40px' }}>
        <Title level={4} style={{ color: '#1890ff', marginBottom: '20px' }}>
          <Space>
            <FileTextOutlined style={{ fontSize: '18px', color: '#1890ff' }} />
            报告模板
          </Space>
        </Title>
        <Radio.Group
          value={selectedTemplate}
          onChange={(e) => setSelectedTemplate(e.target.value)}
          style={{ width: '100%' }}
        >
          <Row gutter={[16, 16]} justify="center">
            {/* 模板 1 */}
            <Col xs={24} sm={12}>
              <Card
                hoverable
                style={{
                  position: 'relative',
                  textAlign: 'center',
                  border: selectedTemplate === 'template1' ? '2px solid #1890ff' : '',
                  padding: '20px',
                }}
                onClick={() => setSelectedTemplate('template1')}
              >
                {/* ✅ 预览按钮 */}
                <Button
                  type="text"
                  icon={<EyeOutlined />}
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentReport({
                      title: '报告模板1',
                      wordUrl: '/downloads/template1.docx',
                      pdfUrl: '/downloads/template1.pdf',
                    });
                    setPreviewVisible(true);
                  }}
                  style={{ position: 'absolute', top: 10, right: 10, color: '#1890ff' }}
                />
                <Radio value="template1">报告模板1</Radio>
              </Card>
            </Col>

            {/* 模板 2 */}
            <Col xs={24} sm={12}>
              <Card
                hoverable
                style={{
                  position: 'relative',
                  textAlign: 'center',
                  border: selectedTemplate === 'template2' ? '2px solid #1890ff' : '',
                  padding: '20px',
                }}
                onClick={() => setSelectedTemplate('template2')}
              >
                {/* ✅ 预览按钮 */}
                <Button
                  type="text"
                  icon={<EyeOutlined />}
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentReport({
                      title: '报告模板2',
                      wordUrl: '/downloads/template2.docx',
                      pdfUrl: '/downloads/template2.pdf',
                    });
                    setPreviewVisible(true);
                  }}
                  style={{ position: 'absolute', top: 10, right: 10, color: '#1890ff' }}
                />
                <Radio value="template2">报告模板2</Radio>
              </Card>
            </Col>
          </Row>
        </Radio.Group>
      </div>

      {/* 生成报告按钮 */}
      <div style={{ textAlign: 'center', width: '100%' }}>
        <Button
          size="large"
          style={{
            width: '100%',
            maxWidth: '400px',
            // ✅ 如果已生成报告，则按钮变成红底白字
            backgroundColor: isGenerated ? '#f5222d' : '#1890ff',
            color: '#fff',
            border: 'none',
          }}
          onClick={handleGenerateReport}
        >
          {isGenerated ? '重新生成报告' : '开始生成报告'}
        </Button>

        <Text type="secondary" style={{ display: 'block', marginTop: '10px' }}>
          内容由AI生成，请仔细检查
        </Text>
      </div>

      {/* ✅ 报告预览侧栏 */}
      {currentReport && (
        <ReportPreview
          visible={previewVisible}
          onClose={() => setPreviewVisible(false)}
          reportTitle={currentReport.title || '报告预览'}
          downloadWordUrl={currentReport.wordUrl || '#'}
          downloadPdfUrl={currentReport.pdfUrl || '#'}
        />
      )}

      {/* ✅ 报告生成侧栏 */}
      <Drawer
        title={
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Title level={4} style={{ color: '#1890ff', margin: 0 }}>报告概览</Title>
            <Button type="text" icon={<CloseOutlined />} onClick={() => setGenerateDrawerVisible(false)} />
          </div>
        }
        placement="right"
        width={500}
        onClose={() => setGenerateDrawerVisible(false)}
        open={generateDrawerVisible}
        closable={false}
      >
        {/* 这里是可视化展示生成内容的区域 */}
        <div style={{ minHeight: '300px' }}>
          {/* 🔹 在此放置两个蓝底白字的按钮 */}
          <div style={{ textAlign: 'right', marginBottom: '20px' }}>
            <Button
              type="primary"
              icon={<DownloadOutlined />}
              style={{
                backgroundColor: '#1890ff',
                border: 'none',
                marginRight: '10px',
              }}
            >
              下载Word
            </Button>
            <Button
              type="primary"
              icon={<DownloadOutlined />}
              style={{
                backgroundColor: '#1890ff',
                border: 'none',
              }}
            >
              下载PDF
            </Button>
          </div>

          <p>在这里展示生成的报告信息...</p>
          <p>你可以在此放置图表、文本、或其他可视化组件。</p>
        </div>
      </Drawer>
    </div>
  );
};

export default Home;
