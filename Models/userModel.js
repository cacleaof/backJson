const conexao = require('../Database/conexao');
const fs = require('fs');
const path = require('path');

const dbPath = path.resolve(__dirname, '../db.json');

class userModel {

  persist() {
    fs.writeFileSync(dbPath, JSON.stringify(conexao, null, 2));
  }

  buscar(id) {
    return conexao.projetos.find(projeto => projeto.id === id);
  }

  buscarTodos() {
    return conexao.projetos;
  }

  criar(novoProjeto) {
    conexao.projetos.push(novoProjeto);
    this.persist();
    return novoProjeto;
  }
    
  deletar(id) {
    const projetoIndex = conexao.projetos.findIndex(projeto => projeto.id === id);
    if (projetoIndex > -1) {
      const deleted = conexao.projetos.splice(projetoIndex, 1);
      this.persist();
      return deleted;
    }
    return null;
  }

  atualizar(projetoAtualizado, id) {
    const projetoIndex = conexao.projetos.findIndex(projeto => projeto.id === id);
    if (projetoIndex > -1) {
      conexao.projetos[projetoIndex] = { ...conexao.projetos[projetoIndex], ...projetoAtualizado };
      this.persist();
      return conexao.projetos[projetoIndex];
    }
    return null;
  }
}

module.exports = new userModel();