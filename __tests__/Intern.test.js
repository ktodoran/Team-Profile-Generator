const { test, expect } = require('@jest/globals');
const Intern = require('../lib/Intern');

test('creates new intern object', () =>{
    const intern = new Intern('Kyle', 1, 'ktodoran@gmail.com', 'University of Notre Dame');

    expect(intern.name).toBe('Kyle');
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.stringContaining('@'));
    expect(intern.school).toEqual(expect.any(String));
});

test("returns intern object's name", () => {
    const intern = new Intern('Kyle', 1, 'ktodoran@gmail.com', 'University of Notre Dame');

    expect(intern.getName()).toEqual('Kyle');
});

test("returns intern object's id", () => {
    const intern = new Intern('Kyle', 1, 'ktodoran@gmail.com', 'University of Notre Dame');

    expect(intern.getId()).toEqual(1);
});

test("returns intern object's email", () => {
    const intern = new Intern('Kyle', 1, 'ktodoran@gmail.com', 'University of Notre Dame');

    expect(intern.getEmail()).toEqual('ktodoran@gmail.com');
});

test("returns intern object's role", () => {
    const intern = new Intern('Kyle', 1, 'ktodoran@gmail.com', 'University of Notre Dame');

    expect(intern.getRole()).toEqual('Intern');
});

test("returns intern object's school", () => {
    const intern = new Intern('Kyle', 1, 'ktodoran@gmail.com', 'University of Notre Dame');
    
    expect(intern.getSchool()).toEqual('University of Notre Dame');
});