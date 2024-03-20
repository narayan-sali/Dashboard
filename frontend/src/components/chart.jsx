import React from "react";
import { Bar } from "react-chartjs-2";

const Chart = ({ data }) => {
  const { labels, values } = data;

  // Ensure that data is provided before rendering the chart
  if (!labels || !values || labels.length === 0 || values.length === 0) {
    return <div>No data available</div>;
  }

  // Construct chart data
  const chartData = {
    labels: labels,
    datasets: [
      {
        label: 'Data',
        data: values,
        backgroundColor: 'rgba(75,192,192,1)',
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 2
      }
    ]
  };

  return (
    <div>
      <h2>Chart</h2>
      <div>
        <Bar
          data={chartData}
          options={{
            scales: {
              y: {
                beginAtZero: true // Use "y" instead of "yAxes" for Chart.js v3
              }
            }
          }}
        />
      </div>
    </div>
  );
};

export default Chart;
