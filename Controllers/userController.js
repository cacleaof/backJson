const userModel = require('../Models/userModel');
const crypto = require('crypto');

class userController {

  buscarTodos(req, res) {
    try {
      const users = userModel.buscarTodos();
      res.status(200).json(users);
    } catch (error) {
      res.status(400).json(error.message);
    }
  };

  buscar(req, res) {
    try {
      const { id } = req.params;
      const user = userModel.buscar(id);
      if (user) {
        res.status(200).json(user);
      } else {
        res.status(404).json({ message: 'User not found' });
      }
    } catch (error) {
      res.status(400).json(error.message);
    }
  };

  criar(req, res) {
    try {
      const novouser = req.body;
      novouser.id = crypto.randomBytes(4).toString('hex');
      const user = userModel.criar(novouser);	
      res.status(201).json(user);
    } catch (error) {
      res.status(400).json(error.message);
    }
  };

  atualizar(req, res) {
    try {
      const { id } = req.params;
      const userAtualizado = req.body;
      const user = userModel.atualizar(userAtualizado, id);
      if (user) {
        res.status(200).json(user);
      } else {
        res.status(404).json({ message: 'User not found' });
      }
    } catch (error) {
      res.status(400).json(error.message);
    }
  };

  deletar(req, res) {
    try {
      const { id } = req.params;
      const user = userModel.deletar(id);
      if (user) {
        res.status(200).json(user);
      } else {
        res.status(404).json({ message: 'User not found' });
      }
    } catch (error) {
      res.status(400).json(error.message);
    }
  };
}
module.exports = new userController();
