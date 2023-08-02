let express = require('express');
let app = express();

const cors = require('cors');

// 允许跨域
app.use(cors());

const homeRouter = require('./routes/home.js');

app.use('/home', homeRouter);

var server = app.listen(9000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('应用实例，访问地址为 http://%s:%s', host, port);
});
