import { Card, Col, Row, Statistic, Space, Table, Tag, Avatar, List } from 'antd';
import { ArrowDownOutlined, ArrowUpOutlined } from '@ant-design/icons';
import DashboardColumn from './components/column';
import DashboardLine from './components/line';
import React, { useState } from 'react';
import { getUserList, getArticleList } from '../../apis/user';

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
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    render: (_, { tags }) => (
      <>
        {tags.map((tag) => {
          let color = tag.length > 5 ? 'geekblue' : 'green';
          if (tag === 'loser') {
            color = 'volcano';
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: 'Action',
    key: 'action',
    render: () => (
      <Space size="middle">
        <a>Delete</a>
      </Space>
    ),
  },
];

function Dashboard() {
  const [userList = [], setUserList] = useState([]);
  const [articleList = [], setArticleList] = useState([]);

  getArticleList().then((response) => {
    setArticleList(response.data);
  });

  getUserList().then((response) => {
    setUserList(response.data);
  });

  return (
    <div className="page-content">
      <Row gutter={8} className="mb-lg">
        <Col span={8}>
          <Statistic title="Active Users" value={112893} />
        </Col>

        <Col span={8}>
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
        <Col span={8}>
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
        <Col span={16}>
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
        <Col span={8}>
          <List
            itemLayout="horizontal"
            dataSource={articleList}
            renderItem={(item, index) => (
              <List.Item>
                <List.Item.Meta
                  avatar={<Avatar src={`${item.src}?key=${index}`} />}
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
