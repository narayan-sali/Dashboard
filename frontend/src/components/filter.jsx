// components/Filter.js
import React, { useState } from 'react';
import axios from 'axios'; // Update import

const Filter = ({ fetchData }) => {
  const [country, setCountry] = useState('');
  const [sector, setSector] = useState('');
  
  const handleFilter = async () => {
    try {
      const response = await axios.get('/api/v1/dashboard/filterdata', {
        params: {
          country,
          sector
          // Add other filter parameters as needed
        }
      });
      fetchData(response.data); // Pass fetched data to parent component
      const queryParams = new URLSearchParams();
      queryParams.set('country', country);
      queryParams.set('sector', sector);
      // Add other parameters as needed
      history.push(`?${queryParams.toString()}`);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>
      <input type="text" placeholder="Country" value={country} onChange={(e) => setCountry(e.target.value)} />
      <input type="text" placeholder="Sector" value={sector} onChange={(e) => setSector(e.target.value)} />
      <button onClick={handleFilter}>Apply Filters</button>
    </div>
  );
};

export default Filter;
