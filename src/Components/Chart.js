import React, { useRef, useEffect } from 'react';
import Chart from 'chart.js/auto';

const ChartComponent = () => {
  const canvasRef = useRef(null);
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = canvasRef.current.getContext('2d');

    const labels = ['Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'];
    const data = [0, 10000, 8000, 11000, 11000, 13000, 15000, 28000, 35000, 34000, 35000, 35000];
    const backgroundColor = 'rgba(188, 226, 158, 1)';
    const borderColor = 'rgba(188, 226, 158, 1)';

    if (chartRef.current) {
      // If a chart instance already exists, destroy it before creating a new one
      chartRef.current.destroy();
    }

    // Create the chart
    chartRef.current = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [
          {
            label: 'Sales',
            data: data,
            backgroundColor: backgroundColor,
            borderColor: borderColor,
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              callback: function (value, index, values) {
                return value / 1000 + 'k';
              },
              stepSize: 10000,
            },
          },
        },
      },
    });
  }, []);

  return (
    <div>
      <h2 className='pb-10 font-medium'>Account Balance</h2>
      <canvas ref={canvasRef}></canvas>
    </div>
  );
};

export default ChartComponent;
