"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var antd_1 = require("antd");
var icons_1 = require("@ant-design/icons");
var Title = antd_1.Typography.Title, Text = antd_1.Typography.Text;
var UploadSidebar = function (_a) {
    var visible = _a.visible, onClose = _a.onClose;
    // ✅ 文件上传列表
    var _b = (0, react_1.useState)([
        { id: 1, name: '事件简述', required: true, description: '根据模板撰写故障时间的简要叙述，支持Txt、Word', template: '事件简述.docx', uploaded: false, file: null },
        { id: 2, name: '故障一次设备情况', required: true, description: '根据模板撰写故障一次设备情况，支持Txt、Word', template: '故障一次设备情况.docx', uploaded: false, file: null },
        { id: 3, name: '故障二次设备情况', required: true, description: '根据模板撰写故障二次设备情况，支持Txt、Word', template: '故障二次设备情况.docx', uploaded: false, file: null },
        { id: 4, name: '故障二次设备情况（表）', required: true, description: '根据模板撰写故障二次设备情况，支持Txt、Word', template: '故障二次设备情况（表）.xlsx', uploaded: false, file: null },
        { id: 5, name: '二次系统动作行为分析', required: true, description: '根据模板撰写二次系统动作行为分析，支持Txt、Word', template: '二次系统动作行为分析.docx', uploaded: false, file: null },
        { id: 6, name: '厂家说明书', required: true, description: '上传故障设备所附带的设备说明书，支持Word、PDF', uploaded: false, file: null },
        { id: 7, name: '事件前运行方式图', required: true, description: '上传事件发生前的运行方式图，支持各类图片格式', uploaded: false, file: null },
        { id: 8, name: '事件后运行方式图', required: true, description: '上传事件发生后的运行方式图，支持各类图片格式', uploaded: false, file: null },
        { id: 9, name: '事件地区气象情况图', required: true, description: '上传事件地区气象情况，支持各类图片格式', uploaded: false, file: null },
    ]), uploadList = _b[0], setUploadList = _b[1];
    // ✅ 处理文件上传
    var handleUpload = function (file, id) {
        var newList = uploadList.map(function (item) {
            if (item.id === id) {
                return __assign(__assign({}, item), { uploaded: true, file: file });
            }
            return item;
        });
        setUploadList(newList);
        antd_1.message.success("".concat(file.name, " \u4E0A\u4F20\u6210\u529F"));
    };
    // ✅ 处理文件删除
    var handleDelete = function (id) {
        var newList = uploadList.map(function (item) {
            if (item.id === id) {
                return __assign(__assign({}, item), { uploaded: false, file: null });
            }
            return item;
        });
        setUploadList(newList);
        antd_1.message.warning("\u6587\u4EF6\u5DF2\u5220\u9664");
    };
    return ((0, jsx_runtime_1.jsxs)(antd_1.Drawer, { title: (0, jsx_runtime_1.jsxs)("div", { style: { display: 'flex', justifyContent: 'space-between', alignItems: 'center' }, children: [(0, jsx_runtime_1.jsx)(Title, { level: 4, style: { margin: 0 }, children: "\u4E0A\u4F20\u6587\u4EF6" }), (0, jsx_runtime_1.jsx)(antd_1.Button, { type: "text", icon: (0, jsx_runtime_1.jsx)(icons_1.CloseOutlined, {}), onClick: onClose })] }), placement: "right", width: 450, onClose: onClose, open: visible, closable: false, children: [(0, jsx_runtime_1.jsx)(Text, { type: "secondary", children: "\u8BF7\u4E25\u683C\u6309\u7167\u8981\u6C42\u63D0\u4F9B\u6570\u636E\u6587\u4EF6\uFF0C\u4EE5\u4FDD\u969C\u751F\u6210\u62A5\u544A\u7684\u5B8C\u6574\u6027\u548C\u51C6\u786E\u6027" }), (0, jsx_runtime_1.jsx)("div", { style: { marginTop: '20px', textAlign: 'right' }, children: (0, jsx_runtime_1.jsx)(antd_1.Button, { type: "primary", icon: (0, jsx_runtime_1.jsx)(icons_1.DownloadOutlined, {}), onClick: function () { return console.log('下载全部模板'); }, children: "\u5168\u90E8\u6A21\u677F\u4E0B\u8F7D" }) }), (0, jsx_runtime_1.jsx)(antd_1.List, { itemLayout: "horizontal", dataSource: uploadList, renderItem: function (item) {
                    var _a;
                    return ((0, jsx_runtime_1.jsxs)(antd_1.List.Item, { style: {
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            padding: '10px 0',
                            borderBottom: '1px solid #f0f0f0',
                        }, children: [(0, jsx_runtime_1.jsxs)("div", { style: { flex: 1 }, children: [(0, jsx_runtime_1.jsxs)(Text, { strong: true, children: [item.id, ". ", item.name, " ", item.required && (0, jsx_runtime_1.jsx)("span", { style: { color: 'red' }, children: "*" })] }), (0, jsx_runtime_1.jsx)("br", {}), (0, jsx_runtime_1.jsx)(Text, { type: "secondary", style: { fontSize: '12px' }, children: item.description }), (0, jsx_runtime_1.jsx)("br", {}), item.template && ((0, jsx_runtime_1.jsx)(antd_1.Button, { type: "link", icon: (0, jsx_runtime_1.jsx)(icons_1.DownloadOutlined, {}), onClick: function () { return console.log("\u4E0B\u8F7D ".concat(item.template)); }, children: "\u70B9\u51FB\u4E0B\u8F7D\u6A21\u677F" }))] }), (0, jsx_runtime_1.jsx)("div", { style: { textAlign: 'right', display: 'flex', alignItems: 'center', gap: '8px' }, children: item.uploaded ? ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(Text, { type: "success", children: (_a = item.file) === null || _a === void 0 ? void 0 : _a.name }), (0, jsx_runtime_1.jsx)(icons_1.CheckCircleOutlined, { style: { color: 'green' } }), (0, jsx_runtime_1.jsx)(antd_1.Button, { type: "text", icon: (0, jsx_runtime_1.jsx)(icons_1.DeleteOutlined, {}), onClick: function () { return handleDelete(item.id); }, danger: true })] })) : ((0, jsx_runtime_1.jsx)(antd_1.Upload, { showUploadList: false, beforeUpload: function (file) {
                                        handleUpload(file, item.id);
                                        return false;
                                    }, children: (0, jsx_runtime_1.jsx)(antd_1.Button, { icon: (0, jsx_runtime_1.jsx)(icons_1.UploadOutlined, {}), children: "\u9644\u4EF6\u4E0A\u4F20" }) })) })] }));
                } })] }));
};
exports.default = UploadSidebar;
