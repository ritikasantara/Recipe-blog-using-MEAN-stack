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

// Get categories

var Categories = module.exports = mongoose.model('Categories', categorySchema);

module.exports.getCategories = function(callback, limit){

    Categories.find(callback).limit(limit);

}