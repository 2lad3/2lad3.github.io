"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var Layout_1 = __importDefault(require("./layout/Layout"));
var Home_1 = __importDefault(require("./pages/Home"));
var UploadSidebar_1 = __importDefault(require("./components/UploadSidebar"));
var ProjectEvaluation_1 = __importDefault(require("./pages/ProjectEvaluation"));
var ProjectDatabase_1 = __importDefault(require("./pages/ProjectDatabase")); // ✅ 添加 ProjectDatabase 导入
var App = function () {
    // 控制上传侧栏的显示/隐藏
    var _a = (0, react_1.useState)(false), uploadVisible = _a[0], setUploadVisible = _a[1];
    return ((0, jsx_runtime_1.jsxs)(react_router_dom_1.BrowserRouter, { basename: "/", children: [(0, jsx_runtime_1.jsx)(react_router_dom_1.Routes, { children: (0, jsx_runtime_1.jsxs)(react_router_dom_1.Route, { path: "/", element: (0, jsx_runtime_1.jsx)(Layout_1.default, {}), children: [(0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { index: true, element: (0, jsx_runtime_1.jsx)(Home_1.default, { openUploadSidebar: function () { return setUploadVisible(true); } }) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "analysis", element: (0, jsx_runtime_1.jsx)(Home_1.default, { openUploadSidebar: function () { return setUploadVisible(true); } }) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "project-evaluation", element: (0, jsx_runtime_1.jsx)(ProjectEvaluation_1.default, {}) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "project-database", element: (0, jsx_runtime_1.jsx)(ProjectDatabase_1.default, {}) })] }) }), (0, jsx_runtime_1.jsx)(UploadSidebar_1.default, { visible: uploadVisible, onClose: function () { return setUploadVisible(false); } })] }));
};
exports.default = App;
