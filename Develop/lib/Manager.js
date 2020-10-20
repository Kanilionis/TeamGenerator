// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee")

class Manager extends Employee{
  constructor(name, idNumber, email, office){
    super(name, idNumber, email)
    this.office = office
  }
  getRole(){
    return "Manager"
  }
  getOffice(){
    return this.office
  }
}

module.exports = Manager