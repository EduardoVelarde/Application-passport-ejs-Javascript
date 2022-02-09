const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy

const {User} = require('../models/users.js')

//Sign in

//Sign up
passport.use('local-signup',new LocalStrategy({
    usernameField:'username',
    passwordField:'password',
    passReqToCallback:true
},async(req,username,password,done)=>{
    //Validar 
    let user = await User.findOne({
        where:{
            username
        }
    });
    if(!user){
        let userNew = await User.create({
            username,
            password
        })
        return done(null,userNew)
    }
    return done(null,false);
}))

//Serealización

passport.serializeUser((user,done)=>{
    done(null,user.id);
})

//Deseralización

passport.deserializeUser(async(id,done)=>{
    let user = await User.findOne({
        where:{
            id
        }
    });

    done(null,user);
})