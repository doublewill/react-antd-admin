import { UserOutlined, PieChartOutlined, DesktopOutlined, FileOutlined } from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
import React, { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
const { Header, Sider, Content, Footer } = Layout;

function getItem({ label, icon, path, children = [] }) {
  return {
    key: path,
    icon,
    path,
    children: children.length ? children : null,
    label,
  };
}

const items = [
  getItem({ label: '主页', path: '/dashboard', icon: <DesktopOutlined /> }),
  getItem({ label: '图表', path: '/chart', icon: <PieChartOutlined /> }),
  getItem({ label: '表格', path: '/table', icon: <UserOutlined /> }),
  getItem({ label: 'Files', path: '/file', icon: <FileOutlined /> }),
];

const AppLayout = () => {
  let navigate = useNavigate();
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const [activeMenu, setActiveMenu] = useState('/dashboard');

  function handleRouteChange(e) {
    setActiveMenu(e.key);
    navigate(e.key);
  }

  return (
    <Layout className="app-layout">
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <Menu theme="dark" mode="inline" defaultSelectedKeys={[activeMenu]} onClick={handleRouteChange} items={items} />
      </Sider>
      <Layout className="app-layout-inner">
        <Header
          style={{
            background: colorBgContainer,
          }}
        />
        <Content className="app-layout-content">
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};
export default AppLayout;
