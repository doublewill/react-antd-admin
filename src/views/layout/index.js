import { MenuFoldOutlined, MenuUnfoldOutlined, UserOutlined, PieChartOutlined, DesktopOutlined, FileOutlined } from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
import React, { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
const { Header, Sider, Content } = Layout;

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

  const [collapsed, setCollapsed] = useState(false);
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
      <Header
        className="app-layout-header"
        style={{
          background: colorBgContainer,
        }}
      >
        {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
          className: 'trigger',
          onClick: () => setCollapsed(!collapsed),
        })}
      </Header>
      <Layout className="app-layout-content">
        <Sider trigger={null} collapsible collapsed={collapsed} className="app-layout-sider">
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={[activeMenu]} onClick={handleRouteChange} items={items} />
        </Sider>
        <Content
          className="app-layout-inner"
          style={{
            padding: 24,
            background: colorBgContainer,
          }}
        >
          <Outlet></Outlet>
        </Content>
      </Layout>
    </Layout>
  );
};
export default AppLayout;
