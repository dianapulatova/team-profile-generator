// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee");
// Extend the file 
class Manager extends Employee {
  //  Input-texts turns to blue when utilizing the constructors for name, email and id
  constructor(name, id, email, officeNumber) {
    //The super() function is used to give access to methods and properties of a parent or sibling class
    super(name, id, email);

    // this is refers to this
    this.officeNumber = officeNumber;
  }

  // Grabs and returns it 
  getOfficeNumber() {
    return this.officeNumber;
  }

  // Grabs the role and returns it
  getRole() {
    return "Manager";
  }
}

// module.exports helps to export the manager page into a new team.html
module.exports = Manager;