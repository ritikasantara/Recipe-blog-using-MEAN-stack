var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

Categories = require('./models/categories');
Posts = require('./models/posts');

//connect to mongoose

mongoose.connect('mongodb://localhost/recipeBlog');
var db = mongoose.connection;

app.use(bodyParser.json());


app.get('/api/categories' , function(req, res){

    Categories.getCategories(function(err, categories){

        if(err){

            throw err;
        }
        res.json(categories);
    })

});

app.post('/api/categories' , function(req, res){

    var category = req.body;

    Categories.addCategories(category,function(err, category){

        if(err){

            throw err;
        }
        res.json(category);
    })

});


app.get('/api/posts' , function(req, res){

    Posts.getPosts(function(err, posts){

        if(err){

            throw err;
        }
        res.json(posts);
    })

});

app.get('/api/posts/:_id' , function(req, res){

    Posts.getPostById(req.params._id, function(err, post){

        if(err){

            throw err;
        }
        res.json(post);
    })

});

app.post('/api/posts' , function(req, res){

    var post = req.body;

    Posts.addPosts(post, function(err, post){

        if(err){

            throw err;
        }
        res.json(post);
    })

});




app.listen(8000, function(){

    console.log('Listening on port 8000...');

});


app.use(express.static(__dirname + '/public'));