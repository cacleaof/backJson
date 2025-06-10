const conexao = require('../Database/conexao');
const fs = require('fs');
const path = require('path');

const dbPath = path.resolve(__dirname, '../db.json');

class taskModel {

  persist() {
    fs.writeFileSync(dbPath, JSON.stringify(conexao, null, 2));
  }

  buscar(id) {
    return conexao.tarefas.find(tarefa => tarefa.id === id);
  }

  buscarTodos() {
    return conexao.tarefas;
  }

  criar(novaTarefa) {
    conexao.tarefas.push(novaTarefa);
    this.persist();
    return novaTarefa;
  }
    
  deletar(id) {
    const tarefaIndex = conexao.tarefas.findIndex(tarefa => tarefa.id === id);
    if (tarefaIndex > -1) {
      const deleted = conexao.tarefas.splice(tarefaIndex, 1);
      this.persist();
      return deleted;
    }
    return null;
  }

  atualizar(tarefaAtualizada, id) {
    const tarefaIndex = conexao.tarefas.findIndex(tarefa => tarefa.id === id);
    if (tarefaIndex > -1) {
      conexao.tarefas[tarefaIndex] = { ...conexao.tarefas[tarefaIndex], ...tarefaAtualizada };
      this.persist();
      return conexao.tarefas[tarefaIndex];
    }
    return null;
  }
}

module.exports = new taskModel();