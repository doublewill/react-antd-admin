import { Card, Col, Row, Statistic, Space, Table, Tag, Avatar, List } from 'antd';
import { ArrowDownOutlined, ArrowUpOutlined } from '@ant-design/icons';
import DashboardColumn from './components/column';
import DashboardLine from './components/line';
import React, { useEffect, useState } from 'react';

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    width: 120,
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
    width: 60,
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
];

function Dashboard() {
  const [userList = [], setUserList] = useState([]);
  const [articleList = [], setArticleList] = useState([]);

  const fetUserList = () => {
    fetch('http://127.0.0.1:9000/home/listUsers')
      .then((response) => response.json())
      .then((response) => {
        setUserList(response.data);
      });
  };

  const fetArticleList = () => {
    fetch('http://127.0.0.1:9000/home/articleList')
      .then((response) => response.json())
      .then((response) => {
        setArticleList(response.data);
      });
  };

  useEffect(() => {
    fetUserList();
    fetArticleList();
  }, []);

  return (
    <div className="page-content">
      <Row gutter={8} className="mb-lg">
        <Col span={6}>
          <Card bordered={false}>
            <Statistic title="Active Users" value={112893} />
          </Card>
        </Col>

        <Col span={6}>
          <Card bordered={false}>
            <Statistic title="Account Balance (CNY)" value={112893} precision={2} />
          </Card>
        </Col>
        <Col span={6}>
          <Card bordered={false}>
            <Statistic
              title="Active"
              value={11.28}
              precision={2}
              valueStyle={{
                color: '#3f8600',
              }}
              prefix={<ArrowUpOutlined />}
              suffix="%"
            />
          </Card>
        </Col>
        <Col span={6}>
          <Card bordered={false}>
            <Statistic
              title="Idle"
              value={9.3}
              precision={2}
              valueStyle={{
                color: '#cf1322',
              }}
              prefix={<ArrowDownOutlined />}
              suffix="%"
            />
          </Card>
        </Col>
      </Row>
      <Row gutter={8} className="mb-lg">
        <Col span={12}>
          <DashboardLine />
        </Col>
        <Col span={12}>
          <DashboardColumn />
        </Col>
      </Row>
      <Row gutter={8} className="mb-lg">
        <Col span={12}>
          <Table
            columns={columns}
            dataSource={userList}
            scroll={{
              y: 240,
            }}
            bordered
            style={{ height: 500 }}
          ></Table>
        </Col>
        <Col span={12}>
          <List
            itemLayout="horizontal"
            dataSource={articleList}
            renderItem={(item, index) => (
              <List.Item>
                <List.Item.Meta
                  avatar={<Avatar src={`${item.srcUrl}?key=${index}`} />}
                  title={<a href="https://ant.design">{item.title}</a>}
                  description={item.description}
                />
              </List.Item>
            )}
          />
        </Col>
      </Row>
    </div>
  );
}
export default Dashboard;
