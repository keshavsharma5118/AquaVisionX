const axios = require('axios');

// Function to generate random sensor data
function generateSensorData() {
  const sensorData = {
    ph: (Math.random() * (9 - 6) + 6).toFixed(2), // pH between 6 and 9
    dissolvedOxygen: (Math.random() * (14 - 5) + 5).toFixed(2), // DO between 5 and 14 mg/L
    turbidity: (Math.random() * 100).toFixed(2), // Turbidity in NTU
    conductivity: (Math.random() * 1000).toFixed(2), // Conductivity in µS/cm
    temperature: (Math.random() * (35 - 10) + 10).toFixed(2), // Temperature between 10 and 35°C
    tds: (Math.random() * 500).toFixed(2) // TDS in mg/L
  };
  return sensorData;
}

// Function to send sensor data to the server
async function sendSensorData() {
  const url = 'http://localhost:3000/api/sensor-data'; // Ensure this matches your server URL

  while (true) {
    const data = generateSensorData();
    try {
      const response = await axios.post(url, data);
      console.log(`Data sent successfully: ${JSON.stringify(data)}`);
      console.log(`Server response: ${response.data}`);
    } catch (error) {
      console.error(`Error sending data: ${error.message}`);
    }

    // Wait for a specified interval before sending the next data
    await new Promise(resolve => setTimeout(resolve, 5000)); // 5 seconds interval
  }
}

// Start sending sensor data
sendSensorData();
