class Intern {
    constructor(name, id, email, school, role) {
        
        this.name = name;
        this.id = id;
        this.email = email;
        this.school = school;
        this.role = role;
    }

    getSchool = function() {
        return this.school
    }

    getRole = function() {
        return this.role
    }
}

module.exports = Intern;