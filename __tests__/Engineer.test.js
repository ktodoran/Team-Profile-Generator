const { test, expect } = require('@jest/globals');
const Engineer = require('../lib/Engineer');

test('creates new engineer object', () =>{
    const engineer = new Engineer('Kyle', 1, 'ktodoran@gmail.com', 'ktodoran');

    expect(engineer.name).toBe('Kyle');
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.stringContaining('@'));
    expect(engineer.github).toEqual(expect.any(String));
});

test("returns engineer object's name", () => {
    const engineer = new Engineer('Kyle', 1, 'ktodoran@gmail.com', 'ktodoran');

    expect(engineer.getName()).toEqual('Kyle');
});

test("returns engineer object's id", () => {
    const engineer = new Engineer('Kyle', 1, 'ktodoran@gmail.com', 'ktodoran');

    expect(engineer.getId()).toEqual(1);
});

test("returns engineer object's email", () => {
    const engineer = new Engineer('Kyle', 1, 'ktodoran@gmail.com', 'ktodoran');

    expect(engineer.getEmail()).toEqual('ktodoran@gmail.com');
});

test("returns engineer object's role", () => {
    const engineer = new Engineer('Kyle', 1, 'ktodoran@gmail.com', 'ktodoran');

    expect(engineer.getRole()).toEqual('Engineer');
});

test("returns engineer object's github", () => {
    const engineer = new Engineer('Kyle', 1, 'ktodoran@gmail.com', 'ktodoran');
    
    expect(engineer.getGithub()).toEqual('ktodoran');
});