"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var antd_1 = require("antd");
var icons_1 = require("@ant-design/icons");
var ReportPreview_1 = __importDefault(require("../components/ReportPreview")); // ✅ 引入 ReportPreview 组件
var Title = antd_1.Typography.Title, Text = antd_1.Typography.Text;
var Home = function (_a) {
    var openUploadSidebar = _a.openUploadSidebar;
    var _b = (0, react_1.useState)('template1'), selectedTemplate = _b[0], setSelectedTemplate = _b[1];
    // ✅ 报告预览侧栏状态
    var _c = (0, react_1.useState)(false), previewVisible = _c[0], setPreviewVisible = _c[1];
    var _d = (0, react_1.useState)(null), currentReport = _d[0], setCurrentReport = _d[1];
    // ✅ 生成报告侧栏状态
    var _e = (0, react_1.useState)(false), generateDrawerVisible = _e[0], setGenerateDrawerVisible = _e[1];
    // ✅ 是否已经生成过报告，用于切换按钮样式/文字
    var _f = (0, react_1.useState)(false), isGenerated = _f[0], setIsGenerated = _f[1];
    // 用户菜单（可选）
    var userMenu = ((0, jsx_runtime_1.jsxs)(antd_1.Menu, { children: [(0, jsx_runtime_1.jsx)(antd_1.Menu.Item, { children: "\u4E2A\u4EBA\u4E2D\u5FC3" }, "1"), (0, jsx_runtime_1.jsx)(antd_1.Menu.Item, { children: "\u8BBE\u7F6E" }, "2"), (0, jsx_runtime_1.jsx)(antd_1.Menu.Item, { children: "\u9000\u51FA\u767B\u5F55" }, "3")] }));
    // ✅ 点击“开始生成报告”或“重新生成报告”
    var handleGenerateReport = function () {
        // 生成报告逻辑（此处仅做示例）
        setIsGenerated(true);
        setGenerateDrawerVisible(true);
        // 你也可以在这里发起后端请求，等待生成完成后再 setGenerateDrawerVisible(true)
    };
    return ((0, jsx_runtime_1.jsxs)("div", { style: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '100%',
            maxWidth: '1000px',
            position: 'relative',
        }, children: [(0, jsx_runtime_1.jsx)("div", { style: { position: 'absolute', top: 20, right: 20 }, children: (0, jsx_runtime_1.jsx)(antd_1.Dropdown, { overlay: userMenu, placement: "bottomRight", children: (0, jsx_runtime_1.jsx)(antd_1.Button, { type: "text", icon: (0, jsx_runtime_1.jsx)(icons_1.UserOutlined, { style: { fontSize: '24px' } }) }) }) }), (0, jsx_runtime_1.jsxs)("div", { style: { textAlign: 'center', marginBottom: '40px' }, children: [(0, jsx_runtime_1.jsx)(icons_1.ExclamationCircleOutlined, { style: {
                            fontSize: '40px',
                            color: '#1890ff',
                            display: 'block',
                            margin: '0 auto 10px',
                        } }), (0, jsx_runtime_1.jsx)(Title, { level: 2, style: { marginBottom: '10px' }, children: "\u6545\u969C\u5206\u6790\u62A5\u544A\u751F\u6210" }), (0, jsx_runtime_1.jsx)(Text, { type: "secondary", children: "\u5FEB\u901F\u6355\u6349\u6570\u636E\u8BFB\u53D6\u3001\u6545\u969C\u5206\u6790\u3001\u62A5\u544A\u751F\u6210\u7684\u5168\u6D41\u7A0B\uFF0C\u8BA9\u60A8\u7684\u62A5\u544A\u968F\u624B\u53EF\u5F97~" })] }), (0, jsx_runtime_1.jsxs)("div", { style: { width: '100%', marginBottom: '40px' }, children: [(0, jsx_runtime_1.jsx)(Title, { level: 4, style: { color: '#1890ff', marginBottom: '20px' }, children: (0, jsx_runtime_1.jsxs)(antd_1.Space, { children: [(0, jsx_runtime_1.jsx)(icons_1.FormOutlined, { style: { fontSize: '18px', color: '#1890ff' } }), "\u8F93\u5165\u6570\u636E"] }) }), (0, jsx_runtime_1.jsxs)(antd_1.Row, { gutter: [16, 16], justify: "center", children: [(0, jsx_runtime_1.jsx)(antd_1.Col, { xs: 24, sm: 12, children: (0, jsx_runtime_1.jsxs)(antd_1.Card, { hoverable: true, style: { textAlign: 'center' }, onClick: function () { return console.log('同步数据'); }, children: [(0, jsx_runtime_1.jsx)(icons_1.SyncOutlined, { style: { fontSize: '24px', color: '#1890ff' } }), (0, jsx_runtime_1.jsx)(Title, { level: 5, children: "\u540C\u6B65\u6570\u636E" }), (0, jsx_runtime_1.jsx)(Text, { type: "secondary", children: "\u901A\u8FC7\u63A5\u53E3\u540C\u6B65\u7CFB\u7EDF\u6570\u636E" })] }) }), (0, jsx_runtime_1.jsx)(antd_1.Col, { xs: 24, sm: 12, children: (0, jsx_runtime_1.jsxs)(antd_1.Card, { hoverable: true, style: { textAlign: 'center' }, onClick: openUploadSidebar, children: [(0, jsx_runtime_1.jsx)(icons_1.CloudUploadOutlined, { style: { fontSize: '24px', color: '#1890ff' } }), (0, jsx_runtime_1.jsx)(Title, { level: 5, children: "\u4E0A\u4F20\u6587\u4EF6" }), (0, jsx_runtime_1.jsx)(Text, { type: "secondary", children: "\u6839\u636E\u4E0A\u4F20\u7684\u6587\u4EF6\u5185\u5BB9\u521B\u5EFA\u62A5\u544A" })] }) })] })] }), (0, jsx_runtime_1.jsxs)("div", { style: { width: '100%', marginBottom: '40px' }, children: [(0, jsx_runtime_1.jsx)(Title, { level: 4, style: { color: '#1890ff', marginBottom: '20px' }, children: (0, jsx_runtime_1.jsxs)(antd_1.Space, { children: [(0, jsx_runtime_1.jsx)(icons_1.FileTextOutlined, { style: { fontSize: '18px', color: '#1890ff' } }), "\u62A5\u544A\u6A21\u677F"] }) }), (0, jsx_runtime_1.jsx)(antd_1.Radio.Group, { value: selectedTemplate, onChange: function (e) { return setSelectedTemplate(e.target.value); }, style: { width: '100%' }, children: (0, jsx_runtime_1.jsxs)(antd_1.Row, { gutter: [16, 16], justify: "center", children: [(0, jsx_runtime_1.jsx)(antd_1.Col, { xs: 24, sm: 12, children: (0, jsx_runtime_1.jsxs)(antd_1.Card, { hoverable: true, style: {
                                            position: 'relative',
                                            textAlign: 'center',
                                            border: selectedTemplate === 'template1' ? '2px solid #1890ff' : '',
                                            padding: '20px',
                                        }, onClick: function () { return setSelectedTemplate('template1'); }, children: [(0, jsx_runtime_1.jsx)(antd_1.Button, { type: "text", icon: (0, jsx_runtime_1.jsx)(icons_1.EyeOutlined, {}), onClick: function (e) {
                                                    e.stopPropagation();
                                                    setCurrentReport({
                                                        title: '报告模板1',
                                                        wordUrl: '/downloads/template1.docx',
                                                        pdfUrl: '/downloads/template1.pdf',
                                                    });
                                                    setPreviewVisible(true);
                                                }, style: { position: 'absolute', top: 10, right: 10, color: '#1890ff' } }), (0, jsx_runtime_1.jsx)(antd_1.Radio, { value: "template1", children: "\u62A5\u544A\u6A21\u677F1" })] }) }), (0, jsx_runtime_1.jsx)(antd_1.Col, { xs: 24, sm: 12, children: (0, jsx_runtime_1.jsxs)(antd_1.Card, { hoverable: true, style: {
                                            position: 'relative',
                                            textAlign: 'center',
                                            border: selectedTemplate === 'template2' ? '2px solid #1890ff' : '',
                                            padding: '20px',
                                        }, onClick: function () { return setSelectedTemplate('template2'); }, children: [(0, jsx_runtime_1.jsx)(antd_1.Button, { type: "text", icon: (0, jsx_runtime_1.jsx)(icons_1.EyeOutlined, {}), onClick: function (e) {
                                                    e.stopPropagation();
                                                    setCurrentReport({
                                                        title: '报告模板2',
                                                        wordUrl: '/downloads/template2.docx',
                                                        pdfUrl: '/downloads/template2.pdf',
                                                    });
                                                    setPreviewVisible(true);
                                                }, style: { position: 'absolute', top: 10, right: 10, color: '#1890ff' } }), (0, jsx_runtime_1.jsx)(antd_1.Radio, { value: "template2", children: "\u62A5\u544A\u6A21\u677F2" })] }) })] }) })] }), (0, jsx_runtime_1.jsxs)("div", { style: { textAlign: 'center', width: '100%' }, children: [(0, jsx_runtime_1.jsx)(antd_1.Button, { size: "large", style: {
                            width: '100%',
                            maxWidth: '400px',
                            // ✅ 如果已生成报告，则按钮变成红底白字
                            backgroundColor: isGenerated ? '#f5222d' : '#1890ff',
                            color: '#fff',
                            border: 'none',
                        }, onClick: handleGenerateReport, children: isGenerated ? '重新生成报告' : '开始生成报告' }), (0, jsx_runtime_1.jsx)(Text, { type: "secondary", style: { display: 'block', marginTop: '10px' }, children: "\u5185\u5BB9\u7531AI\u751F\u6210\uFF0C\u8BF7\u4ED4\u7EC6\u68C0\u67E5" })] }), currentReport && ((0, jsx_runtime_1.jsx)(ReportPreview_1.default, { visible: previewVisible, onClose: function () { return setPreviewVisible(false); }, reportTitle: currentReport.title || '报告预览', downloadWordUrl: currentReport.wordUrl || '#', downloadPdfUrl: currentReport.pdfUrl || '#' })), (0, jsx_runtime_1.jsx)(antd_1.Drawer, { title: (0, jsx_runtime_1.jsxs)("div", { style: { display: 'flex', justifyContent: 'space-between', alignItems: 'center' }, children: [(0, jsx_runtime_1.jsx)(Title, { level: 4, style: { color: '#1890ff', margin: 0 }, children: "\u62A5\u544A\u6982\u89C8" }), (0, jsx_runtime_1.jsx)(antd_1.Button, { type: "text", icon: (0, jsx_runtime_1.jsx)(icons_1.CloseOutlined, {}), onClick: function () { return setGenerateDrawerVisible(false); } })] }), placement: "right", width: 500, onClose: function () { return setGenerateDrawerVisible(false); }, open: generateDrawerVisible, closable: false, children: (0, jsx_runtime_1.jsxs)("div", { style: { minHeight: '300px' }, children: [(0, jsx_runtime_1.jsxs)("div", { style: { textAlign: 'right', marginBottom: '20px' }, children: [(0, jsx_runtime_1.jsx)(antd_1.Button, { type: "primary", icon: (0, jsx_runtime_1.jsx)(icons_1.DownloadOutlined, {}), style: {
                                        backgroundColor: '#1890ff',
                                        border: 'none',
                                        marginRight: '10px',
                                    }, children: "\u4E0B\u8F7DWord" }), (0, jsx_runtime_1.jsx)(antd_1.Button, { type: "primary", icon: (0, jsx_runtime_1.jsx)(icons_1.DownloadOutlined, {}), style: {
                                        backgroundColor: '#1890ff',
                                        border: 'none',
                                    }, children: "\u4E0B\u8F7DPDF" })] }), (0, jsx_runtime_1.jsx)("p", { children: "\u5728\u8FD9\u91CC\u5C55\u793A\u751F\u6210\u7684\u62A5\u544A\u4FE1\u606F..." }), (0, jsx_runtime_1.jsx)("p", { children: "\u4F60\u53EF\u4EE5\u5728\u6B64\u653E\u7F6E\u56FE\u8868\u3001\u6587\u672C\u3001\u6216\u5176\u4ED6\u53EF\u89C6\u5316\u7EC4\u4EF6\u3002" })] }) })] }));
};
exports.default = Home;
