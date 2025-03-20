import * as React from 'react';
import { Drawer, Typography, Button, Image } from 'antd';
import { DownloadOutlined, CloseOutlined } from '@ant-design/icons';

// ✅ 直接使用 `import` 方式导入图片
import reportTemplate from '../assets/report-template.jpg';

const { Title } = Typography;

interface ReportPreviewProps {
  visible: boolean;
  onClose: () => void;
  reportTitle: string;
  downloadWordUrl?: string;
  downloadPdfUrl?: string;
}

const ReportPreview: React.FC<ReportPreviewProps> = ({
  visible,
  onClose,
  reportTitle,
  downloadWordUrl = '#',
  downloadPdfUrl = '#',
}) => {
  return (
    <Drawer
      title={
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Title level={4} style={{ color: '#1890ff', margin: 0 }}>{reportTitle || '报告预览'}</Title>
          <Button type="text" icon={<CloseOutlined />} onClick={onClose} />
        </div>
      }
      placement="right"
      width={500}
      onClose={onClose}
      open={visible}
      closable={false}
    >
      {/* ✅ 下载按钮 */}
      <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px', marginBottom: '10px' }}>
        <Button type="primary" icon={<DownloadOutlined />} onClick={() => window.open(downloadWordUrl)}>下载 Word</Button>
        <Button type="primary" icon={<DownloadOutlined />} onClick={() => window.open(downloadPdfUrl)}>下载 PDF</Button>
      </div>

      {/* ✅ 预览的报告图片 */}
      <Image
        src={reportTemplate}
        alt="报告模板"
        style={{ width: '100%', borderRadius: '5px', boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.1)' }}
      />
    </Drawer>
  );
};

export default ReportPreview;
