var express = require('express'); 
var router = express.Router(); 
var bodyParser = require('body-parser'); 
var methodOverride = require('method-override'); 
var models = require('../models'); 
var sha1 = require('sha1'); 
var cookie = require('cookie'); 
var cookies = {};



router.get('/', function (req, res){
	cookies = cookie.parse(req.headers.cookie || '');
	if(cookies.email && cookies.id){
		return res.redirect("/users/"+cookies.id);
	}
	
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
		models.Users.findOne(
			{
				where: {
					email: currentUser.email
				}
		}).then(function(user){

			setEmailCookie = cookie.serialize('email', currentUser.email);
			setIdCookie = cookie.serialize('id', user.id);
			res.setHeader("Set-Cookie", setEmailCookie); 
			res.append("Set-Cookie", setIdCookie);
			var hash = '/users/'+user.id; 
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

//++++++++++++++THIS IS ALL THE ASSOCIATIONS++++++++++++++++

router.get('/users/:id?', function(req, res){
	var userID = 1;

	models.Products.findAll(
		{
			where: {
				'UsersId': 
				{
					ne: userID
				}
			}
		})
		.then(function(allProducts){

			models.Swappings.findAll(
				{
					where: {
						'firstPersonID': userID
					}
				}
			).then(function(swappings){

				//This returns the # of swaps "first person ID" has
				//console.log(swappings.length);

				var secondPersonIDs = [];
				var secondPersonProductIDs = [];
				var firstPersonProductIDs = [];

				for(var i = 0; i < swappings.length; i++){
				secondPersonIDs.push(swappings[i].secondPersonID);
				firstPersonProductIDs.push(swappings[i].firstPersonProductID);
				secondPersonProductIDs.push(swappings[i].secondPersonProductID);
				}

				//This returns the array of USER IDs who want to swap w/FirstPerson
				//console.log(secondPersonIDs);

				//This returns the array of PRODUCT IDs second persons want to swap 
				//console.log(secondPersonProductIDs);

					models.Users.findAll(
						{
							where: {
								'id': 
									{in: secondPersonIDs}
							}
						}
					).then(function(users){

						console.log("this is from users.length: ")
						console.log(users.length);

						// for(var j = 0; j < users.length; j++){
						// 	console.log("This is from Users: ")
						// 	console.log(users.dataValues.firstName);
						// }

					});

				res.render('userView', {allProducts: allProducts});

			});

		});

});



//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


router.get('/manageView', function (req, res){
	// if(!cookies.email && !cookies.id){
	// 	return res.redirect("/");
	// }
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


var escapeHtml = require('escape-html'); 
var http = require('http'); 
var url = require('url'); 



router.post('/login', function(req, res){
	var email = req.body.email; 
	var password = req.body.password; 
	models.Users.findOne(
		{
			where: {
				email: email
			}
		}).then(function(result){

			if (result !== null){

				if(password === result.password){
					setEmailCookie = cookie.serialize('email', email);
					setIdCookie = cookie.serialize('id', result.id);
					res.setHeader("Set-Cookie", setEmailCookie); 
					
					res.append("Set-Cookie", setIdCookie);
					var hash = '/users/'+result.id;
					res.json({url: hash});
				} else {

					res.json({errorMessage: 'Password Incorrect'}); 
				}

			} else {
				res.json({errorMessage: 'Incorrect Email'}); 
			}

	})
}); 

//create logout
router.get('/logout', function (req, res){
	res.clearCookie("email");
	res.clearCookie("password");
	res.clearCookie("id");
	res.json({}); 
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