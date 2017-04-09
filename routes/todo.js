var models  = require('../models');
var express = require('express');
var router = express.Router();

// abc.com/todo/
router.get('/',function(req,res,next){
	console.log("list call");
	models.Task.findAll()
	.then(function(tasks){
		res.json(tasks);
	})
	.error(function(error){
		res.json(error);
	});
});


router.get('/:id',function(req,res,next){
	var id =req.params.id;
	console.log("id call" + id);
	models.Task.findById(id)
	.then(function(task){
		res.json(task);
	})
	.error(function(error){
		res.json(error);
	});
});


router.post('/add',function(req,res,next){
	var newTask = models.Task.build(req.body);

	newTask.save()
		.then(function(anotherTask){
			res.json(anotherTask);
		})
		.catch(function(error){
			res.json(error);
		});
});

module.exports = router;