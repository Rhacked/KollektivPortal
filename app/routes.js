// app/routes.js
// require mongodb models
var mongoose = require('mongoose'),
    User = require('./models/user');


module.exports = function(app){
    // server routes =====================================================
    app.get('/api/users', function(req, res){
        console.log('Running get users');
        User.find(function(err, users){
            if(err){
                res.send(err);
            }
            res.json(users);
        })
    });
    
    app.post('/api/users',function(req, res){
        console.log('Create user');
        User.create({
            username: req.body.username
        }, function(err, user){
            if(err){
                res.send(err);
            }
            res.json(user);
        })
    });
    // frontend routes ===================================================
    
    //root
    app.get('*', function(req, res){
        console.log('Running get /');
        res.sendfile('./public/index.html')
    });
    
}