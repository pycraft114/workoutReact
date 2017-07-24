/**
 * Created by chanwoopark on 2017. 7. 15..
 */
const passport = require('passport'),
      jwtConfig = require('./jwtConfig.js'),
      JwtStrategy = require('passport-jwt').Strategy,
      ExtractJwt = require('passport-jwt').ExtractJwt;

const jwtOptions = {
    jwtFromRequest : ExtractJwt.fromHeader('token'),
    secretOrKey:jwtConfig.secret
};

const jwtLogin = new JwtStrategy(jwtOptions,function(payload,done){
    const user = payload.sub;
    done(null,user);
});

passport.use(jwtLogin);