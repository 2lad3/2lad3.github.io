import * as React from 'react';
import { useState, useRef, ChangeEvent, MouseEvent } from 'react';
import { Typography, Card, Row, Col, Button, Radio, Space, Dropdown, Menu, Drawer, message } from 'antd';
import {
  FundProjectionScreenOutlined,
  CloudUploadOutlined,
  DatabaseOutlined,
  FormOutlined,
  FileTextOutlined,
  EyeOutlined,
  UserOutlined,
  CloseOutlined,
  DownloadOutlined,
} from '@ant-design/icons';
import ReportPreview from '../components/ReportPreview';
import { useNavigate } from 'react-router-dom';

const { Title, Text } = Typography;

interface ProjectEvaluationProps {
  openUploadSidebar?: () => void; // 可选：用于触发上传侧栏
}

const ProjectEvaluation: React.FC<ProjectEvaluationProps> = ({ openUploadSidebar }) => {
  const navigate = useNavigate();
  const [selectedTemplate, setSelectedTemplate] = useState<string>('template1');
  const [previewVisible, setPreviewVisible] = useState<boolean>(false);
  const [currentReport, setCurrentReport] = useState<{ title: string; wordUrl: string; pdfUrl: string } | null>(null);
  const [generateDrawerVisible, setGenerateDrawerVisible] = useState<boolean>(false);
  const [isGenerated, setIsGenerated] = useState<boolean>(false);

  // 用户菜单（可选）
  const userMenu = (
    <Menu>
      <Menu.Item key="1">个人中心</Menu.Item>
      <Menu.Item key="2">设置</Menu.Item>
      <Menu.Item key="3">退出登录</Menu.Item>
    </Menu>
  );

  // -------------------------
  // 上传新项目文件的交互
  // -------------------------
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleUploadNewProject = (e: MouseEvent) => {
    e.stopPropagation();
    if (openUploadSidebar) {
      openUploadSidebar();
    } else if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      console.log('上传新项目文件:', file);
      message.success(`${file.name} 上传成功`);
      // 清空文件输入
      e.target.value = '';
    }
  };

  // -------------------------
  // 点击“开始生成报告”或“重新生成报告”
  // -------------------------
  const handleGenerateReport = () => {
    setIsGenerated(true);
    setGenerateDrawerVisible(true);
    // 这里可以加入调用后端接口的逻辑
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
        <FundProjectionScreenOutlined
          style={{
            fontSize: '40px',
            color: '#1890ff',
            display: 'block',
            margin: '0 auto 10px',
          }}
        />
        <Title level={2} style={{ marginBottom: '10px' }}>项目评估报告生成</Title>
        <Text type="secondary">
          通过对项目数据的全方位分析，帮助您快速得出评估结论。
        </Text>
      </div>

      {/* 项目数据模块 */}
      <div style={{ width: '100%', marginBottom: '40px' }}>
        <Title level={4} style={{ color: '#1890ff', marginBottom: '20px' }}>
          <Space>
            <FormOutlined style={{ fontSize: '18px', color: '#1890ff' }} />
            项目数据
          </Space>
        </Title>
        <Row gutter={[16, 16]} justify="center">
          {/* 上传新项目 */}
          <Col xs={24} sm={12}>
            <Card hoverable style={{ textAlign: 'center' }} onClick={handleUploadNewProject}>
              <CloudUploadOutlined style={{ fontSize: '24px', color: '#1890ff' }} />
              <Title level={5}>上传新项目</Title>
              <Text type="secondary">上传新的项目可研文件（Word、PDF）</Text>
            </Card>
          </Col>
          {/* 项目数据库 */}
          <Col xs={24} sm={12}>
            <Card
              hoverable
              style={{ textAlign: 'center' }}
              onClick={() => navigate('/project-database')}
            >
              <DatabaseOutlined style={{ fontSize: '24px', color: '#1890ff' }} />
              <Title level={5}>项目数据库</Title>
              <Text type="secondary">管理并浏览历史项目数据</Text>
            </Card>
          </Col>
        </Row>
      </div>

      {/* 报告模板模块 */}
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
                {/* 预览按钮 */}
                <Button
                  type="text"
                  icon={<EyeOutlined />}
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentReport({
                      title: '项目评估模板1',
                      wordUrl: '/downloads/project-template1.docx',
                      pdfUrl: '/downloads/project-template1.pdf',
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
                {/* 预览按钮 */}
                <Button
                  type="text"
                  icon={<EyeOutlined />}
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentReport({
                      title: '项目评估模板2',
                      wordUrl: '/downloads/project-template2.docx',
                      pdfUrl: '/downloads/project-template2.pdf',
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

      {/* 报告预览侧栏 */}
      {currentReport && (
        <ReportPreview
          visible={previewVisible}
          onClose={() => setPreviewVisible(false)}
          reportTitle={currentReport.title || '项目评估报告预览'}
          downloadWordUrl={currentReport.wordUrl || '#'}
          downloadPdfUrl={currentReport.pdfUrl || '#'}
        />
      )}

      {/* 报告生成侧栏 */}
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
        {/* 下载按钮（蓝底白字） */}
        <div style={{ textAlign: 'right', marginBottom: '20px' }}>
          <Button
            type="primary"
            icon={<DownloadOutlined />}
            style={{
              backgroundColor: '#1890ff',
              border: 'none',
              marginRight: '10px',
            }}
            onClick={() => window.open('/downloads/project-report.docx')}
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
            onClick={() => window.open('/downloads/project-report.pdf')}
          >
            下载PDF
          </Button>
        </div>

        {/* 可视化展示生成内容区域 */}
        <div style={{ minHeight: '300px' }}>
          <p>这里是项目评估报告生成的可视化内容...</p>
          <p>可以展示图表、文本、或其他评估结果信息。</p>
        </div>
      </Drawer>

      {/* 隐藏的文件输入，用于上传新项目 */}
      <input
        type="file"
        accept=".doc,.docx,.pdf"
        style={{ display: 'none' }}
        ref={fileInputRef}
        onChange={handleFileChange}
      />
    </div>
  );
};

export default ProjectEvaluation;
