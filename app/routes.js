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
    
    app.post('/register', function(req, res, next){
        if(!req.body.username || !req.body.password){
            return res.status(400).json({message: 'Venligst fyll ut alle felter'});
        }
        
        var user = new User();
        
        user.username = req.body.username;
        user.setPassword(req.body.password);
        
        user.save(function(err){
            if(err){
                return next(err);
            }
            
            return res.json({
                token: user.generateJWT()
            });
        });
    });
    
    //root
    app.get('*', function(req, res){
        console.log('Running get /');
        res.sendfile('./public/index.html')
    });
    
}