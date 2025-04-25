const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');

const Record = sequelize.define('Record', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  value: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
  tableName: 'records', // Force lowercase table name
  timestamps: true,
  createdAt: 'createdAt',
  updatedAt: false,
});

module.exports = Record;