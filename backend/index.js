import express from "express"
import mysql from "mysql"
import dotenv from "dotenv"
const port = 3000

dotenv.config()

// console.log(process.env);



const connection = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
}) 

// console.log(connection.config);


const app = express()

app.get('/', (req,res) => {
    res.send('hello world')
})

app.listen(port, () => {
    console.log(`connected to the port ${port}`)
})

