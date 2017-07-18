/**
 * Created by chanwoopark on 2017. 7. 15..
 */
const passport = require('passport'),
      config = require('./config.js'),
      JwtStrategy = require('passport-jwt').Strategy,
      ExtractJwt = require('passport-jwt').ExtractJwt;

const jwtOptions = {
    jwtFromRequest : ExtractJwt.fromHeader('authorization'),
    secretOrKey:config.secret
};

const jwtLogin = new JwtStrategy(jwtOptions,function(payload,done){

});

passport.use(jwtLogin);