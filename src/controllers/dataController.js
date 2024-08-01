// Mock database
const sensorDataDB = [];

// Controller to handle POST request
const postData = (req, res) => {
  const sensorData = req.body;
  console.log('Received sensor data:', sensorData);
  // Store the data in the mock database

  sensorDataDB.push(sensorData);
  res.status(200).send('Data received');
};


// Controller to handle GET request
const getData = (req, res) => {
  // For simplicity, returning the latest data
  const latestData = sensorDataDB[sensorDataDB.length - 1] || {
    pH: 'Unknown',
    dissolvedOxygen: 'Unknown',
    turbidity: 'Unknown',
    conductivity: 'Unknown',
    temperature: 'Unknown',
    TDS: 'Unknown'
  };
  res.json(latestData);
};

module.exports = { postData, getData };
