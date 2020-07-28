// TODO: Write code to define and export the Employee class

class Employee {
    constructor(name, id, email) {
      this.name = name;
      this.id = id;
      this.email = email;
    }
    // Grabs and returns the name 
    getName() {
      return this.name;
    }
    // Grabs  and returns the email
    getEmail() {
      return this.email;
    }
  
    // Grabs and returns the id
    getId() {
      return this.id;
    }
  
    // Grabs the role and returns it 
    getRole() {
      return "Employee";
    }
  }
  //  module.exports helps to export the Employee page into a new team.html
  module.exports = Employee;