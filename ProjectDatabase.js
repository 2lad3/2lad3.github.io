"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var antd_1 = require("antd");
var icons_1 = require("@ant-design/icons");
var react_router_dom_1 = require("react-router-dom");
var Option = antd_1.Select.Option;
var mockData = [
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
var ProjectDatabase = function () {
    var navigate = (0, react_router_dom_1.useNavigate)();
    var form = antd_1.Form.useForm()[0];
    var _a = (0, react_1.useState)(mockData), projectList = _a[0], setProjectList = _a[1];
    var _b = (0, react_1.useState)(1), currentPage = _b[0], setCurrentPage = _b[1];
    var _c = (0, react_1.useState)(10), pageSize = _c[0], setPageSize = _c[1];
    var _d = (0, react_1.useState)([]), selectedRowKeys = _d[0], setSelectedRowKeys = _d[1];
    // 表格列定义
    var columns = [
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
            render: function (_, record) { return ((0, jsx_runtime_1.jsxs)(antd_1.Space, { children: [(0, jsx_runtime_1.jsx)(antd_1.Button, { type: "link", onClick: function () {
                            console.log('编辑项目', record.projectId);
                            // TODO: 打开编辑弹窗或跳转编辑页面
                        }, children: "\u7F16\u8F91" }), (0, jsx_runtime_1.jsx)(antd_1.Button, { type: "link", onClick: function () {
                            console.log('查看可研', record.projectId);
                            // TODO: 查看可研详情
                        }, children: "\u67E5\u770B\u53EF\u7814" })] })); },
        },
    ];
    // 分页、复选框配置
    var rowSelection = {
        selectedRowKeys: selectedRowKeys,
        onChange: function (keys) { return setSelectedRowKeys(keys); },
    };
    var onSearch = function () {
        var values = form.getFieldsValue();
        console.log('搜索条件:', values);
        // TODO: 调用后端接口，根据搜索条件获取数据
        setProjectList(mockData);
        setCurrentPage(1);
    };
    var onReset = function () {
        form.resetFields();
        setProjectList(mockData);
        setCurrentPage(1);
    };
    var handlePageChange = function (page, size) {
        setCurrentPage(page);
        setPageSize(size);
    };
    var handleAddProject = function () {
        console.log('新建项目');
        // TODO: 打开新建项目弹窗或跳转新建页面
    };
    var batchMenu = ((0, jsx_runtime_1.jsxs)(antd_1.Menu, { children: [(0, jsx_runtime_1.jsx)(antd_1.Menu.Item, { onClick: function () {
                    console.log('批量删除', selectedRowKeys);
                    // TODO: 批量删除
                }, children: "\u6279\u91CF\u5220\u9664" }, "1"), (0, jsx_runtime_1.jsx)(antd_1.Menu.Item, { onClick: function () {
                    console.log('批量导出', selectedRowKeys);
                    // TODO: 批量导出
                }, children: "\u6279\u91CF\u5BFC\u51FA" }, "2")] }));
    return (
    // 最外层容器，覆盖父级 maxWidth 设置，使本页面占满主内容区
    (0, jsx_runtime_1.jsxs)("div", { style: {
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            padding: '16px',
            boxSizing: 'border-box',
            width: '100%',
            maxWidth: '100%',
            height: '100%',
            background: '#fff',
        }, children: [(0, jsx_runtime_1.jsx)("div", { style: { marginBottom: '16px' }, children: (0, jsx_runtime_1.jsx)(antd_1.Button, { type: "text", icon: (0, jsx_runtime_1.jsx)(icons_1.LeftOutlined, { style: { fontSize: '16px', color: '#1890ff' } }), onClick: function () { return navigate('/project-evaluation'); }, children: "\u8FD4\u56DE" }) }), (0, jsx_runtime_1.jsxs)(antd_1.Form, { layout: "inline", form: form, style: { marginBottom: '16px' }, children: [(0, jsx_runtime_1.jsx)(antd_1.Form.Item, { label: "\u9879\u76EE\u7F16\u53F7", name: "projectId", children: (0, jsx_runtime_1.jsx)(antd_1.Input, { placeholder: "\u8BF7\u8F93\u5165\u9879\u76EE\u7F16\u53F7", style: { width: 150 } }) }), (0, jsx_runtime_1.jsx)(antd_1.Form.Item, { label: "\u9879\u76EE\u540D\u79F0", name: "projectName", children: (0, jsx_runtime_1.jsx)(antd_1.Input, { placeholder: "\u8BF7\u8F93\u5165\u9879\u76EE\u540D\u79F0", style: { width: 150 } }) }), (0, jsx_runtime_1.jsx)(antd_1.Form.Item, { label: "\u7ACB\u9879\u5E74\u5EA6", name: "year", children: (0, jsx_runtime_1.jsxs)(antd_1.Select, { placeholder: "\u9009\u62E9\u5E74\u5EA6", style: { width: 120 }, children: [(0, jsx_runtime_1.jsx)(Option, { value: "2022", children: "2022" }), (0, jsx_runtime_1.jsx)(Option, { value: "2023", children: "2023" }), (0, jsx_runtime_1.jsx)(Option, { value: "2024", children: "2024" })] }) }), (0, jsx_runtime_1.jsx)(antd_1.Form.Item, { label: "\u9879\u76EE\u7C7B\u578B", name: "type", children: (0, jsx_runtime_1.jsxs)(antd_1.Select, { placeholder: "\u9009\u62E9\u7C7B\u578B", style: { width: 120 }, children: [(0, jsx_runtime_1.jsx)(Option, { value: "\u79D1\u6280\u9879\u76EE", children: "\u79D1\u6280\u9879\u76EE" }), (0, jsx_runtime_1.jsx)(Option, { value: "\u57FA\u5EFA\u9879\u76EE", children: "\u57FA\u5EFA\u9879\u76EE" }), (0, jsx_runtime_1.jsx)(Option, { value: "\u5176\u4ED6", children: "\u5176\u4ED6" })] }) }), (0, jsx_runtime_1.jsx)(antd_1.Form.Item, { children: (0, jsx_runtime_1.jsxs)(antd_1.Space, { children: [(0, jsx_runtime_1.jsx)(antd_1.Button, { type: "primary", icon: (0, jsx_runtime_1.jsx)(icons_1.SearchOutlined, {}), onClick: onSearch, children: "\u67E5\u8BE2" }), (0, jsx_runtime_1.jsx)(antd_1.Button, { icon: (0, jsx_runtime_1.jsx)(icons_1.ReloadOutlined, {}), onClick: onReset, children: "\u91CD\u7F6E" })] }) })] }), (0, jsx_runtime_1.jsxs)(antd_1.Space, { style: { marginBottom: 10 }, children: [(0, jsx_runtime_1.jsx)(antd_1.Button, { type: "primary", icon: (0, jsx_runtime_1.jsx)(icons_1.PlusOutlined, {}), onClick: handleAddProject, children: "\u65B0\u5EFA" }), (0, jsx_runtime_1.jsx)(antd_1.Dropdown, { overlay: batchMenu, disabled: selectedRowKeys.length === 0, children: (0, jsx_runtime_1.jsx)(antd_1.Button, { children: "\u6279\u91CF\u64CD\u4F5C" }) })] }), (0, jsx_runtime_1.jsxs)("div", { style: { flex: 1, display: 'flex', flexDirection: 'column' }, children: [(0, jsx_runtime_1.jsx)(antd_1.Table, { rowKey: "key", columns: columns, dataSource: projectList.slice((currentPage - 1) * pageSize, currentPage * pageSize), rowSelection: rowSelection, pagination: false, style: { flex: 1, width: '100%' } }), (0, jsx_runtime_1.jsx)(antd_1.Row, { justify: "end", style: { marginTop: '10px' }, children: (0, jsx_runtime_1.jsx)(antd_1.Col, { children: (0, jsx_runtime_1.jsx)(antd_1.Pagination, { current: currentPage, pageSize: pageSize, total: projectList.length, showSizeChanger: true, onChange: handlePageChange, onShowSizeChange: handlePageChange, showTotal: function (total) { return "\u5171 ".concat(total, " \u6761\u6570\u636E"); } }) }) })] })] }));
};
exports.default = ProjectDatabase;
