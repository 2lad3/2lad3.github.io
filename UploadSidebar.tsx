import * as React from 'react';
import { useState } from 'react';
import { Drawer, Typography, Button, List, Upload, message } from 'antd';
import { DownloadOutlined, UploadOutlined, CheckCircleOutlined, CloseOutlined, DeleteOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;

interface UploadSidebarProps {
  visible: boolean;
  onClose: () => void;
}

// ✅ 定义上传文件的类型
interface UploadItem {
  id: number;
  name: string;
  required: boolean;
  description: string;
  template?: string; // 只有前 5 个才有
  uploaded: boolean;
  file: File | null;
}

const UploadSidebar: React.FC<UploadSidebarProps> = ({ visible, onClose }) => {
  // ✅ 文件上传列表
  const [uploadList, setUploadList] = useState<UploadItem[]>([
    { id: 1, name: '事件简述', required: true, description: '根据模板撰写故障时间的简要叙述，支持Txt、Word', template: '事件简述.docx', uploaded: false, file: null },
    { id: 2, name: '故障一次设备情况', required: true, description: '根据模板撰写故障一次设备情况，支持Txt、Word', template: '故障一次设备情况.docx', uploaded: false, file: null },
    { id: 3, name: '故障二次设备情况', required: true, description: '根据模板撰写故障二次设备情况，支持Txt、Word', template: '故障二次设备情况.docx', uploaded: false, file: null },
    { id: 4, name: '故障二次设备情况（表）', required: true, description: '根据模板撰写故障二次设备情况，支持Txt、Word', template: '故障二次设备情况（表）.xlsx', uploaded: false, file: null },
    { id: 5, name: '二次系统动作行为分析', required: true, description: '根据模板撰写二次系统动作行为分析，支持Txt、Word', template: '二次系统动作行为分析.docx', uploaded: false, file: null },
    { id: 6, name: '厂家说明书', required: true, description: '上传故障设备所附带的设备说明书，支持Word、PDF', uploaded: false, file: null },
    { id: 7, name: '事件前运行方式图', required: true, description: '上传事件发生前的运行方式图，支持各类图片格式', uploaded: false, file: null },
    { id: 8, name: '事件后运行方式图', required: true, description: '上传事件发生后的运行方式图，支持各类图片格式', uploaded: false, file: null },
    { id: 9, name: '事件地区气象情况图', required: true, description: '上传事件地区气象情况，支持各类图片格式', uploaded: false, file: null },
  ]);

  // ✅ 处理文件上传
  const handleUpload = (file: File, id: number) => {
    const newList = uploadList.map(item => {
      if (item.id === id) {
        return { ...item, uploaded: true, file };
      }
      return item;
    });

    setUploadList(newList);
    message.success(`${file.name} 上传成功`);
  };

  // ✅ 处理文件删除
  const handleDelete = (id: number) => {
    const newList = uploadList.map(item => {
      if (item.id === id) {
        return { ...item, uploaded: false, file: null };
      }
      return item;
    });

    setUploadList(newList);
    message.warning(`文件已删除`);
  };

  return (
    <Drawer
      title={
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Title level={4} style={{ margin: 0 }}>上传文件</Title>
          <Button type="text" icon={<CloseOutlined />} onClick={onClose} />
        </div>
      }
      placement="right"
      width={450}
      onClose={onClose}
      open={visible}
      closable={false}
    >
      {/* 说明文本 */}
      <Text type="secondary">
        请严格按照要求提供数据文件，以保障生成报告的完整性和准确性
      </Text>

      {/* “全部模板下载” 按钮（前 5 个文件才有模板） */}
      <div style={{ marginTop: '20px', textAlign: 'right' }}>
        <Button type="primary" icon={<DownloadOutlined />} onClick={() => console.log('下载全部模板')}>
          全部模板下载
        </Button>
      </div>

      {/* 文件上传列表 */}
      <List
        itemLayout="horizontal"
        dataSource={uploadList}
        renderItem={item => (
          <List.Item
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '10px 0',
              borderBottom: '1px solid #f0f0f0',
            }}
          >
            {/* 文件编号 + 标题 + 描述 */}
            <div style={{ flex: 1 }}>
              <Text strong>
                {item.id}. {item.name} {item.required && <span style={{ color: 'red' }}>*</span>}
              </Text>
              <br />
              <Text type="secondary" style={{ fontSize: '12px' }}>{item.description}</Text>
              <br />
              {/* ✅ 只有前 5 个文件才有模板下载按钮 */}
              {item.template && (
                <Button
                  type="link"
                  icon={<DownloadOutlined />}
                  onClick={() => console.log(`下载 ${item.template}`)}
                >
                  点击下载模板
                </Button>
              )}
            </div>

            {/* 上传按钮 / 已上传状态 */}
            <div style={{ textAlign: 'right', display: 'flex', alignItems: 'center', gap: '8px' }}>
              {item.uploaded ? (
                <>
                  <Text type="success">{item.file?.name}</Text>
                  <CheckCircleOutlined style={{ color: 'green' }} />
                  <Button
                    type="text"
                    icon={<DeleteOutlined />}
                    onClick={() => handleDelete(item.id)}
                    danger
                  />
                </>
              ) : (
                <Upload
                  showUploadList={false}
                  beforeUpload={(file) => {
                    handleUpload(file, item.id);
                    return false;
                  }}
                >
                  <Button icon={<UploadOutlined />}>附件上传</Button>
                </Upload>
              )}
            </div>
          </List.Item>
        )}
      />
    </Drawer>
  );
};

export default UploadSidebar;
