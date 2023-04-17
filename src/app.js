import express from "express";
import {pool} from "./db.js";
import {PORT} from "./config.js"

const app = express();


app.get("/",(req, res)=> {
    res.send("Welcome to Iker Server")
})

app.get("/ping",async (req, res)=> {
    const [result] = await pool.query(`SELECT "hello world" as RESULT;`);
    console.log(result);
    res.json(result[0]);
})

app.get("/create", async (req, res) => {
    const result = await pool.query(`INSERT INTO users(name) VALUES ("Jhon");`);
    res.json(result);
})

app.get("/show", async (req, res) => {
    const [rows] = await pool.query(`SELECT * FROM users;`);
    res.json(rows);
})

app.listen(PORT);
console.log("Server on port ", PORT);