const express = require('express');
const app = express();
const passport = require('passport')
const configPassport = require('./passport.js')
const session = require('express-session')
//DATABASE
const {db} = require('./db.js');

app.use(express.json());
app.use(express.urlencoded({
    extended:false
}))

//ROUTES
app.get("/login",(req,res)=>{
    res.send('im the login page')
})

app.get("/signup",(req,res)=>{
    res.render('signup')
})

app.post('/signup',passport.authenticate('local-signup',{
    successRedirect:'/login',
    failureRedirect:'/signup'
}));

//SESSION
app.use(session({
    secret:'miscreto',
    resave:true,
    saveUninitialized:true
}));

//Templates
app.set("views",__dirname+"/views");
app.set('view engine','ejs');



//PASSPORT
app.use(passport.initialize())
app.use(passport.session())

app.listen(8080,()=>{
    db.sync({force:false})
    .then(()=>{
        console.log('all has ben successfully connect to the database')
    })
    .catch((err)=>{
        console.log(err)
    })
    console.log('Server Ok!!')
})