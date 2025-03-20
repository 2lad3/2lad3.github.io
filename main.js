"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = __importDefault(require("react"));
var client_1 = require("react-dom/client");
require("./index.css");
var App_tsx_1 = __importDefault(require("./App.tsx"));
var rootElement = document.getElementById('root');
if (rootElement) {
    (0, client_1.createRoot)(rootElement).render((0, jsx_runtime_1.jsx)(react_1.default.StrictMode, { children: (0, jsx_runtime_1.jsx)(App_tsx_1.default, {}) }));
}
else {
    console.error('Root element not found');
}
