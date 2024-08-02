import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import sensorDataRoutes from './routes/index.mjs';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());
app.use('/api', sensorDataRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
