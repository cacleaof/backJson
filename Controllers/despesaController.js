const despesaModel = require('../Models/despesaModel');
const crypto = require('crypto');

class despesaController {

  buscarTodos(req, res) {
    try {
      const despesas = despesaModel.buscarTodos();
      res.status(200).json(despesas);
    } catch (error) {
      res.status(400).json(error.message);
    }
  };

  buscar(req, res) {
    try {
      const { id } = req.params;
      const despesa = despesaModel.buscar(id);
      if (despesa) {
        res.status(200).json(despesa);
      } else {
        res.status(404).json({ message: 'Despesa not found' });
      }
    } catch (error) {
      res.status(400).json(error.message);
    }
  };

  criar(req, res) {
    try {
      const novadespesa = req.body;
      novadespesa.id = crypto.randomBytes(4).toString('hex');
      const despesa = despesaModel.criar(novadespesa);
      res.status(201).json(despesa);
    } catch (error) {
      res.status(400).json(error.message);
    }
  };

  atualizar(req, res) {
    try {
      const { id } = req.params;
      const despesaAtualizado = req.body;
      const despesa = despesaModel.atualizar(despesaAtualizado, id);
      if (despesa) {
        res.status(200).json(despesa);
      } else {
        res.status(404).json({ message: 'Despesa not found' });
      }
    } catch (error) {
      res.status(400).json(error.message);
    }
  };

  deletar(req, res) {
    try {
      const { id } = req.params;
      const despesa = despesaModel.deletar(id);
      if (despesa) {
        res.status(200).json(despesa);
      } else {
        res.status(404).json({ message: 'Despesa not found' });
      }
    } catch (error) {
      res.status(400).json(error.message);
    }
  };
}

module.exports = new despesaController();
