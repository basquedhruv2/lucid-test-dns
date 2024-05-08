import React from 'react';
import { Bar } from 'react-chartjs-2';

function DNSChart({ data }) {
  const chartData = {
    labels: data.labels,
    datasets: [{
      label: 'Number of Records',
      data: data.values,
      backgroundColor: 'rgba(54, 162, 235, 0.6)',
      borderColor: 'rgba(54, 162, 235, 1)',
      borderWidth: 1,
    }]
  };

  const chartOptions = {
    scales: {
      y: {
        beginAtZero: true
      }
    },
    plugins: {
      legend: {
        display: true,
        position: 'top'
      }
    }
  };

  return <Bar data={chartData} options={chartOptions} />;
}

export default DNSChart;
