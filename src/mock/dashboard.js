const Mock = require('mockjs');
const Random = Mock.Random;

let userList = [];

for (let i = 0; i < Random.integer(50, 100); i++) {
  let province = Random.province();
  let city = Random.city(province);
  userList.push({
    key: i + 1,
    name: Random.cname(),
    age: Random.integer(18, 50),
    address: Random.county(city),
    tags: ['nice', 'developer'],
  });
}

Mock.mock('/home/userList', 'post', () => {
  return {
    data: userList,
  };
});

Mock.mock('/home/articleList', 'post', () => {
  return {
    data: [
      {
        title: 'Ant Design Title 1',
        src: 'https://joesch.moe/api/v1/random',
        description: 'Ant Design1, a design language for background applications, is refined by Ant UED Team',
      },
      {
        title: 'Ant Design Title 2',
        description: 'Ant Design2, a design language for background applications, is refined by Ant UED Team',
      },
      {
        title: 'Ant Design Title 3',
        description: 'Ant Design3, a design language for background applications, is refined by Ant UED Team',
      },
      {
        title: 'Ant Design Title 4',
        description: 'Ant Design4, a design language for background applications, is refined by Ant UED Team',
      },
    ],
  };
});
