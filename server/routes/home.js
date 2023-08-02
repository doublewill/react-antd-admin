const express = require('express');
const app = express();

const Mock = require('mockjs');
const Random = Mock.Random;

app.get('/listUsers', function (req, res, next) {
  res.send({
    code: 200,
    data: new Array(Random.integer(10, 30)).fill(1).map((c) => {
      const provice = Random.province();
      const city = Random.city(provice);
      const county = Random.county(city);
      return {
        address: county,
        name: Random.cname(),
        email: Random.email(),
        age: Random.integer(20, 60),
      };
    }),
  });
});

app.get('/articleList', function (req, res, next) {
  res.send({
    code: 200,
    data: new Array(Random.integer(10, 30)).fill(1).map((c) => {
      return {
        description: Random.cparagraph(1, 3),
        title: Random.ctitle(),
        srcUrl: Random.image('50x50'),
      };
    }),
  });
});

module.exports = app;
