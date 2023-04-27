const { SQL_Computers } = require("./database/database")
const express = require("express")
const body = require("body-parser")
const cors = require("cors")

const app = express()
const parser = body.urlencoded({ extended: false })

const PORT = process.env.PORT || 8080

app.use(cors())
app.use(body.json())

app.post('/add-new-computer-api', (req, res) => {
	let sql = new SQL_Computers()
	sql.addComputer(res, req.body)
})

app.post('/delete-computer-api', (req, res) => {
	let sql = new SQL_Computers()
	sql.deleteComputer(res, req.body.data)
})

app.post('/update-computer-api', (req, res) => {
	let sql = new SQL_Computers()
	sql.update(res, id, req.body.data)
})

app.get('/', (req, res) => {
	let sql = new SQL_Computers()
	let obj = {
		id: req.query.id,
		orderby: req.query.order
	}
	sql.getComputers(res, obj)
})

app.listen(PORT, () => {
	// To create a database
	new SQL_Computers()
	console.log(`Currently listening to PORT: ${PORT}`)
})