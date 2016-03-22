var passport = require('passport'),
    LocalStrategy = require('passport-local').Strategy,
    mongoose = require('mongoose'),
    User = mongoose.model('User');

passport.use(new LocalStrategy(
    function(username, password, done){
        User.findOne({username : username}, function(err, user){
            if(err) {
                return done(err);
            }
            if(!user){
                return done(null, false, { message: 'Feil brukernavn eller passord'});
            }
            if(!user.validPassword(passowrd)){
                return done(null, false, { message: 'Feil brukernavn eller passord'});
            }
            return done(null, user);
        });
    }
));