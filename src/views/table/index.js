import React, { useState } from 'react';
import { Space, Table, Tag } from 'antd';
import { getUserList } from '../../apis/user';

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

  getUserList().then((response) => {
    setUserList(response.data);
  });

  return (
    <div className="page-content">
      <Table
        columns={columns}
        dataSource={userList}
        scroll={{
          y: 240,
        }}
        bordered
        style={{ height: 500 }}
      ></Table>
    </div>
  );
}
export default Dashboard;
