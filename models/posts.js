var mongoose = require('mongoose');

//Categories schema

var postsSchema = mongoose.Schema({

    title:{

        type: String,
        required: true
        
    },

    category:{

        type: String,
        required: true
        
    },

    description:{

        type: String,
        required: true
        
    },

    image:{

        type: String,
        required: true
        
    },

    create_date:{

        type: Date,
        default: Date.now

    }


});


var Posts = module.exports = mongoose.model('Posts', postsSchema);

// Get posts

module.exports.getPosts = function(callback, limit){

    Posts.find(callback).limit(limit);
    
}

// Get a single post

module.exports.getPostById = function(id, callback){

    Posts.findById(id, callback);
    
}

// Add a post

module.exports.addPosts = function(post, callback){

    Posts.create(post, callback);

} 