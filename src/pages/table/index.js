import React, { useState } from 'react';
import { Space, Table, Tag } from 'antd';
import { getUserList } from '@/apis/user';

function Dashboard() {

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
      width: 100,
      render: (record) => <a onClick={() => deleteRecord(record)}>Delete</a>,
    },
  ];

  const [userList = [], setUserList] = useState([]);

  const deleteRecord = (record)=> {
    console.log(record);
  };

  getUserList().then((response) => {
    setUserList(response.data);
  });

  const topNavHeight = 64;
  const paginationHeight = 130;
  const { clientHeight } = document.body;

  return (
    <div className="page-content">
      <Table
        columns={columns}
        dataSource={userList}
        scroll={{
          y: clientHeight - topNavHeight - paginationHeight,
        }}
        bordered
      ></Table>
    </div>
  );
}
export default Dashboard;
