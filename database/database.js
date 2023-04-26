const sqlite = require("sqlite3").verbose()
const database = new sqlite.Database("database/database.sqlite")

class SQL_Computers{
	constructor(){
		this.db = database
		this.db.serialize(() => {
			this.db.run(`CREATE TABLE IF NOT EXISTS computers (
				computerID VARCHAR(100) NOT NULL PRIMARY KEY UNIQUE,
				computerName VARCHAR(100) NOT NULL,
				monitorID VARCHAR(100) NOT NULL,
				roomName VARCHAR(100) NOT NULL,
				departmentID VARCHAR(100) NOT NULL
			)`)
		})
	}
	addComputer(res, obj){
		this.db.serialize(() => {
			this.db.run("INSERT INTO computers (computerID, computerName, monitorID, roomName, departmentID) VALUES ($computerID, $computerName, $monitorID, $roomName, $departmentID)", obj, (e) => {
				if(e){
					res.send(JSON.stringify({
						success: true,
						message: "Error occured, might be the ID is already existed"
					}))
				}else{
					res.send(JSON.stringify({
						success: true,
						message: "New Data Added successfully"
					}))
				}
			})
		})
	}
	getComputers(res, obj){
		let id = obj.id
		let order = obj.order
		let orderby = " ORDER BY computerID"
		if(order != undefined)
			orderby = " ORDER BY " + order
		if(id == undefined){
			id = ""
		}
		if(id.startsWith("COMPUTER_ID_")){
			this.db.all("SELECT * FROM computers WHERE computerID = ?" + orderby, id,  (err, rows) => {
				res.send(rows)
			})
		}else{
			this.db.all("SELECT * FROM computers" + orderby,  (err, rows) => {
				res.send(rows)
			})
		}
	}
	updateComputer(id, obj){
		let columns = []
		if(obj['$computerName'] != undefined)
			columns.push(`computerName = ${obj['$computerName']}`)
		if(obj['$monitorID'] != undefined)
			columns.push(`monitorID = ${obj['$monitorID']}`)
		if(obj['$roomName'] != undefined)
			columns.push(`roomName = ${obj['$roomName']}`)
		if(obj['$departmentID'] != undefined)
			columns.push(`departmentID = ${obj['$departmentID']}`)
		let column = columns.join(", ")
		this.db.serialize(() => {
			this.db.run(`UPDATE computers SET ${column} WHERE ID = ?`, id)
		})
	}
	deleteComputer(res, id){
		try{
			this.db.run("DELETE FROM Computers WHERE computerID = ?", id)
			res.send(JSON.stringify({
				success: true,
				message: "The data deleted successfully"
			}))
		}catch(e){
			res.send(JSON.stringify({
				success: false,
				message: "The ID might be not found or a database error."
			}))
		}
	}
}

module.exports = {
	SQL_Computers
}