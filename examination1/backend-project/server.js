const express = require("express");
const mysql = require("mysql2");
const bcrypt = require("bcrypt");
const session = require("express-session");
const cors = require("cors");

const app = express();

app.use(express.json());

app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}));

app.use(session({
    secret: "epms_secret_key",
    resave: false,
    saveUninitialized: false
}));

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "EPMS"
});

db.connect((err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("Database Connected");
    }
});


app.listen(5000, () => {
    console.log("Server Running On Port 5000");
});