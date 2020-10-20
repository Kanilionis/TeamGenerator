// TODO: Write code to define and export the Employee class

class Employee{
  constructor(name, idNumber, email){
    this.name = name;
    this.idNumber = idNumber;
    this.email = email
  }
getName(){
  return this.name
}
getId(){
  return this.idNumber
}
getEmail(){
  return this.email
}
getRole(){
  return "Employee"
}

}


module.exports = Employee;


