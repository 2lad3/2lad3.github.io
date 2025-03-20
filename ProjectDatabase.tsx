import * as React from 'react';
import { useState } from 'react';
import {
  Form,
  Input,
  Select,
  Button,
  Space,
  Table,
  Pagination,
  Row,
  Col,
  Dropdown,
  Menu,
} from 'antd';
import {
  PlusOutlined,
  LeftOutlined,
  SearchOutlined,
  ReloadOutlined,
} from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

const { Option } = Select;

interface ProjectItem {
  key: string;
  projectId: string;
  projectName: string;
  year: string;
  type: string;
  unit: string;
  leader: string;
}

const mockData: ProjectItem[] = [
  {
    key: '1',
    projectId: 'TradeCode21',
    projectName: '某某项目A',
    year: '2022',
    type: '科技项目',
    unit: '单位123',
    leader: '张三',
  },
  {
    key: '2',
    projectId: 'TradeCode22',
    projectName: '某某项目B',
    year: '2023',
    type: '基建项目',
    unit: '单位456',
    leader: '李四',
  },
  {
    key: '3',
    projectId: 'TradeCode23',
    projectName: '某某项目C',
    year: '2023',
    type: '科技项目',
    unit: '单位789',
    leader: '王五',
  },
  // ... 可继续添加更多数据
];

const ProjectDatabase: React.FC = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const [projectList, setProjectList] = useState<ProjectItem[]>(mockData);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(10);
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);

  // 表格列定义
  const columns = [
    {
      title: '项目编号',
      dataIndex: 'projectId',
      key: 'projectId',
    },
    {
      title: '项目名称',
      dataIndex: 'projectName',
      key: 'projectName',
    },
    {
      title: '立项年度',
      dataIndex: 'year',
      key: 'year',
    },
    {
      title: '项目类型',
      dataIndex: 'type',
      key: 'type',
    },
    {
      title: '建设单位',
      dataIndex: 'unit',
      key: 'unit',
    },
    {
      title: '负责人',
      dataIndex: 'leader',
      key: 'leader',
    },
    {
      title: '操作',
      key: 'action',
      render: (_: unknown, record: ProjectItem) => (
        <Space>
          <Button
            type="link"
            onClick={() => {
              console.log('编辑项目', record.projectId);
              // TODO: 打开编辑弹窗或跳转编辑页面
            }}
          >
            编辑
          </Button>
          <Button
            type="link"
            onClick={() => {
              console.log('查看可研', record.projectId);
              // TODO: 查看可研详情
            }}
          >
            查看可研
          </Button>
        </Space>
      ),
    },
  ];

  // 分页、复选框配置
  const rowSelection = {
    selectedRowKeys,
    onChange: (keys: React.Key[]) => setSelectedRowKeys(keys),
  };

  const onSearch = () => {
    const values = form.getFieldsValue();
    console.log('搜索条件:', values);
    // TODO: 调用后端接口，根据搜索条件获取数据
    setProjectList(mockData);
    setCurrentPage(1);
  };

  const onReset = () => {
    form.resetFields();
    setProjectList(mockData);
    setCurrentPage(1);
  };

  const handlePageChange = (page: number, size: number) => {
    setCurrentPage(page);
    setPageSize(size);
  };

  const handleAddProject = () => {
    console.log('新建项目');
    // TODO: 打开新建项目弹窗或跳转新建页面
  };

  const batchMenu = (
    <Menu>
      <Menu.Item
        key="1"
        onClick={() => {
          console.log('批量删除', selectedRowKeys);
          // TODO: 批量删除
        }}
      >
        批量删除
      </Menu.Item>
      <Menu.Item
        key="2"
        onClick={() => {
          console.log('批量导出', selectedRowKeys);
          // TODO: 批量导出
        }}
      >
        批量导出
      </Menu.Item>
    </Menu>
  );

  return (
    // 最外层容器，覆盖父级 maxWidth 设置，使本页面占满主内容区
    <div
      style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        padding: '16px',
        boxSizing: 'border-box',
        width: '100%',
        maxWidth: '100%',
        height: '100%',
        background: '#fff',
      }}
    >
      {/* 顶部“返回”按钮 */}
      <div style={{ marginBottom: '16px' }}>
        <Button
          type="text"
          icon={<LeftOutlined style={{ fontSize: '16px', color: '#1890ff' }} />}
          onClick={() => navigate('/project-evaluation')}
        >
          返回
        </Button>
      </div>

      {/* 搜索表单 */}
      <Form layout="inline" form={form} style={{ marginBottom: '16px' }}>
        <Form.Item label="项目编号" name="projectId">
          <Input placeholder="请输入项目编号" style={{ width: 150 }} />
        </Form.Item>
        <Form.Item label="项目名称" name="projectName">
          <Input placeholder="请输入项目名称" style={{ width: 150 }} />
        </Form.Item>
        <Form.Item label="立项年度" name="year">
          <Select placeholder="选择年度" style={{ width: 120 }}>
            <Option value="2022">2022</Option>
            <Option value="2023">2023</Option>
            <Option value="2024">2024</Option>
          </Select>
        </Form.Item>
        <Form.Item label="项目类型" name="type">
          <Select placeholder="选择类型" style={{ width: 120 }}>
            <Option value="科技项目">科技项目</Option>
            <Option value="基建项目">基建项目</Option>
            <Option value="其他">其他</Option>
          </Select>
        </Form.Item>
        <Form.Item>
          <Space>
            <Button type="primary" icon={<SearchOutlined />} onClick={onSearch}>
              查询
            </Button>
            <Button icon={<ReloadOutlined />} onClick={onReset}>
              重置
            </Button>
          </Space>
        </Form.Item>
      </Form>

      {/* 新建 & 批量操作按钮 */}
      <Space style={{ marginBottom: 10 }}>
        <Button type="primary" icon={<PlusOutlined />} onClick={handleAddProject}>
          新建
        </Button>
        <Dropdown overlay={batchMenu} disabled={selectedRowKeys.length === 0}>
          <Button>批量操作</Button>
        </Dropdown>
      </Space>

      {/* 表格区域和分页 */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        <Table
          rowKey="key"
          columns={columns}
          dataSource={projectList.slice((currentPage - 1) * pageSize, currentPage * pageSize)}
          rowSelection={rowSelection}
          pagination={false}
          style={{ flex: 1, width: '100%' }}
        />
        <Row justify="end" style={{ marginTop: '10px' }}>
          <Col>
            <Pagination
              current={currentPage}
              pageSize={pageSize}
              total={projectList.length}
              showSizeChanger
              onChange={handlePageChange}
              onShowSizeChange={handlePageChange}
              showTotal={(total) => `共 ${total} 条数据`}
            />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default ProjectDatabase;
