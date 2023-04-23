const { SQL_Computers } = require("./database/database")
const express = require("express")
const body = require("body-parser")
const path = require("path")
const cors = require("cors")

const app = express()
const parser = body.urlencoded({ extended: false })

const PORT = process.env.PORT | 3000 | 5000 | 7000

app.use(cors())
app.use(express.static("public"))
app.use("/res", express.static(path.join(`${__dirname}/resources`)))



app.get('/', (req, res) => {
	res.send("Welcome hehe")
})

app.listen(PORT, () => {
	console.log(`Currently listening to PORT: ${PORT}`)
})