const taskModel = require('../Models/taskModel');
const crypto = require('crypto');

class taskController {

  buscarTodos(req, res) {
    try {
      const tasks = taskModel.buscarTodos();
      res.status(200).json(tasks);
    } catch (error) {
      res.status(400).json(error.message);
    }
  };

  buscar(req, res) {
    try {
      const { id } = req.params;
      const task = taskModel.buscar(id);
      if (task) {
        res.status(200).json(task);
      } else {
        res.status(404).json({ message: 'Task not found' });
      }
    } catch (error) {
      res.status(400).json(error.message);
    }
  };

  criar(req, res) {
    try {
      const novotask = req.body;
      novotask.id = crypto.randomBytes(4).toString('hex');
      const task = taskModel.criar(novotask);	
      res.status(201).json(task);
    } catch (error) {
      res.status(400).json(error.message);
    }
  };

  atualizar(req, res) {
    try {
      const { id } = req.params;
      const taskAtualizado = req.body;
      const task = taskModel.atualizar(taskAtualizado, id);
      if (task) {
        res.status(200).json(task);
      } else {
        res.status(404).json({ message: 'Task not found' });
      }
    } catch (error) {
      res.status(400).json(error.message);
    }
  };

  deletar(req, res) {
    try {
      const { id } = req.params;
      const task = taskModel.deletar(id);
      if (task) {
        res.status(200).json(task);
      } else {
        res.status(404).json({ message: 'Task not found' });
      }
    } catch (error) {
      res.status(400).json(error.message);
    }
  };
}
module.exports = new taskController();
