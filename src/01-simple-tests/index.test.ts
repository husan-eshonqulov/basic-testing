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
    expect(simpleCalculator({ a: 8, b: 1.1, action })).toBeCloseTo(9.1);
    expect(simpleCalculator({ a: 4.2, b: 6, action })).toBeCloseTo(10.2);
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
    const action = Action.Subtract;
    expect(simpleCalculator({ a: 13, b: 32, action })).toBe(-19);
    expect(simpleCalculator({ a: -7, b: -12, action })).toBe(5);
    expect(simpleCalculator({ a: 42, b: -19, action })).toBe(61);
    expect(simpleCalculator({ a: -28, b: 6, action })).toBe(-34);
    expect(simpleCalculator({ a: 0, b: 22, action })).toBe(-22);
    expect(simpleCalculator({ a: -31, b: 0, action })).toBe(-31);
    expect(simpleCalculator({ a: 8, b: 1.1, action })).toBeCloseTo(6.9);
    expect(simpleCalculator({ a: 4.2, b: 6, action })).toBeCloseTo(-1.8);
    expect(simpleCalculator({ a: 11.12, b: -3, action })).toBeCloseTo(14.12);
    expect(simpleCalculator({ a: 28, b: -47.69, action })).toBeCloseTo(75.69);
    expect(simpleCalculator({ a: 51.45, b: 13.73, action })).toBeCloseTo(37.72);
    expect(simpleCalculator({ a: -1.34, b: -6.82, action })).toBeCloseTo(5.48);
    expect(simpleCalculator({ a: -2.43, b: 8.25, action })).toBeCloseTo(-10.68);
    expect(simpleCalculator({ a: 5.56, b: -9.74, action })).toBeCloseTo(15.3);
    expect(simpleCalculator({ a: 45.64, b: 0, action })).toBe(45.64);
    expect(simpleCalculator({ a: 0, b: -83.29, action })).toBe(83.29);
    expect(simpleCalculator({ a: 0, b: 0, action })).toBe(0);
  });

  test('should multiply two numbers', () => {
    const action = Action.Multiply;
    expect(simpleCalculator({ a: 13, b: 32, action })).toBe(416);
    expect(simpleCalculator({ a: -7, b: -12, action })).toBe(84);
    expect(simpleCalculator({ a: 42, b: -19, action })).toBe(-798);
    expect(simpleCalculator({ a: -28, b: 6, action })).toBe(-168);
    expect(simpleCalculator({ a: 0, b: 22, action })).toBe(0);
    expect(simpleCalculator({ a: -31, b: 0, action })).toBe(-0);
    expect(simpleCalculator({ a: 8, b: 1.1, action })).toBeCloseTo(8.8);
    expect(simpleCalculator({ a: 4.2, b: 6, action })).toBeCloseTo(25.2);
    expect(simpleCalculator({ a: 11.12, b: -3, action })).toBeCloseTo(-33.36);
    expect(simpleCalculator({ a: 8, b: -7.69, action })).toBeCloseTo(-61.52);
    expect(simpleCalculator({ a: 5.45, b: 1.73, action })).toBeCloseTo(9.4285);
    expect(simpleCalculator({ a: -1.34, b: -6.2, action })).toBeCloseTo(8.308);
    expect(simpleCalculator({ a: -2.3, b: 8.25, action })).toBeCloseTo(-18.975);
    expect(simpleCalculator({ a: 5.56, b: -9.4, action })).toBeCloseTo(-52.264);
    expect(simpleCalculator({ a: 45.64, b: 0, action })).toBe(0);
    expect(simpleCalculator({ a: 0, b: -83.29, action })).toBe(-0);
    expect(simpleCalculator({ a: 0, b: 0, action })).toBe(0);
  });

  test('should divide two numbers', () => {
    const action = Action.Divide;
    expect(simpleCalculator({ a: 13, b: 32, action })).toBeCloseTo(0.406);
    expect(simpleCalculator({ a: -7, b: -12, action })).toBeCloseTo(0.583);
    expect(simpleCalculator({ a: 42, b: -19, action })).toBeCloseTo(-2.21);
    expect(simpleCalculator({ a: -28, b: 6, action })).toBeCloseTo(-4.666);
    expect(simpleCalculator({ a: 0, b: 22, action })).toBeCloseTo(0);
    expect(simpleCalculator({ a: -31, b: 0, action })).toBe(-Infinity);
    expect(simpleCalculator({ a: 8, b: 1.1, action })).toBeCloseTo(7.272);
    expect(simpleCalculator({ a: 4.2, b: 6, action })).toBeCloseTo(0.7);
    expect(simpleCalculator({ a: 11.12, b: -3, action })).toBeCloseTo(-3.706);
    expect(simpleCalculator({ a: 8, b: -7.69, action })).toBeCloseTo(-1.04);
    expect(simpleCalculator({ a: 5.45, b: 1.73, action })).toBeCloseTo(3.15);
    expect(simpleCalculator({ a: -1.34, b: -6.2, action })).toBeCloseTo(0.216);
    expect(simpleCalculator({ a: -2.3, b: 8.25, action })).toBeCloseTo(-0.278);
    expect(simpleCalculator({ a: 5.56, b: -9.4, action })).toBeCloseTo(-0.591);
    expect(simpleCalculator({ a: 45.64, b: 0, action })).toBe(Infinity);
    expect(simpleCalculator({ a: 0, b: -83.29, action })).toBe(-0);
    expect(simpleCalculator({ a: 0, b: 0, action })).toBe(NaN);
  });

  test('should exponentiate two numbers', () => {
    const action = Action.Exponentiate;
    expect(simpleCalculator({ a: 3, b: 2, action })).toBe(9);
    expect(simpleCalculator({ a: -7, b: -2, action })).toBeCloseTo(0.02);
    expect(simpleCalculator({ a: 4, b: -9, action })).toBeCloseTo(0);
    expect(simpleCalculator({ a: -2, b: 6, action })).toBe(64);
    expect(simpleCalculator({ a: 0, b: 22, action })).toBe(0);
    expect(simpleCalculator({ a: -31, b: 0, action })).toBe(1);
    expect(simpleCalculator({ a: 8, b: 1.1, action })).toBeCloseTo(9.849);
    expect(simpleCalculator({ a: 4.2, b: 6, action })).toBeCloseTo(5489.031);
    expect(simpleCalculator({ a: 11.12, b: -3, action })).toBeCloseTo(0);
    expect(simpleCalculator({ a: 8, b: -7.69, action })).toBeCloseTo(0);
    expect(simpleCalculator({ a: 5.45, b: 1.73, action })).toBeCloseTo(18.791);
    expect(simpleCalculator({ a: -1.3, b: -1, action })).toBeCloseTo(-0.769);
    expect(simpleCalculator({ a: -2.3, b: 1, action })).toBeCloseTo(-2.3);
    expect(simpleCalculator({ a: 5.5, b: -9.4, action })).toBeCloseTo(0);
    expect(simpleCalculator({ a: 45.64, b: 0, action })).toBe(1);
    expect(simpleCalculator({ a: 0, b: -83.29, action })).toBe(Infinity);
    expect(simpleCalculator({ a: 0, b: 0, action })).toBe(1);
  });

  test('should return null for invalid action', () => {
    expect(simpleCalculator({ a: 13, b: 32, action: '!' })).toBe(null);
    expect(simpleCalculator({ a: -7, b: -12, action: '@' })).toBe(null);
    expect(simpleCalculator({ a: 42, b: -19, action: '#' })).toBe(null);
    expect(simpleCalculator({ a: -28, b: 6, action: '$' })).toBe(null);
    expect(simpleCalculator({ a: 0, b: 22, action: '%' })).toBe(null);
    expect(simpleCalculator({ a: -31, b: 0, action: ';' })).toBe(null);
    expect(simpleCalculator({ a: 8, b: 1.1, action: '&' })).toBe(null);
    expect(simpleCalculator({ a: 4.2, b: 6, action: '"' })).toBe(null);
    expect(simpleCalculator({ a: 11.12, b: -3, action: '(' })).toBe(null);
    expect(simpleCalculator({ a: 28, b: -47.69, action: ')' })).toBe(null);
    expect(simpleCalculator({ a: 51.45, b: 13.73, action: '_' })).toBe(null);
    expect(simpleCalculator({ a: -1.34, b: -6.82, action: '=' })).toBe(null);
    expect(simpleCalculator({ a: -2.43, b: 8.25, action: '<' })).toBe(null);
    expect(simpleCalculator({ a: 5.56, b: -9.74, action: '>' })).toBe(null);
    expect(simpleCalculator({ a: 45.64, b: 0, action: '.' })).toBe(null);
    expect(simpleCalculator({ a: 0, b: -83.29, action: '?' })).toBe(null);
    expect(simpleCalculator({ a: 0, b: 0, action: ':' })).toBe(null);
  });

  test('should return null for invalid arguments', () => {
    const action = Action.Add;
    expect(simpleCalculator({ a: '13', b: 32, action })).toBe(null);
    expect(simpleCalculator({ a: -7, b: '-12', action })).toBe(null);
    expect(simpleCalculator({ a: '42', b: '-19', action })).toBe(null);
    expect(simpleCalculator({ a: true, b: 6, action })).toBe(null);
    expect(simpleCalculator({ a: 0, b: false, action })).toBe(null);
    expect(simpleCalculator({ a: null, b: 0, action })).toBe(null);
    expect(simpleCalculator({ a: 8, b: undefined, action })).toBe(null);
    expect(simpleCalculator({ a: {}, b: 6, action })).toBe(null);
    expect(simpleCalculator({ a: 11.12, b: [], action })).toBe(null);
    expect(simpleCalculator({ a: '28', b: {}, action })).toBe(null);
    expect(simpleCalculator({ a: [], b: '13.73', action })).toBe(null);
    expect(simpleCalculator({ a: undefined, b: '-6.82', action })).toBe(null);
    expect(simpleCalculator({ a: '-2.43', b: null, action })).toBe(null);
    expect(simpleCalculator({ a: null, b: undefined, action })).toBe(null);
    expect(simpleCalculator({ a: [], b: {}, action })).toBe(null);
    expect(simpleCalculator({ a: null, b: {}, action })).toBe(null);
    expect(simpleCalculator({ a: [], b: undefined, action })).toBe(null);
  });
});
