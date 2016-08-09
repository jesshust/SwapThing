var express = require('express'); 
var router = express.Router(); 
var bodyParser = require('body-parser'); 
var methodOverride = require('method-override'); 
var models = require('../models'); 


router.get('/', function (req, res){
	res.redirect('/burgers')
}); 

router.get('/burgers', function(req, res){
	models.burgers.findAll().then(function (data) {
		res.render('index', {burgers : data}); 
		}); 
}); 

router.post('/burgers/create', function(req, res) {
	models.burgers.create({burger_name: req.body.name, devoured: 0}).then(function() {
		res.redirect('/burgers'); 
		}); 
}); 

router.put('/burgers/update/:id', function(req,res) {

	models.burgers.update( {'devoured' : req.body.devoured }, {where: {id:req.params.id}}).then(function(){
		res.redirect('/burgers');
	});
});

router.delete('/burgers/delete/:id', function (req, res) {

	models.burger.destroy({where: {id:req.params.id}}).then(function() {
		res.redirect('/burgers');
	});
});

module.exports = router;