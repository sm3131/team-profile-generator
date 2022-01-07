const Employee = require('../lib/Employee');

test('creates an employee object', () => {
    const employee = new Employee('Joe', 1, 'email@email.com', 'Employee');

    expect(employee.name).toBe('Joe');
    expect(employee.id).toEqual(1);
    expect(employee.email).toBe('email@email.com');
    expect(employee.role).toBe('Employee');
});

test('gets employee name', () => {
    const employee = new Employee('Joe', 1, 'email@email.com', 'Employee');

    expect(employee.getName()).toBe('Joe');
});

test('gets employee id', () => {
    const employee = new Employee('Joe', 1, 'email@email.com', 'Employee');

    expect(employee.getId()).toEqual(1);
});

test('gets employee email', () => {
    const employee = new Employee('Joe', 1, 'email@email.com', 'Employee');

    expect(employee.getEmail()).toBe('email@email.com');
});

test('gets employee role', () => {
    const employee = new Employee('Joe', 1, 'email@email.com', 'Employee');

    expect(employee.getRole()).toBe('Employee');
});