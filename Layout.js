"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var antd_1 = require("antd");
var react_router_dom_1 = require("react-router-dom");
var Sidebar_1 = __importDefault(require("../components/Sidebar"));
var Sider = antd_1.Layout.Sider, Content = antd_1.Layout.Content;
var AppLayout = function () {
    var location = (0, react_router_dom_1.useLocation)(); // 获取当前路径
    // 判断是否是“项目数据库”页面
    var isProjectDatabasePage = location.pathname === '/project-database';
    return ((0, jsx_runtime_1.jsxs)(antd_1.Layout, { style: { minHeight: '100vh' }, children: [(0, jsx_runtime_1.jsx)(Sider, { width: 250, style: { background: '#fff' }, children: (0, jsx_runtime_1.jsx)(Sidebar_1.default, {}) }), (0, jsx_runtime_1.jsx)(antd_1.Layout, { style: {
                    display: 'flex',
                    flexDirection: 'column',
                    flex: 1,
                    overflow: 'hidden',
                }, children: (0, jsx_runtime_1.jsx)(Content, { style: {
                        flex: 1,
                        display: 'flex',
                        flexDirection: 'column',
                        overflow: 'auto',
                        background: '#f0f2f5',
                        padding: isProjectDatabasePage ? '0' : '16px', // 项目数据库无边距，其他页面有
                        alignItems: isProjectDatabasePage ? 'stretch' : 'center', // 其他页面居中
                        justifyContent: isProjectDatabasePage ? 'flex-start' : 'center', // 其他页面垂直居中
                    }, children: (0, jsx_runtime_1.jsx)(react_router_dom_1.Outlet, {}) }) })] }));
};
exports.default = AppLayout;
