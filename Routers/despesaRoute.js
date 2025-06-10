const { Router } = require('express');
const router = Router();
const despesaController = require('../Controllers/despesaController');
const { format, parseISO } = require('date-fns');

router.get('/despesas', despesaController.buscarTodos);

router.get('/despesa/:id', despesaController.buscar);
  
router.post('/despesa', (despesaController.criar));
 
router.put('/despesa/:id', (despesaController.atualizar));
  
router.delete('/despesa/:id', (despesaController.deletar));
  
module.exports = router;
