import { simpleCalculator, Action } from './index';

describe('simpleCalculator tests', () => {
  test('should add two numbers', () => {
    const action = Action.Add;
    expect(simpleCalculator({ a: 13, b: 32, action })).toBe(45);
    expect(simpleCalculator({ a: -7, b: -12, action })).toBe(-19);
    expect(simpleCalculator({ a: 42, b: -19, action })).toBe(23);
    expect(simpleCalculator({ a: -28, b: 6, action })).toBe(-22);
    expect(simpleCalculator({ a: 0, b: 22, action })).toBe(22);
    expect(simpleCalculator({ a: -31, b: 0, action })).toBe(-31);
    expect(simpleCalculator({ a: 8, b: 1.1, action })).toBe(9.1);
    expect(simpleCalculator({ a: 4.2, b: 6, action })).toBe(10.2);
    expect(simpleCalculator({ a: 11.12, b: -3, action })).toBeCloseTo(8.12);
    expect(simpleCalculator({ a: 28, b: -47.69, action })).toBeCloseTo(-19.69);
    expect(simpleCalculator({ a: 51.45, b: 13.73, action })).toBeCloseTo(65.18);
    expect(simpleCalculator({ a: -1.34, b: -6.82, action })).toBeCloseTo(-8.16);
    expect(simpleCalculator({ a: -2.43, b: 8.25, action })).toBeCloseTo(5.82);
    expect(simpleCalculator({ a: 5.56, b: -9.74, action })).toBeCloseTo(-4.18);
    expect(simpleCalculator({ a: 45.64, b: 0, action })).toBe(45.64);
    expect(simpleCalculator({ a: 0, b: -83.29, action })).toBe(-83.29);
    expect(simpleCalculator({ a: 0, b: 0, action })).toBe(0);
  });

  test('should subtract two numbers', () => {
    // Write your test here
  });

  test('should multiply two numbers', () => {
    // Write your test here
  });

  test('should divide two numbers', () => {
    // Write your test here
  });

  test('should exponentiate two numbers', () => {
    // Write your test here
  });

  test('should return null for invalid action', () => {
    // Write your test here
  });

  test('should return null for invalid arguments', () => {
    // Write your test here
  });
});
