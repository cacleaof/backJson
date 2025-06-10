const conexao = require('../Database/conexao');
const fs = require('fs');
const path = require('path');
const { format, parseISO } = require('date-fns');

const dbPath = path.resolve(__dirname, '../db.json');

class despesaModel {

  persist() {
    fs.writeFileSync(dbPath, JSON.stringify(conexao, null, 2));
  }

  buscar(id) {
    return conexao.registros.find(registro => registro.id === id);
  }

  buscarTodos() {
    return conexao.registros;
  }

  criar(novoRegistro) {
    if (novoRegistro.data) {
        novoRegistro.venc = format(parseISO(novoRegistro.data), 'dd-MM-yyyy');
        delete novoRegistro.data;
    }
    conexao.registros.push(novoRegistro);
    this.persist();
    return novoRegistro;
  }
    
  deletar(id) {
    const registroIndex = conexao.registros.findIndex(registro => registro.id === id);
    if (registroIndex > -1) {
      const deleted = conexao.registros.splice(registroIndex, 1);
      this.persist();
      return deleted;
    }
    return null;
  }

  atualizar(registroAtualizado, id) {
    const registroIndex = conexao.registros.findIndex(registro => registro.id === id);
    if (registroIndex > -1) {
      conexao.registros[registroIndex] = { ...conexao.registros[registroIndex], ...registroAtualizado };
      this.persist();
      return conexao.registros[registroIndex];
    }
    return null;
  }
}

module.exports = new despesaModel();