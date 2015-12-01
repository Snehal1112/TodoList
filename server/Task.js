var mongoose = require('mongoose');

var taskSchema = mongoose.Schema({
	task_name : {
		type : String,
		required : true
	},
	discription : {
		type : String
	},
	create_date : {
		type : Date,
		default : Date.now
	}
}); 

todoTask = module.exports = mongoose.model('todoTask', taskSchema, 'task');

module.exports.getTasks = function(callback, limit) {
	todoTask.find(callback).limit(limit);
}

module.exports.addTask = function(taskObj, callback) {
	todoTask.create(taskObj,callback);
}

module.exports.getTaskById = function(id, callback){
	todoTask.findById(id, callback);
}

module.exports.removeTask = function(id, callback){
	var query = {_id: id};
	todoTask.remove(query, callback);
}
