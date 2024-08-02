import mongoose from 'mongoose';

// MongoDB connection URL
const dbURI = 'mongodb+srv://pratikkumarsah07:BxCIcIk3W92FHopd@aquavisionx.phg2dvb.mongodb.net/yourDatabaseName';

// Connect to MongoDB
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch((err) => console.log('MongoDB connection error:', err));

const sensorSchema = new mongoose.Schema({
    ph: Number,
    dissolvedOxygen: Number,
    turbidity: Number,
    conductivity: Number,
    temperature: Number,
    tds: Number,
    timestamp: { type: Date, default: Date.now }
});

const SensorData = mongoose.model('SensorData', sensorSchema);

export default SensorData;

















