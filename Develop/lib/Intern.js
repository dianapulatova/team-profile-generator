// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

// Extending Employee file
class Intern extends Employee {
  // Input-texts turns to blue when utilizing the constructors for name, email and id
  constructor(name, id, email, school) {
    //The super() function is used to give access to methods and properties of a parent or sibling class
    super(name, id, email);

    
    this.school = school;
  }

  // Grabs and returns the school
  getSchool() {
    return this.school;
  }

  // Grabs the role 
  getRole() {
    return "Intern";
  }
}
// it helps to export Intern page into a new.html file 
module.exports = Intern;