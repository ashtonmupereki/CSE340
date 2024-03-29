/* ******************************************
 * This server.js file is the primary file of the 
 * application. It is used to control the project.
 *******************************************/
/* ***********************
 * Require Statements
 *************************/
const express = require("express")
const expressLayouts = require("express-ejs-layouts")
const env = require("dotenv").config()
const app = express()
const static = require("./routes/static")
const baseController = require("./controllers/baseController")


/* ***********************
 * View Engine and Templates
 *************************/


app.set("view engine", "ejs")
app.use(expressLayouts)
app.set("layout", "./layouts/layout") // not at views root
/* ***********************
 * Routes
 *************************/
app.use(static)

// Index route
app.get("/", function(req, res){
  res.render("index", {tittle: "Home"})
})

app.get('/views/custom.ejs', (req, res) => {
  res.render('custom');
});

app.get('/views/sedan.ejs', (req, res) => {
  res.render('sedan');
});

app.get('/views/sport.ejs', (req, res) => {
  res.render('sport');
});

app.get('/views/suv.ejs', (req, res) => {
  res.render('suv');
});

app.get('/views/truck.ejs', (req, res) => {
  res.render('truck');
});
/* ***********************
 * Local Server Information
 * Values from .env (environment) file
 *************************/
const port = process.env.PORT || 3000
const host = process.env.HOST || "localhost"

/* ***********************
 * Log statement to confirm server operation
 *************************/
app.listen(port, () => {
  console.log(`app listening on ${host}:${port}`)
})
