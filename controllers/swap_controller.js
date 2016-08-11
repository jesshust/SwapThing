var express = require('express'); 
var router = express.Router(); 
var bodyParser = require('body-parser'); 
var methodOverride = require('method-override'); 
var models = require('../models'); 
var sha1 = require('sha1'); 


router.get('/', function (req, res){
	models.Users.findAll().then(function (data) {
		res.render('index', {Users : data});
	});
});

router.post('/api/newuser', function(req, res) {
	var currentUser = {
		firstName: req.body.firstName,
		lastName: req.body.lastName,
		email: req.body.email,
		password: req.body.password,
		userImage: req.body.userImage
	};

	models.Users.create(currentUser).then(function() {
		res.json(currentUser);
	}); 
});

router.post('/api/newproduct', function(req, res) {
	var currentProduct = {
		product_name: req.body.product_name,
        description: req.body.description,
        imageURL: req.body.imageURL,
        category: req.body.category,
        scaleRating: req.body.scaleRating,
        UsersId: req.body.UsersId,
        swapStatus: req.body.swapStatus
	};

	models.Products.create(currentProduct).then(function() {
		res.json(currentProduct);
	}); 
});

//router.get('/users/:email?', function (req, res){

router.get('/users/:id?', function(req, res){
	var userID = req.params.id; 
	console.log("this is from req.params.id: " + userID);

	models.Users.findOne({ where: {id: userID} }).then(function (data){
		res.render(('userView'), {Users: data});
		console.log("THIS IS FROM data:" + userID);

	});
});


		// router.get('/users/:email?', function (req, res){
		// 	var user = db.Users.

		// 	//var currentUserEmail = req.params.email;

		// 	models.Users.findOne().then(function (data) {
		// 		models.Products.findAll().then(function (data2) {
		// 			res.render('userView', {Users : data, Products : data2});
		// 		});
		// 	});
		// });

// router.post('/burgers/create', function(req, res) {
// 	models.burgers.create({burger_name: req.body.name, devoured: 0}).then(function() {
// 		res.redirect('/burgers'); 
// 		}); 
// }); 

// router.put('/burgers/update/:id', function(req,res) {

// 	models.burgers.update( {'devoured' : req.body.devoured }, {where: {id:req.params.id}}).then(function(){
// 		res.redirect('/burgers');
// 	});
// });

// router.delete('/burgers/delete/:id', function (req, res) {

// 	models.burger.destroy({where: {id:req.params.id}}).then(function() {
// 		res.redirect('/burgers');
// 	});
// });


//Monica's Half
//======================================================================================
//Jess's Half

var session = require('express-session'); 

//session
router.use(session({
	secret: 'keyboard cat', 
	saveUninitialized: true, 
	cookie: { secure: true }, 
app.use(flash());
app.use(function(req, res, next){
	res.locals.messages = req.flash(); 
		next(); 
	});  

})); 

//create login


//prompt user to login

router.post('/login', function(req, res){
	var email = req.body.email; 
	var password = req.body.password; 
	if(userID === 'jessicakhust@gmail.com' && password === 'Popcorn1'){
		req.flash('messages', { 'success' : 'Login Success' }); 
		res.redirect('/users/1'); 
	} else {
		req.flash('messages', { 'error' : 'Invalid username or password'}); 
		res.locals.messages = req.flash(); 
		res.render('login', { title : 'Login'}); 
	}
}); 

//once account is created, user has their own 'page'
router.get('/userView', function(req, res){
	var currentUserID = req.session.userID; 

	models.Users.findAll().then(function(data){

		models.Products.findAll().then(function(data2){
			res.render('userView', 
			{Users : data, Products :data2}); 
		}); 
	}); 
}); 

module.exports = router;