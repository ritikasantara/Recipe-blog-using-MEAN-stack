var mongoose = require('mongoose');

//Categories schema

var categorySchema = mongoose.Schema({

    name:{

        type: String,
        required: true
        
    },

    create_date:{

        type: Date,
        default: Date.now

    }


});

var Categories = module.exports = mongoose.model('Categories', categorySchema);

// Get categories

module.exports.getCategories = function(callback, limit){

    Categories.find(callback).limit(limit);

}

// Add categories

module.exports.addCategories = function(category, callback){

    Categories.create(category, callback);

} 