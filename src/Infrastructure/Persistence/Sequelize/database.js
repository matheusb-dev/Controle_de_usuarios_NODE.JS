// src/Infrastructure/Persistence/Sequelize/database.js

const { Sequelize } = require('sequelize');

// Acessa as configurações do banco de dados a partir de um arquivo centralizado
const config = require('../../../../config');

const sequelize = new Sequelize(config.db.url, {
  dialect: config.db.dialect, 
  logging: false, // Desabilitar logs do Sequelize em produção
});

module.exports = sequelize;