import React, { useState } from 'react';
import FileUpload from './FileUpload';
import DNSChart from './DNSChart';

function DNSManager() {
  const [chartData, setChartData] = useState({
    labels: [],
    values: []
  });

  const handleFileLoaded = (data) => {
    console.log(data); // Process data here to update state
    // Example: Count record types and update chartData
  };

  return (
    <div>
      <FileUpload onFileLoaded={handleFileLoaded} />
      <DNSChart data={chartData} />
    </div>
  );
}

export default DNSManager;
