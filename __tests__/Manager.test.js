const Manager = require('../lib/Manager');

test('creates a manger object', () => {
    const manager = new Manager('Jill', 2, 'email@email.com', 10, 'Manager');

    expect(manager.name).toBe('Jill');
    expect(manager.id).toEqual(2);
    expect(manager.email).toBe('email@email.com');
    expect(manager.officeNumber).toEqual(10);
    expect(manager.role).toBe('Manager');
})

test("gets manager's officeNumber", () => {
    const manager = new Manager('Jill', 1, 'email@email.com', 10, 'Manager');

    expect(manager.getOfficeNumber()).toEqual(10);
})

test("gets manager's role", () => {
    const manager = new Manager('Jill', 1, 'email@email.com', 10, 'Manager');

    expect(manager.getRole()).toBe('Manager');
})