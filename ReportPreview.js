"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var antd_1 = require("antd");
var icons_1 = require("@ant-design/icons");
// ✅ 直接使用 `import` 方式导入图片
var report_template_jpg_1 = __importDefault(require("../assets/report-template.jpg"));
var Title = antd_1.Typography.Title;
var ReportPreview = function (_a) {
    var visible = _a.visible, onClose = _a.onClose, reportTitle = _a.reportTitle, _b = _a.downloadWordUrl, downloadWordUrl = _b === void 0 ? '#' : _b, _c = _a.downloadPdfUrl, downloadPdfUrl = _c === void 0 ? '#' : _c;
    return ((0, jsx_runtime_1.jsxs)(antd_1.Drawer, { title: (0, jsx_runtime_1.jsxs)("div", { style: { display: 'flex', justifyContent: 'space-between', alignItems: 'center' }, children: [(0, jsx_runtime_1.jsx)(Title, { level: 4, style: { color: '#1890ff', margin: 0 }, children: reportTitle || '报告预览' }), (0, jsx_runtime_1.jsx)(antd_1.Button, { type: "text", icon: (0, jsx_runtime_1.jsx)(icons_1.CloseOutlined, {}), onClick: onClose })] }), placement: "right", width: 500, onClose: onClose, open: visible, closable: false, children: [(0, jsx_runtime_1.jsxs)("div", { style: { display: 'flex', justifyContent: 'flex-end', gap: '10px', marginBottom: '10px' }, children: [(0, jsx_runtime_1.jsx)(antd_1.Button, { type: "primary", icon: (0, jsx_runtime_1.jsx)(icons_1.DownloadOutlined, {}), onClick: function () { return window.open(downloadWordUrl); }, children: "\u4E0B\u8F7D Word" }), (0, jsx_runtime_1.jsx)(antd_1.Button, { type: "primary", icon: (0, jsx_runtime_1.jsx)(icons_1.DownloadOutlined, {}), onClick: function () { return window.open(downloadPdfUrl); }, children: "\u4E0B\u8F7D PDF" })] }), (0, jsx_runtime_1.jsx)(antd_1.Image, { src: report_template_jpg_1.default, alt: "\u62A5\u544A\u6A21\u677F", style: { width: '100%', borderRadius: '5px', boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.1)' } })] }));
};
exports.default = ReportPreview;
