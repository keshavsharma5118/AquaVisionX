import SensorData from '../models/SensorData.js';

const createData = async (req, res) => {
  try {
    const data = new SensorData(req.body);
    await data.save();
    res.status(201).send(data);
  } catch (error) {
    res.status(400).send(error);
  }
};

export default { createData };
