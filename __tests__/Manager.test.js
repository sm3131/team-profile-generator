const { expect } = require('@jest/globals');
const { test } = require('picomatch');
const Manager = require('../lib/Manager');

test('creates a manger object', () => {
    const manager = new Manager('Jill','email@email.com', '10', 'Manager');

    expect(manager.name).toBe('Jill');
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toBe('email@email.com');
    expect(manager.officeNumber).toEqual(expect.any(Number));
    expect(manager.role).toBe('Manager');
})