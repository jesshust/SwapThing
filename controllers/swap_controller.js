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
		models.Users.findOne({where:{email: currentUser.email}})
		.then(function(user){
			res.json(user);
		});
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


router.get('/users/:id?', function(req, res){
	var userID = req.params.id; 

	models.Users.findOne({ where: {id: userID} }).then(function (user){
		
		models.Products.findAll().then(function (data2) {
			res.render('userView', {Users : user, Products : data2});
		});
	});
});


router.get('/manageView', function (req, res){
	models.Users.findAll().then(function (data) {
		res.render('manageView', {Users : data});
	});
});


router.delete('/product/delete/:id', function (req, res) {
	models.Products.destroy({where: {id:req.params.id}}).then(function() {
		res.render('manageView', {Users : data});
	});
});


router.put('/product/update/:id', function(req,res) {
	var updateProduct = {
		product_name: req.body.product_name,
        description: req.body.description,
        imageURL: req.body.imageURL,
        category: req.body.category,
        scaleRating: req.body.scaleRating,
        UsersId: req.body.UsersId,
        swapStatus: req.body.swapStatus
	};

	models.Products.update(updateProduct, {where: {id:req.params.id}}).then(function(){
		res.render('manageView', {Users : data});
	});
});


//Monica's Half
//======================================================================================
//Jess's Half

var session = require('express-session'); 
var flash = require('connect-flash'); 

//session

// app.use(flash());
// app.use(session({ secret: 'keyboard'}));
// // router.use(session({
// // 	secret: 'keyboard cat', 
// // 	saveUninitialized: true, 
// // 	cookie: { secure: true }, 
// // app.use(flash());
// app.use(function(req, res, next){
// 	res.locals.messages = req.flash(); 
// 		next(); 
// 	});  


//create login


//prompt user to create account login
router.get('/login', function(req, res){
	var email = req.body.email; 
	var password = req.body.password; 
	if (email === req.body.email && password === req.body.password){
		console.log('Account Created');
		res.redirect('userView');  
	} else {
		console.log('Must enter an email address and password'); 
		res.render('index')
	}
}); 

router.post('/login', function(req, res){
	var email = req.body.email; 
	var password = req.body.password;

	models.Users.findAll().then(function (data) {
		console.log(data);

		res.render('index', {Users : data});
	});
	if(email === 'jkhust@gmail.com' && password === 'Popcorn2'){
		alert('Login Success'); 
		res.redirect('/users/1'); 

	} else {
		res.render('index');
	}
}); 

//create logout
router.get('/logout', function (req, res){
	req.session.reset(); 
	res.redirect('/login'); 
}); 

//need post

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