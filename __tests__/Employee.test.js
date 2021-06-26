const { test, expect } = require('@jest/globals');
const Employee = require('../lib/Employee');

test('creates new employee object', () =>{
    const employee = new Employee('Andrew', 1, 'antellitocci@gmail.com');

    expect(employee.name).toBe('Andrew');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.stringContaining('@'));
});

test("returns employee object's name", () => {
    const employee = new Employee('Andrew', 1, 'antellitocci@gmail.com');

    expect(employee.getName()).toEqual('Andrew');
});

test("returns employee object's id", () => {
    const employee = new Employee('Andrew', 1, 'antellitocci@gmail.com');

    expect(employee.getId()).toEqual(1);
});

test("returns employee object's email", () => {
    const employee = new Employee('Andrew', 1, 'antellitocci@gmail.com');

    expect(employee.getEmail()).toEqual('antellitocci@gmail.com');
});

test("returns employee object's role", () => {
    const employee = new Employee('Andrew', 1, 'antellitocci@gmail.com');

    expect(employee.getRole()).toEqual('Employee');
});