// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee")

class Intern extends Employee{
  constructor(name, idNumber, email, school){
    super(name, idNumber, email)
    this.school = school
  }

  getRole(){
    return "Intern"
  }

  getSchool(){
    return this.school
  }
}

module.exports = Intern