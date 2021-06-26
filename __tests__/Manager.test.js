const { test, expect } = require('@jest/globals');
const Manager = require('../lib/Manager');

test('creates new manager object', () =>{
    const manager = new Manager('Andrew', 1, 'antellitocci@gmail.com', 400);

    expect(manager.name).toBe('Andrew');
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.stringContaining('@'));
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

test("returns manager object's name", () => {
    const manager = new Manager('Andrew', 1, 'antellitocci@gmail.com', 400);

    expect(manager.getName()).toEqual('Andrew');
});

test("returns manager object's id", () => {
    const manager = new Manager('Andrew', 1, 'antellitocci@gmail.com', 400);

    expect(manager.getId()).toEqual(1);
});

test("returns manager object's email", () => {
   const manager = new Manager('Andrew', 1, 'antellitocci@gmail.com', 400);

    expect(manager.getEmail()).toEqual('antellitocci@gmail.com');
});

test("returns manager object's role", () => {
   const manager = new Manager('Andrew', 1, 'antellitocci@gmail.com', 400);

    expect(manager.getRole()).toEqual('Manager');
});

test("returns manager object's office number", () => {
    const manager = new Manager('Andrew', 1, 'antellitocci@gmail.com', 400);

    expect(manager.officeNumber).toEqual(400);
});