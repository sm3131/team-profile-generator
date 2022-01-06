const Engineer = require('../lib/Engineer');

test('creates an engineer object', () => {
    const engineer = new Engineer('Sanni', 2, 'email@email.com', 'github', 'Engineer');

    expect(engineer.name).toBe('Sanni');
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toBe('email@email.com');
    expect(engineer.github).toBe('github');
    expect(engineer.role).toBe('Engineer');
})

test("gets engineer's github", () => {
    const engineer = new Engineer('Sanni', 2, 'email@email.com', 'github', 'Engineer');
    expect(engineer.getGithub()).toBe('github');
})

test("gets engineer's role", () => {
    const engineer = new Engineer('Sanni', 2, 'email@email.com', 'github', 'Engineer');

    expect(engineer.getRole()).toBe('Engineer');
})