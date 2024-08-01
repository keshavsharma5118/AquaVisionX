const express = require('express');
//const { postData, getData } = //require('../controllers/dataController');
const router = express.Router();

router.post('/data', postData);
router.get('/data', getData);

module.exports = router;
