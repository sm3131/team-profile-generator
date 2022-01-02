function Employee(name, email) {
    this.name = name;

    this.id = 1;
    this.email = email;

    this.getName = function() {
        return this.name;
    };
}



module.exports = Employee;