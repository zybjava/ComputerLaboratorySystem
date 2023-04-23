const sqlite = require("sqlite3").verbose()
const database = new sqlite.Database("database/database.sqlite")

class SQL_Computers{
	constructor(){
		this.db = database
		this.db.serialized(() => {
			this.db.run(`CREATE TABLE IF NOT EXISTS computers (
				computerID VARCHAR(100) NOT NULL PRIMARY KEY,
				computerName VARCHAR(100) NOT NULL,
				monitorID VARCHAR(100) NOT NULL,
				roomName VARCHAR(100) NOT NULL,
				departmentID VARCHAR(100) NOT NULL
			)`)
		})
	}
	addComputer(obj){
		this.db.serialized(() => {
			this.db.run("INSERT INTO computers (computerID, computerName, monitorID, roomName, departmentID) VALUES ('$computerID', '$computerName', '$monitorID', '$roomName', '$departmentID')", obj)
		})
	}
	getComputers(id){
		this.db.serialized(() => {
			this.db.run("SELECT * FROM computers WHERE ID = ?", id)
		})
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
		this.db.serialized(() => {
			this.db.run(`UPDATE computers SET ${column} WHERE ID = ?`, id)
		})
	}
}

module.exports = {
	SQL_Computers
}