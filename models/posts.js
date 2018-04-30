var mongoose = require('mongoose');
//this schema will make a db-item for each artile on NYT-website 
var articleSchema = mongoose.Schema({
	title: {
		type: String,
		required: true,
		validate: {
			isAsync: true,
			validator: function(name, cb){
				Articles.find({title: name}, function(err, data){
					if(data.length == 0){
						console.log("Adding article to database!");
						cb(true);
					}else{
						console.log("Article already exists!");
						cb(false);
					}
				});
			},
			message: "This title already exists."
		}
	},
	body: String,
	url: String, 
	photoUrl: String,
	notesList: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Notes' }]
})
var Articles = mongoose.model("Articles", articleSchema);
module.exports = Articles;