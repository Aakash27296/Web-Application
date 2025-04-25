const Record = require('../models/Record');

exports.createRecords = async (req, res) => {
  try {
    const records = req.body;
    if (!Array.isArray(records) || records.length === 0) {
      return res.status(400).json({ error: 'Invalid input: Array of records required' });
    }
    const validRecords = records.filter(record => record.name && Number.isInteger(record.value));
    if (validRecords.length === 0) {
      return res.status(400).json({ error: 'No valid records provided' });
    }
    const createdRecords = await Record.bulkCreate(validRecords);
    res.status(201).json(createdRecords);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getRecords = async (req, res) => {
  try {
    const records = await Record.findAll();
    res.status(200).json(records);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};