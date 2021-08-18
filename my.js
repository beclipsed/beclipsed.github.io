const myChart = echarts.init(document.getElementById('main'));
//内容⬇️️️⬇️️️⬇️️️


option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            crossStyle: {
                color: '#999'
            }
        }
    },
    toolbox: {
        feature: {
            dataView: {show: true, readOnly: false},
            magicType: {show: true, type: ['line', 'bar']},
            restore: {show: true},
            saveAsImage: {show: true}
        }
    },
    legend: {
        data: ['薪资', '涨幅']
    },
    xAxis: [
        {
            type: 'category',
            data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
            axisPointer: {
                type: 'shadow'
            }
        }
    ],
    yAxis: [
        {
            type: 'value',
            name: '薪资',
            min: 0,
            max: 120,
            axisLabel: {
                formatter: '{value} K'
            }
        },
        {
            type: 'value',
            name: '涨幅',
            min: 0,
            max: 30,
            axisLabel: {
                formatter: '{value} K'
            }
        }
    ],
    series: [
        {
            name: '薪资',
            type: 'line',
            data: [33.11, 35.67, 44.04, 58.36, 64.93, 65.29, 73.86, 75.19]
        }, {
            name: '涨幅',
            type: 'bar',
            yAxisIndex: 1,
            data: [0, 2.56, 8.37, 14.32, 6.57, 0.36, 8.57, 1.33]
        }
    ]
};

//内容⬆️⬆️⬆️
//使用刚指定的配置项和数据显示图表。
myChart.setOption(option);