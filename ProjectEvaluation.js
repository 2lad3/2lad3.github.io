"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var antd_1 = require("antd");
var icons_1 = require("@ant-design/icons");
var ReportPreview_1 = __importDefault(require("../components/ReportPreview"));
var react_router_dom_1 = require("react-router-dom");
var Title = antd_1.Typography.Title, Text = antd_1.Typography.Text;
var ProjectEvaluation = function (_a) {
    var openUploadSidebar = _a.openUploadSidebar;
    var navigate = (0, react_router_dom_1.useNavigate)();
    var _b = (0, react_1.useState)('template1'), selectedTemplate = _b[0], setSelectedTemplate = _b[1];
    var _c = (0, react_1.useState)(false), previewVisible = _c[0], setPreviewVisible = _c[1];
    var _d = (0, react_1.useState)(null), currentReport = _d[0], setCurrentReport = _d[1];
    var _e = (0, react_1.useState)(false), generateDrawerVisible = _e[0], setGenerateDrawerVisible = _e[1];
    var _f = (0, react_1.useState)(false), isGenerated = _f[0], setIsGenerated = _f[1];
    // 用户菜单（可选）
    var userMenu = ((0, jsx_runtime_1.jsxs)(antd_1.Menu, { children: [(0, jsx_runtime_1.jsx)(antd_1.Menu.Item, { children: "\u4E2A\u4EBA\u4E2D\u5FC3" }, "1"), (0, jsx_runtime_1.jsx)(antd_1.Menu.Item, { children: "\u8BBE\u7F6E" }, "2"), (0, jsx_runtime_1.jsx)(antd_1.Menu.Item, { children: "\u9000\u51FA\u767B\u5F55" }, "3")] }));
    // -------------------------
    // 上传新项目文件的交互
    // -------------------------
    var fileInputRef = (0, react_1.useRef)(null);
    var handleUploadNewProject = function (e) {
        e.stopPropagation();
        if (openUploadSidebar) {
            openUploadSidebar();
        }
        else if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };
    var handleFileChange = function (e) {
        var _a;
        var file = (_a = e.target.files) === null || _a === void 0 ? void 0 : _a[0];
        if (file) {
            console.log('上传新项目文件:', file);
            antd_1.message.success("".concat(file.name, " \u4E0A\u4F20\u6210\u529F"));
            // 清空文件输入
            e.target.value = '';
        }
    };
    // -------------------------
    // 点击“开始生成报告”或“重新生成报告”
    // -------------------------
    var handleGenerateReport = function () {
        setIsGenerated(true);
        setGenerateDrawerVisible(true);
        // 这里可以加入调用后端接口的逻辑
    };
    return ((0, jsx_runtime_1.jsxs)("div", { style: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '100%',
            maxWidth: '1000px',
            position: 'relative',
        }, children: [(0, jsx_runtime_1.jsx)("div", { style: { position: 'absolute', top: 20, right: 20 }, children: (0, jsx_runtime_1.jsx)(antd_1.Dropdown, { overlay: userMenu, placement: "bottomRight", children: (0, jsx_runtime_1.jsx)(antd_1.Button, { type: "text", icon: (0, jsx_runtime_1.jsx)(icons_1.UserOutlined, { style: { fontSize: '24px' } }) }) }) }), (0, jsx_runtime_1.jsxs)("div", { style: { textAlign: 'center', marginBottom: '40px' }, children: [(0, jsx_runtime_1.jsx)(icons_1.FundProjectionScreenOutlined, { style: {
                            fontSize: '40px',
                            color: '#1890ff',
                            display: 'block',
                            margin: '0 auto 10px',
                        } }), (0, jsx_runtime_1.jsx)(Title, { level: 2, style: { marginBottom: '10px' }, children: "\u9879\u76EE\u8BC4\u4F30\u62A5\u544A\u751F\u6210" }), (0, jsx_runtime_1.jsx)(Text, { type: "secondary", children: "\u901A\u8FC7\u5BF9\u9879\u76EE\u6570\u636E\u7684\u5168\u65B9\u4F4D\u5206\u6790\uFF0C\u5E2E\u52A9\u60A8\u5FEB\u901F\u5F97\u51FA\u8BC4\u4F30\u7ED3\u8BBA\u3002" })] }), (0, jsx_runtime_1.jsxs)("div", { style: { width: '100%', marginBottom: '40px' }, children: [(0, jsx_runtime_1.jsx)(Title, { level: 4, style: { color: '#1890ff', marginBottom: '20px' }, children: (0, jsx_runtime_1.jsxs)(antd_1.Space, { children: [(0, jsx_runtime_1.jsx)(icons_1.FormOutlined, { style: { fontSize: '18px', color: '#1890ff' } }), "\u9879\u76EE\u6570\u636E"] }) }), (0, jsx_runtime_1.jsxs)(antd_1.Row, { gutter: [16, 16], justify: "center", children: [(0, jsx_runtime_1.jsx)(antd_1.Col, { xs: 24, sm: 12, children: (0, jsx_runtime_1.jsxs)(antd_1.Card, { hoverable: true, style: { textAlign: 'center' }, onClick: handleUploadNewProject, children: [(0, jsx_runtime_1.jsx)(icons_1.CloudUploadOutlined, { style: { fontSize: '24px', color: '#1890ff' } }), (0, jsx_runtime_1.jsx)(Title, { level: 5, children: "\u4E0A\u4F20\u65B0\u9879\u76EE" }), (0, jsx_runtime_1.jsx)(Text, { type: "secondary", children: "\u4E0A\u4F20\u65B0\u7684\u9879\u76EE\u53EF\u7814\u6587\u4EF6\uFF08Word\u3001PDF\uFF09" })] }) }), (0, jsx_runtime_1.jsx)(antd_1.Col, { xs: 24, sm: 12, children: (0, jsx_runtime_1.jsxs)(antd_1.Card, { hoverable: true, style: { textAlign: 'center' }, onClick: function () { return navigate('/project-database'); }, children: [(0, jsx_runtime_1.jsx)(icons_1.DatabaseOutlined, { style: { fontSize: '24px', color: '#1890ff' } }), (0, jsx_runtime_1.jsx)(Title, { level: 5, children: "\u9879\u76EE\u6570\u636E\u5E93" }), (0, jsx_runtime_1.jsx)(Text, { type: "secondary", children: "\u7BA1\u7406\u5E76\u6D4F\u89C8\u5386\u53F2\u9879\u76EE\u6570\u636E" })] }) })] })] }), (0, jsx_runtime_1.jsxs)("div", { style: { width: '100%', marginBottom: '40px' }, children: [(0, jsx_runtime_1.jsx)(Title, { level: 4, style: { color: '#1890ff', marginBottom: '20px' }, children: (0, jsx_runtime_1.jsxs)(antd_1.Space, { children: [(0, jsx_runtime_1.jsx)(icons_1.FileTextOutlined, { style: { fontSize: '18px', color: '#1890ff' } }), "\u62A5\u544A\u6A21\u677F"] }) }), (0, jsx_runtime_1.jsx)(antd_1.Radio.Group, { value: selectedTemplate, onChange: function (e) { return setSelectedTemplate(e.target.value); }, style: { width: '100%' }, children: (0, jsx_runtime_1.jsxs)(antd_1.Row, { gutter: [16, 16], justify: "center", children: [(0, jsx_runtime_1.jsx)(antd_1.Col, { xs: 24, sm: 12, children: (0, jsx_runtime_1.jsxs)(antd_1.Card, { hoverable: true, style: {
                                            position: 'relative',
                                            textAlign: 'center',
                                            border: selectedTemplate === 'template1' ? '2px solid #1890ff' : '',
                                            padding: '20px',
                                        }, onClick: function () { return setSelectedTemplate('template1'); }, children: [(0, jsx_runtime_1.jsx)(antd_1.Button, { type: "text", icon: (0, jsx_runtime_1.jsx)(icons_1.EyeOutlined, {}), onClick: function (e) {
                                                    e.stopPropagation();
                                                    setCurrentReport({
                                                        title: '项目评估模板1',
                                                        wordUrl: '/downloads/project-template1.docx',
                                                        pdfUrl: '/downloads/project-template1.pdf',
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
                                                        title: '项目评估模板2',
                                                        wordUrl: '/downloads/project-template2.docx',
                                                        pdfUrl: '/downloads/project-template2.pdf',
                                                    });
                                                    setPreviewVisible(true);
                                                }, style: { position: 'absolute', top: 10, right: 10, color: '#1890ff' } }), (0, jsx_runtime_1.jsx)(antd_1.Radio, { value: "template2", children: "\u62A5\u544A\u6A21\u677F2" })] }) })] }) })] }), (0, jsx_runtime_1.jsxs)("div", { style: { textAlign: 'center', width: '100%' }, children: [(0, jsx_runtime_1.jsx)(antd_1.Button, { size: "large", style: {
                            width: '100%',
                            maxWidth: '400px',
                            backgroundColor: isGenerated ? '#f5222d' : '#1890ff',
                            color: '#fff',
                            border: 'none',
                        }, onClick: handleGenerateReport, children: isGenerated ? '重新生成报告' : '开始生成报告' }), (0, jsx_runtime_1.jsx)(Text, { type: "secondary", style: { display: 'block', marginTop: '10px' }, children: "\u5185\u5BB9\u7531AI\u751F\u6210\uFF0C\u8BF7\u4ED4\u7EC6\u68C0\u67E5" })] }), currentReport && ((0, jsx_runtime_1.jsx)(ReportPreview_1.default, { visible: previewVisible, onClose: function () { return setPreviewVisible(false); }, reportTitle: currentReport.title || '项目评估报告预览', downloadWordUrl: currentReport.wordUrl || '#', downloadPdfUrl: currentReport.pdfUrl || '#' })), (0, jsx_runtime_1.jsxs)(antd_1.Drawer, { title: (0, jsx_runtime_1.jsxs)("div", { style: { display: 'flex', justifyContent: 'space-between', alignItems: 'center' }, children: [(0, jsx_runtime_1.jsx)(Title, { level: 4, style: { color: '#1890ff', margin: 0 }, children: "\u62A5\u544A\u6982\u89C8" }), (0, jsx_runtime_1.jsx)(antd_1.Button, { type: "text", icon: (0, jsx_runtime_1.jsx)(icons_1.CloseOutlined, {}), onClick: function () { return setGenerateDrawerVisible(false); } })] }), placement: "right", width: 500, onClose: function () { return setGenerateDrawerVisible(false); }, open: generateDrawerVisible, closable: false, children: [(0, jsx_runtime_1.jsxs)("div", { style: { textAlign: 'right', marginBottom: '20px' }, children: [(0, jsx_runtime_1.jsx)(antd_1.Button, { type: "primary", icon: (0, jsx_runtime_1.jsx)(icons_1.DownloadOutlined, {}), style: {
                                    backgroundColor: '#1890ff',
                                    border: 'none',
                                    marginRight: '10px',
                                }, onClick: function () { return window.open('/downloads/project-report.docx'); }, children: "\u4E0B\u8F7DWord" }), (0, jsx_runtime_1.jsx)(antd_1.Button, { type: "primary", icon: (0, jsx_runtime_1.jsx)(icons_1.DownloadOutlined, {}), style: {
                                    backgroundColor: '#1890ff',
                                    border: 'none',
                                }, onClick: function () { return window.open('/downloads/project-report.pdf'); }, children: "\u4E0B\u8F7DPDF" })] }), (0, jsx_runtime_1.jsxs)("div", { style: { minHeight: '300px' }, children: [(0, jsx_runtime_1.jsx)("p", { children: "\u8FD9\u91CC\u662F\u9879\u76EE\u8BC4\u4F30\u62A5\u544A\u751F\u6210\u7684\u53EF\u89C6\u5316\u5185\u5BB9..." }), (0, jsx_runtime_1.jsx)("p", { children: "\u53EF\u4EE5\u5C55\u793A\u56FE\u8868\u3001\u6587\u672C\u3001\u6216\u5176\u4ED6\u8BC4\u4F30\u7ED3\u679C\u4FE1\u606F\u3002" })] })] }), (0, jsx_runtime_1.jsx)("input", { type: "file", accept: ".doc,.docx,.pdf", style: { display: 'none' }, ref: fileInputRef, onChange: handleFileChange })] }));
};
exports.default = ProjectEvaluation;
