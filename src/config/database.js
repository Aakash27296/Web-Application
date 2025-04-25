const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('postgres://postgres:password@localhost:5432/bulk_data1', {
  dialect: 'postgres',
  logging: false,
});

module.exports = { sequelize }; // Export as object