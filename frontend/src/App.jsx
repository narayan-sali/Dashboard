// App.jsx
import React, { useState, useEffect } from 'react';
import Filter from './components/filter.jsx';
 import Chart from './components/chart.jsx';
import axios from 'axios'; // Import Axios directly

const App = () => {
  const [data, setData] = useState({ labels: [], values: [] });

  const fetchData = async (filters) => {
    try {
      const response = await axios.get('/api/v1/dashboard/filterdata', {
        params: filters
      });
      const { labels, values } = response.data.data;
      setData({ labels, values });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData(); // Fetch data when component mounts
  }, []); // Empty dependency array ensures useEffect runs only once on mount

  return (
    <div>
      <h1>Data Visualization Dashboard</h1>
      <Filter fetchData={fetchData} />
      <Chart data={data} />
    </div>
  );
};

export default App;
