const express=require('express')
const app=express();
const userModel=require("./models/user");
const postModel=require("./models/post");
const cookieParser=require('cookie-parser');
const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")


app.set("view engine","ejs");
app.use(express.json())
app.use(express.urlencoded({extended:true}));
app.use(cookieParser())

app.get('/',(req,res)=>{    //routes
    res.render("index")
});

app.get('/login', (req,res)=>{   //route to login
    res.render("login")
});

app.get('/profile', isLoggedIn,(req,res)=>{
    console.log(req.user);
    
    res.render("login")
});

app.post('/register', async (req,res)=>{
    let {email,password,username,name,age}=req.body
    let user = await userModel.findOne({email}); //to check whether the entered email is already registered or not
    if (user) return res.status(500).send("User already registered");
    


    bcrypt.genSalt(10 ,(err,salt)=>{
        bcrypt.hash(password,salt,async (err,hash)=>{
            let user = await userModel.create({
            username,
            email,
            age,
            name,
            password:hash
            })
            let token=jwt.sign({email:email,userid:user._id}, "shhhh")// shhhh is a secret key
            res.cookie("token",token)
            res.send("registered")
        })
    })
});

app.post('/login', async (req,res)=>{
    let {email,password}=req.body
    let user = await userModel.findOne({email}); //to check whether the entered email is already registered or not
    if (!user) return res.status(500).send("Something Went Wrong");
    
    bcrypt.compare(password,user.password, function(err,result){
        if(result){ // for right password
            let token=jwt.sign({email:email,userid:user._id},"shhhh")
            res.cookie("token",token)
            res.status(200).send("you can login");
        }
        else res.redirect("/login");//for wrong password
    })
})

app.get('/logout',(req,res)=>{
    res.cookie("token","");
    res.redirect("/login")
});

function isLoggedIn(req,res,next){  //middleware
    if(req.cookies.token==="") res.send("You Must be Logged In")
    else{
        let data=jwt.verify(req.cookies.token,"shhhh")//shhhh is used as a sceret key to verify the token if token is blank then it says you must be logged in
        req.user=data
        next();
    }
}

app.listen(3000);