const express = require("express")
require('dotenv').config();
const {Pool} = require("pg");

const {
    PGHOST,
    PGDATABASE,
    PGUSER,
    PGPASSWORD,
} = process.env;

const pool = new Pool({
    host:PGHOST ,
    database:PGDATABASE ,
    user: PGUSER, 
    password:PGPASSWORD,
    port: 5432, 
    ssl:{
        require: true,
    }
})

const app = express()

app.set("view engine", "ejs")
app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use(express.static("public"))

app.use(function(req, res, next){
    res.locals.errors = []
    next()

})

app.get("/",async (req, res)  =>{
    res.render("Login")
})
app.get("/Sign-Up",  (req, res) => {
    res.render("Sign-Up")
})
app.post("/register",async (req, res) => {
    const errors = []
    if (typeof req.body.username !== "string") req.body.username = ""
    if (typeof req.body.password !== "string") req.body.password = ""

    req.body.username = req.body.username.trim()

    if (!req.body.username) errors.push("You must provide a username")
    if (req.body.username && req.body.username.length < 3) errors.push("Username must be at least 3 characters")
    if (req.body.username && req.body.username.length > 10) errors.push("Username must be less than 10 characters")
    if (req.body.username && !req.body.username.match(/^[a-zA-Z0-9]+$/)) errors.push("Username can only contain letters and numbers")

    if (!req.body.password) errors.push("You must provide a password")
    if (req.body.password && req.body.password.length < 8) errors.push("password must be at least 8 characters")
    if (req.body.password && req.body.password.length > 20) errors.push("password must be less than 20 characters")
    
    if (errors.length){
        return res.render("Sign-Up", {errors})
    } 
    // save the new user inta a database
    const client = await pool.connect();
    const { username, password } = req.body;
    try {
        await pool.query(
            'INSERT INTO users (username, password) VALUES ($1, $2);',
            [username, password]
        );
         res.redirect("/");// Only send one response
    } catch (error) {
        console.error('Failed to register user', error);
        res.redirect("/Sign-Up")
    } finally {
        client.release(); // Only release the client here
    }
});
    // log the user in by giving them a cookie

app.listen(3000)