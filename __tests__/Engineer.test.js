const { test, expect } = require('@jest/globals');
const Engineer = require('../lib/Engineer');

test('creates new engineer object', () =>{
    const engineer = new Engineer('Andrew', 1, 'antellitocci@gmail.com', 'antellitocci');

    expect(engineer.name).toBe('Andrew');
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.stringContaining('@'));
    expect(engineer.github).toEqual(expect.any(String));
});

test("returns engineer object's name", () => {
    const engineer = new Engineer('Andrew', 1, 'antellitocci@gmail.com', 'antellitocci');

    expect(engineer.getName()).toEqual('Andrew');
});

test("returns engineer object's id", () => {
    const engineer = new Engineer('Andrew', 1, 'antellitocci@gmail.com', 'antellitocci');

    expect(engineer.getId()).toEqual(1);
});

test("returns engineer object's email", () => {
    const engineer = new Engineer('Andrew', 1, 'antellitocci@gmail.com', 'antellitocci');

    expect(engineer.getEmail()).toEqual('antellitocci@gmail.com');
});

test("returns engineer object's role", () => {
    const engineer = new Engineer('Andrew', 1, 'antellitocci@gmail.com', 'antellitocci');

    expect(engineer.getRole()).toEqual('Engineer');
});

test("returns engineer object's github", () => {
    const engineer = new Engineer('Andrew', 1, 'antellitocci@gmail.com', 'antellitocci');
    
    expect(engineer.getGithub()).toEqual('antellitocci');
});