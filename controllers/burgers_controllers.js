// =================================================================
// Dependencies
// =================================================================
var express = require('express');
var router = express.Router();

var burgers = require('../models')['Burgers'];

// =================================================================
// Routes
// =================================================================
/**
 * GET - home page route rendering index.handlebars
 */
router.get('/', function(req, res) {
	burgers.findAll({
	}).then(function(results){
		return res.render('index', { burgers : results });
	});
});

/**
 * GET - Redirects traffic from /burgers to home page route.
 */
router.get('/burgers', function(req, res) {
	return res.redirect('/');
});

/**
 * POST - Used to create new burger entry.
 * Requires valid burger and devoured values.
 * Redirects to home page routes upon completion.
 */
router.post('/burgers', function(req, res) {
	var burgerName = req.body.burger;
	var devoured = req.body.devoured;

	burgers.build({
		burger_name : burgerName,
		   devoured : devoured })
	.save()
	.then(function(result) {
		return res.redirect('/');
	}).catch(function(error) {
		return res.render('error', {
	  		message: err.message,
	  		error: err
		});
	});
});

/**
 * PUT - Using method-override, updates burger data entry.
 * Requires valid burger_id and devoured values.
 * Redirects to home page routes upon completion.
 */
router.put('/burgers/update/:id', function(req, res) {
	var burgerId = req.params.id;
	var devoured = req.body.devoured;

	burgers.update({ devoured : devoured
	}, { where: { burger_id : burgerId }
	}).then(function(result){
		return res.redirect('/');
	}).catch(function(error) {
		return res.render('error', {
	  		message: err.message,
	  		error: err
		});
	});
});

/**
 * DELETE - Using method-override, deletes burger data entry.
 * Requires valid burger_id value.
 * Redirects to home page routes upon completion.
 */
router.delete('/burgers/update/:id', function(req, res) {
	var burgerId = req.params.id;

	burgers.findById(burgerId)
	.then(function(burger) {
		return burger.destroy();
	}).then(function() {
		return res.redirect('/');
	}).catch(function(error) {
		return res.render('error', {
	  		message: err.message,
	  		error: err
		});
	});
});

module.exports = router;
