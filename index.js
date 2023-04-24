const { SQL_Computers } = require("./database/database")
const express = require("express")
const body = require("body-parser")
const cors = require("cors")

const app = express()
const parser = body.urlencoded({ extended: false })

const PORT = process.env.PORT || 8080

app.use(cors())
app.use(body.json())

app.post('/post', (req, res) => {
	let sql = new SQL_Computers()
	sql.addComputer(req.body)
	let json = req.body
	json['success'] = true
	res.send(JSON.stringify(json))
})

app.get('/', (req, res) => {
	res.send('Please run the ReactJS')
})

app.listen(PORT, () => {
	// To create a database
	new SQL_Computers()
	console.log(`Currently listening to PORT: ${PORT}`)
})