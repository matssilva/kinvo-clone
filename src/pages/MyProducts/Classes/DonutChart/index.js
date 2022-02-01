import React from 'react';
import Chart from 'react-apexcharts';

const DonutChart = ({ data }) => {
  const total = data.map((item) => item.balance).reduce((a, b) => a + b, 0);
  const chartState = {
    series: data.map((item) => item.percentage),
    options: {
      plotOptions: {
        pie: {
          donut: {
            labels: {
              show: true,
              name: {
                show: true,
                fontSize: '12px',
              },
              value: {
                show: true,
                fontSize: '10px',
                fontWeight: 300,
                formatter: (num) => {
                  return `R$ ${(total * (num / 100)).toFixed(2)}`;
                },
              },
            },
          },
        },
      },
      chart: {
        type: 'donut',
      },
      tooltip: {
        enabled: false,
      },
      legend: {
        show: false,
        showForSingleSeries: false,
        showForNullSeries: false,
        showForZeroSeries: false,
      },
      labels: data.map((item) => item.className),
      colors: data.map((item) => item.color),
      dataLabels: {
        enabled: false,
      },
    },
  };

  return (
    <div>
      <Chart
        options={chartState.options}
        series={chartState.series}
        type="donut"
        height={'100%'}
      />
    </div>
  );
};

export default DonutChart;
