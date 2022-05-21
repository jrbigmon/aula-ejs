const express = require('express');
const router = express.Router();
const homeController = require('../controller/homeController');

router.get('/', homeController.showPaginaInicial);

router.get('/cadastrar/produto', homeController.showCadastrarView);

router.post('/cadastrar/produto', homeController.showCadastrar);

module.exports = router;

