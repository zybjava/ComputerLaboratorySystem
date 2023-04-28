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
	const computerID = /COMPUTER_ID_([\d]+)/gi
	const computerName = /PC_([\d]+)/gi
	const monitorID = /MONITOR_([\w]+)/gi
	const roomName = /(ROOM_|)([\w]+)/gi
	const departmentID = /([\w]_DEPT)/gi
	
	if(!computerID.test(req.body['$computerID']))
		return res.send(JSON.stringify({
			success: false,
			message: "Invalid Computer ID"
		}))
	
	else if(!computerName.test(req.body['$computerName']))
		return res.send(JSON.stringify({
			success: false,
			message: "Invalid Computer Name"
		}))
	
	else if(!monitorID.test(req.body['$monitorID']))
		return res.send(JSON.stringify({
			success: false,
			message: "Invalid Monitor ID"
		}))
	
	else if(!roomName.test(req.body['$roomName']))
		return res.send(JSON.stringify({
			success: false,
			message: "Invalid Roon Name"
		}))
	
	else if(!departmentID.test(req.body['$departmentID']))
		return res.send(JSON.stringify({
			success: false,
			message: "Invalid Department ID"
		}))
	
	let sql = new SQL_Computers()
	sql.addComputer(res, req.body)
})

app.post('/delete-computer-api', (req, res) => {
	let sql = new SQL_Computers()
	sql.deleteComputer(res, req.body.data)
})

app.post('/update-computer-api', (req, res) => {
	if(req.body.computerID == undefined){
		return res.send(JSON.stringify({
			"success": false,
			"message": "ComputerID is not defined"
		}))
	}
	let sql = new SQL_Computers()
	sql.updateComputer(res, req.body)
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