const express = require('express');
const router = express.Router();

const pokemonHandler = require('./handler/pokemon')

router.get('/', pokemonHandler.getAll);
router.get('/:id', pokemonHandler.detail);

module.exports = router;
