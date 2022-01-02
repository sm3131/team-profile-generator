function Employee(name, email) {
    this.name = name;

    this.id = 1;
    this.email = email;

    this.getName = function() {
        return this.name;
    };

    this.getId = function() {
        return this.id;
    };
}



module.exports = Employee;