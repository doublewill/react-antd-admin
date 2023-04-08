import request from '../utils/request';

export function getUserList() {
  return request({
    url: '/home/userList',
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

export function getArticleList() {
  return request({
    url: '/home/articleList',
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
