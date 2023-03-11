import React from 'react';
// import axios from 'axios';
import '../../mock';
import Chart from '../../components/Chart';
import { Row, Col } from 'antd';
const style = { background: '#0092ff', padding: '8px 0', height: '300px' };

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // axios.get('/test').then(response=> {
    //   console.log(response);
    // });
  }

  render() {
    return <div >
<Row gutter={6}>
      <Col className="gutter-row" span={6}>
        <div style={style}> <Chart></Chart></div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div style={style}> <Chart></Chart></div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div style={style}> <Chart></Chart></div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div style={style}> <Chart></Chart></div>
      </Col>
    </Row>


    </div>;
  }
}

export default Dashboard;
