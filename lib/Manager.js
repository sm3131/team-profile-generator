class Manager {
    constructor(name, id, email, officeNumber, role) {
        
        this.name = name;
        this.id = id;
        this.email = email;
        this.officeNumber = officeNumber;
        this.role = role;
    }

    getRole = function() {
        return this.role
    }
}

module.exports = Manager;