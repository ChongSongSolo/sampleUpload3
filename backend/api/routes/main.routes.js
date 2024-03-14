var express = require('express');
var router = express.Router();
const mainController = require('../controllers/main.controller');


//http verbs: post, get, put, delete
//post /api/providers
router.post('/providers', mainController.create);

//get  /api/providers
router.get( '/providers', mainController.readAll);

//get one  /api/providers/123
router.get("/providers/:id", mainController.readOne);

//put  /api/providers/123
router.put('/providers/:id', mainController.update);

//delete one provider  /api/providers/123
router.delete('/providers/:id', mainController.deleteOne);

//delete all providers  /api/providers
router.delete('/providers', mainController.deleteAll);

module.exports= router;