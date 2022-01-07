const Intern = require('../lib/Intern');

test('creates an intern object', () => {
    const intern = new Intern('Rex', 4, 'email@email.com', 'school', 'Intern');

    expect(intern.name).toBe('Rex');
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toBe('email@email.com');
    expect(intern.school).toBe('school');
    expect(intern.role).toBe('Intern');
})

test("gets school attended by intern", () => {
    const intern = new Intern('Rex', 4, 'email@email.com', 'school', 'Intern');
    expect(intern.getSchool()).toBe('school');
})

test("gets intern's role", () => {
    const intern = new Intern('Rex', 4, 'email@email.com', 'school', 'Intern');

    expect(intern.getRole()).toBe('Intern');
})