const Employee = require('../lib/Employee');

test('creates an employee object', () => {
    const employee = new Employee('Joe', 'email@email.com');

    expect(employee.name).toBe('Joe');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toBe('email@email.com');
});

test('gets employee name', () => {
    const employee = new Employee('Joe', 'email@email.com');

    expect(employee.getName()).toBe('Joe');
});

