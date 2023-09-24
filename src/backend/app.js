const express=require("express");
const cors=require("cors")
const app=express();
app.use(express.json());
app.use(express.urlencoded({extender:true}))
app.use(cors());
const bcrypt =require("bcrypt");


const mongoose=require("mongoose");
// "mongodb+srv://achyuta22:G6un2EdLQsyEAL9t@cluster0.4119uaq.mongodb.net/"
mongoose.connect("mongodb+srv://achyuta22:G6un2EdLQsyEAL9t@cluster0.4119uaq.mongodb.net/userdata")
const dataschema=new mongoose.Schema({
  username:String,
  emailid:String,
  password:String
})
const userdata= mongoose.model("user",dataschema);




app.listen(8001,function(){
  console.log("port connected");
})
app.get("/login",cors(),(req,res)=>{

})
app.post("/login",async(req,res)=>{
  const {email,password}=req.body;
  try{
    const user=await userdata.findOne({emailid:email})
  if(user){
    const passwordMatch = await bcrypt.compare(password, user.password);
    if(passwordMatch){
    // res.json("successful login");}
     res.json({ message:"successful login",username:user.username});}
    else{
      res.json("wrong password");
    }
  }
  else{
    res.json("new email");
  }
  }

  catch(e){
    res.json("error");
     console.log(e);
  }
   //console.log("login page sent something");
})

app.get("/signup",cors(),(req,res)=>{

})

app.post("/signup", async (req, res) => {
  const { username, email, password } = req.body;
  try {
    // Check if a user with the provided email already exists
    const existingUser = await userdata.findOne({ emailid: email });
      
    if (existingUser) {
      res.json("User already exists"); // User with the provided email already exists
    } else {
      const saltRounds = 10; // You can adjust the number of salt rounds for security
      const hashedPassword = await bcrypt.hash(password, saltRounds);
      // If the user does not exist, create a new user
      const newUser = new userdata({
        username: username,
        emailid: email,
        password: hashedPassword,
      });

      // Save the new user to the database
      await newUser.save();

      res.json("successful signup");
    }
  } catch (e) {
    res.json("error");
    console.log(e);
  }
});