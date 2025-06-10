const fs = require('fs');
const path = require('path');

const dbPath = path.resolve(__dirname, '../db.json');

const conexao = () => {
  try {
    const data = fs.readFileSync(dbPath, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.error("Error reading or parsing db.json:", error);
    return null;
  }
};

module.exports = conexao();
