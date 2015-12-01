var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

app.use(express.static(__dirname+'/client'));
app.use(bodyParser.json());

todoTask = require('./server/Task');

mongoose.connect('mongodb://localhost/tasklist');
var db = mongoose.connection;

app.get('/api/tasklist', function(req, res){
	todoTask.getTasks(function(err, tasks){
		if(err){
			throw err;
		}

		res.json(tasks);
	});
});

app.get('/api/tasklist/:_id', function(req, res){
	todoTask.getTaskById(req.params._id, function(err, task){
		if(err){
			throw err;
		}
		res.json(task);
	});
});

app.delete('/api/tasklist/:_id', function(req, res){
	todoTask.removeTask(req.params._id, function(err, task){
		if(err){
			throw err;
		}
		res.json(task);
	});
});

app.post('/api/tasklist', function(req, res){
	var taskObj = req.body;
	todoTask.addTask(taskObj,function(err, task){
		if(err){
			throw err;
		}
		res.json(task);
	});
});

app.listen(3000);

