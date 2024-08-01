const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

let latestSensorData = {};

// Middleware
app.use(bodyParser.json());
app.use(express.static('public'));

// Route to receive sensor data
app.post('/api/sensor-data', (req, res) => {
  latestSensorData = req.body;
  console.log('Received sensor data:', latestSensorData);
  res.send('Data received');
});

// Route to fetch the latest sensor data
app.get('/api/sensor-data', (req, res) => {
  res.json(latestSensorData);
});

// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
