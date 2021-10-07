import 'antd/dist/antd.css';
import './styles/index.scss';
import { Layout, Menu } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import Dashboard from './views/dashboard/index';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

function App() {
  return (
    <Layout className="app-main">
      <Header className="header">
        <div className="logo" />
      </Header>
      <Layout className="app-wrapper">
        <Sider width={200} className="side-layout">
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%', borderRight: 0 }}
          >
            <SubMenu key="sub1" icon={<UserOutlined />} title="主页">
              <Menu.Item key="1">仪表板</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" icon={<LaptopOutlined />} title="图表">
              <Menu.Item key="5">Echarts</Menu.Item>
              <Menu.Item key="6">Charts</Menu.Item>
            </SubMenu>
            <SubMenu key="sub3" icon={<NotificationOutlined />} title="表格">
              <Menu.Item key="9">option9</Menu.Item>
              <Menu.Item key="10">option10</Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Content className="app-content">
          <Dashboard item="hello"></Dashboard>
        </Content>
      </Layout>
    </Layout>
  );
}

export default App;
