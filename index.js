const conectarDB = require("./server/config/db");
const express = require("express");
const morgan = require("morgan");
const session = require("express-session");
const passport = require("passport");
const flash = require("flash");
const app = express();
const port = 3000;
const path = require("path");
require("dotenv").config({ path: "variables.env" });
//settings
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "/front/views"));
require("./server/passport/index");

//middlewares
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(
  session({
    secret: process.env.SECRETA,
    reseave: false,
    saveUninitialized: false,
  })
);
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());
app.use((req, res , next)=>{
app.locals.user = req.user
console.log(req.sessionStore.sessions)
next() 
})
//routes
app.use("/", require("./server/routes/index.js"));

app.listen(port, () => {
  console.log(`Puerto ${port} conectado`);
});
conectarDB();
