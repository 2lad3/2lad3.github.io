"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var antd_1 = require("antd");
var icons_1 = require("@ant-design/icons");
var react_router_dom_1 = require("react-router-dom");
var Sider = antd_1.Layout.Sider;
var Search = antd_1.Input.Search;
var Panel = antd_1.Collapse.Panel;
var Sidebar = function () {
    var navigate = (0, react_router_dom_1.useNavigate)();
    var _a = (0, react_1.useState)(false), collapsed = _a[0], setCollapsed = _a[1];
    var _b = (0, react_1.useState)(['/analysis']), selectedKey = _b[0], setSelectedKey = _b[1];
    // 处理菜单点击
    var handleMenuClick = function (e) {
        setSelectedKey([e.key]);
        navigate(e.key);
    };
    // 切换侧边栏展开/收缩
    var toggleSidebar = function () {
        setCollapsed(!collapsed);
    };
    // 最近对话数据（模拟）
    var chatHistory = {
        today: ['对话 1', '对话 2', '对话 3'],
        week: ['对话 4', '对话 5', '对话 6'],
        month: ['对话 7', '对话 8', '对话 9', '对话 10'],
    };
    return ((0, jsx_runtime_1.jsxs)(Sider, { width: 250, collapsible: true, collapsed: collapsed, trigger: null, style: { background: '#fff', padding: '10px', transition: 'width 0.3s' }, children: [(0, jsx_runtime_1.jsx)(antd_1.Button, { type: "text", icon: collapsed ? (0, jsx_runtime_1.jsx)(icons_1.MenuUnfoldOutlined, {}) : (0, jsx_runtime_1.jsx)(icons_1.MenuFoldOutlined, {}), onClick: toggleSidebar, style: { position: 'absolute', top: 10, right: 10, zIndex: 100 } }), !collapsed && ((0, jsx_runtime_1.jsxs)("div", { style: { fontSize: '20px', fontWeight: 'bold', marginBottom: '10px', textAlign: 'center' }, children: [(0, jsx_runtime_1.jsx)("span", { style: { color: '#1890ff' }, children: "AI" }), " PowerMind"] })), !collapsed && (0, jsx_runtime_1.jsx)(Search, { placeholder: "\u641C\u7D22\u5386\u53F2\u5BF9\u8BDD", style: { marginBottom: '10px' } }), (0, jsx_runtime_1.jsxs)(antd_1.Menu, { mode: "vertical", selectedKeys: selectedKey, onClick: handleMenuClick, children: [(0, jsx_runtime_1.jsx)(antd_1.Menu.Item, { icon: (0, jsx_runtime_1.jsx)(icons_1.MessageOutlined, {}), children: "\u667A\u80FD\u95EE\u7B54" }, "/qa"), (0, jsx_runtime_1.jsx)(antd_1.Menu.Item, { icon: (0, jsx_runtime_1.jsx)(icons_1.BarChartOutlined, {}), children: "\u6545\u969C\u5206\u6790" }, "/analysis"), (0, jsx_runtime_1.jsx)(antd_1.Menu.Item, { icon: (0, jsx_runtime_1.jsx)(icons_1.ProjectOutlined, {}), children: "\u9879\u76EE\u8BC4\u4F30" }, "/project-evaluation")] }), (0, jsx_runtime_1.jsx)(antd_1.Divider, {}), !collapsed && ((0, jsx_runtime_1.jsx)("div", { style: { fontWeight: 'bold', marginBottom: '5px', fontSize: '14px' }, children: "\u6700\u8FD1\u5BF9\u8BDD" })), !collapsed && ((0, jsx_runtime_1.jsxs)(antd_1.Collapse, { defaultActiveKey: ['1', '2', '3'], ghost: true, children: [(0, jsx_runtime_1.jsx)(Panel, { header: "\u4ECA\u5929", children: chatHistory.today.map(function (chat, index) { return ((0, jsx_runtime_1.jsx)("div", { style: { padding: '5px 10px', cursor: 'pointer', color: '#1890ff' }, onClick: function () { return console.log("\u70B9\u51FB\u4E86 ".concat(chat)); }, children: chat }, index)); }) }, "1"), (0, jsx_runtime_1.jsx)(Panel, { header: "7\u5929\u5185", children: chatHistory.week.map(function (chat, index) { return ((0, jsx_runtime_1.jsx)("div", { style: { padding: '5px 10px', cursor: 'pointer', color: '#1890ff' }, onClick: function () { return console.log("\u70B9\u51FB\u4E86 ".concat(chat)); }, children: chat }, index)); }) }, "2"), (0, jsx_runtime_1.jsx)(Panel, { header: "30\u5929\u5185", children: chatHistory.month.map(function (chat, index) { return ((0, jsx_runtime_1.jsx)("div", { style: { padding: '5px 10px', cursor: 'pointer', color: '#1890ff' }, onClick: function () { return console.log("\u70B9\u51FB\u4E86 ".concat(chat)); }, children: chat }, index)); }) }, "3")] })), !collapsed && ((0, jsx_runtime_1.jsx)(antd_1.Button, { type: "primary", danger: true, icon: (0, jsx_runtime_1.jsx)(icons_1.DeleteOutlined, {}), style: { width: '100%', marginTop: '10px' }, children: "\u6E05\u9664\u6240\u6709\u5BF9\u8BDD" }))] }));
};
exports.default = Sidebar;
