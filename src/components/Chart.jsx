import React from 'react';
import * as echarts from 'echarts';
const getRandomID = () => Number(Math.random().toString().substr(4, 10) + Date.now()).toString(36);

class Chart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: getRandomID()
    };
  }

  componentDidMount() {
    let chart = echarts.init(document.getElementById(this.state.id));
    let option = {
      tooltip: {
        trigger: 'item'
      },
      legend: {
        top: '5%',
        left: 'center'
      },
      series: [
        {
          name: 'Access From',
          type: 'pie',
          radius: ['40%', '70%'],
          avoidLabelOverlap: false,
          itemStyle: {
            borderRadius: 10,
            borderColor: '#fff',
            borderWidth: 2
          },
          label: {
            show: false,
            position: 'center'
          },
          emphasis: {
            label: {
              show: true,
              fontSize: '40',
              fontWeight: 'bold'
            }
          },
          labelLine: {
            show: false
          },
          data: [
            { value: 1048, name: 'Search Engine' },
            { value: 735, name: 'Direct' },
            { value: 580, name: 'Email' },
            { value: 484, name: 'Union Ads' },
            { value: 300, name: 'Video Ads' }
          ]
        }
      ]
    };
    chart.setOption(option);
  }

  render() {
    return <div  id={this.state.id} style={{ width: '100%', height: '100%' }}></div>;
  }
}

export default Chart;
