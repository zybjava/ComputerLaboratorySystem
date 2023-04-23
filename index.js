const { SQL_Computers } = require("./database/database")
const express = require("express")
const body = require("body-parser")
const path = require("path")
const cors = require("cors")

const app = express()
const parser = body.urlencoded({ extended: false })

const PORT = process.env.PORT || 8080

app.use(cors())
app.use(express.static("public"))
app.use("/res", express.static(path.join(`${__dirname}/resources`)))

app.post('/post', (req, res) => {
	console.log('sent')
	res.redirect('/')
})

app.get('/', (req, res) => {
	res.send('Please run the ReactJS')
})

app.listen(PORT, () => {
	// To create a database
	new SQL_Computers()
	console.log(`Currently listening to PORT: ${PORT}`)
})