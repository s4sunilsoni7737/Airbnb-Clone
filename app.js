if(process.env.NODE_ENV !="production"){
  require('dotenv').config();
}



const express = require("express");
const app = express();
const mongoose = require("mongoose");

const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");

const listingRouter = require("./routes/listing.js");
const reviewRouter = require("./routes/review.js");
const userRouter = require("./routes/user.js");

const ExpressError = require("./utils/ExpressError.js");
const session = require("express-session");
const MongoStore = require("connect-mongo");

const flash = require("connect-flash");

const passport = require("passport");
const LocalStrategy = require("passport-local");
const User = require("./models/user.js");

const multer = require("multer");
const upload = multer({dest:"uploads/"})



app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.engine("ejs", ejsMate);
app.use(express.static(path.join(__dirname, "/public")));



const dbUrl = process.env.ATLASDB_URL;

const store = MongoStore.create({
  mongoUrl:dbUrl,
  crypto:{
    secret:process.env.SECRET,
  },
    touchAfter:24*3600,
});

store.on("error",()=>{
  console.log("ERROR in mogo session store",err);
})

const sessionOptions ={
  store,
  secret:process.env.SECRET,
  resave:false,
  saveUninitialized:true,
  cookie:{
    expires: Date.now() + 7 * 24 * 60 * 60 *1000, // days*hours*minuts*sec*milisecond (after seven day cookie expires)
    maxAge: 1000 * 60 * 60 * 24 * 3,
    httpOnly:true
  },
};





app.use(session(sessionOptions));
app.use(flash());

//use after session
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser()); // to store user info in session
passport.deserializeUser(User.deserializeUser());



app.use((req,res,next)=>{
  res.locals.success = req.flash("success");
  res.locals.error = req.flash("error");
  console.log(res.locals.success);
  res.locals.currUser = req.user;
  next();
});

// app.get("/demouser", async (req,res)=>{
//   let fakeUser = new User({
//     email:"student@gmail.com",
//     username:"sunil"
//   });
// let registeredUser = await User.register(fakeUser,"password123"); // do not to check unique register method dine automatic
// res.send(registeredUser);
// });

app.use("/listings", listingRouter);
app.use("/listings/:id/reviews", reviewRouter);
app.use("/",userRouter);



async function main() {
  await mongoose.connect(dbUrl);
}
main()
  .then(() => {
    console.log("connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

app.all("*", (req, res, next) => {
  next(new ExpressError(404, "Page not Found!"));
});

app.use((err, req, res, next) => {
  console.error(err);
  let { statusCode = 500, message = "Something went wrong!" } = err;
  res.status(statusCode).render("error.ejs", { err });
  // res.status(statusCode).send(msg);
});

app.listen(8080, () => {
  console.log("app is lisening on 8080");
});
