import React from 'react';
import ReactDOM from 'react-dom';
import zhCN from 'antd/es/locale/zh_CN';
import { ConfigProvider } from 'antd';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './AppRouter';

ReactDOM.render(
  <ConfigProvider locale={zhCN}>
    <BrowserRouter>
      <AppRouter></AppRouter>
    </BrowserRouter>
  </ConfigProvider>
  , document.getElementById('root')
);
