// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");
// Extend the file 
class Engineer extends Employee {
    //  Input-texts turns to blue when utilizing the constructors for name, email and id
  constructor(name, id, email, github) {
   //The super() function is used to give access to methods and properties of a parent or sibling class
    super(name, id, email);

    // this  
    this.github = github;
  }

  //  Grabs and returns it 
  getGithub() {
    return this.github;
  }

  // Grabs the role and return it
  getRole() {
    return "Engineer";
  }
}

// module.exports helps to export the Engineer page into a new team.html
module.exports = Engineer;