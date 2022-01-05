class Employee {
    constructor(name, email, role) {
        this.name = name;

        this.id = 1;
        this.email = email;
        this.role = role;
    }
    
    getName = function() {
        return this.name;
    };

    getId = function() {
        return this.id;
    };

    getEmail = function() {
        return this.email;
    };

    getRole = function() {
        return this.role;
    };
}



module.exports = Employee;