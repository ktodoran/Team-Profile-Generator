const { test, expect } = require('@jest/globals');
const Intern = require('../lib/Intern');

test('creates new intern object', () =>{
    const intern = new Intern('Andrew', 1, 'antellitocci@gmail.com', 'Purdue University');

    expect(intern.name).toBe('Andrew');
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.stringContaining('@'));
    expect(intern.school).toEqual(expect.any(String));
});

test("returns intern object's name", () => {
    const intern = new Intern('Andrew', 1, 'antellitocci@gmail.com', 'Purdue University');

    expect(intern.getName()).toEqual('Andrew');
});

test("returns intern object's id", () => {
    const intern = new Intern('Andrew', 1, 'antellitocci@gmail.com', 'Purdue University');

    expect(intern.getId()).toEqual(1);
});

test("returns intern object's email", () => {
    const intern = new Intern('Andrew', 1, 'antellitocci@gmail.com', 'Purdue University');

    expect(intern.getEmail()).toEqual('antellitocci@gmail.com');
});

test("returns intern object's role", () => {
    const intern = new Intern('Andrew', 1, 'antellitocci@gmail.com', 'Purdue University');

    expect(intern.getRole()).toEqual('Intern');
});

test("returns intern object's school", () => {
    const intern = new Intern('Andrew', 1, 'antellitocci@gmail.com', 'Purdue University');
    
    expect(intern.getSchool()).toEqual('Purdue University');
});