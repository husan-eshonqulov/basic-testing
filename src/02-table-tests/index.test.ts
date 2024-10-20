import { simpleCalculator, Action } from './index';

const addTestCases = [
  { a: 13, b: 32, action: Action.Add, expected: 45 },
  { a: -7, b: -12, action: Action.Add, expected: -19 },
  { a: 42, b: -19, action: Action.Add, expected: 23 },
  { a: -28, b: 6, action: Action.Add, expected: -22 },
  { a: 0, b: 22, action: Action.Add, expected: 22 },
  { a: -31, b: 0, action: Action.Add, expected: -31 },
  { a: 8, b: 1.1, action: Action.Add, expected: 9.1, close: true },
  { a: 4.2, b: 6, action: Action.Add, expected: 10.2, close: true },
  { a: 11.12, b: -3, action: Action.Add, expected: 8.12, close: true },
  { a: 28, b: -47.69, action: Action.Add, expected: -19.69, close: true },
  { a: 51.45, b: 13.73, action: Action.Add, expected: 65.18, close: true },
  { a: -1.34, b: -6.82, action: Action.Add, expected: -8.16, close: true },
  { a: -2.43, b: 8.25, action: Action.Add, expected: 5.82, close: true },
  { a: 5.56, b: -9.74, action: Action.Add, expected: -4.18, close: true },
  { a: 45.64, b: 0, action: Action.Add, expected: 45.64 },
  { a: 0, b: -83.29, action: Action.Add, expected: -83.29 },
  { a: 0, b: 0, action: Action.Add, expected: 0 },
];

const subtractTestCases = [
  { a: 13, b: 32, action: Action.Subtract, expected: -19 },
  { a: -7, b: -12, action: Action.Subtract, expected: 5 },
  { a: 42, b: -19, action: Action.Subtract, expected: 61 },
  { a: -28, b: 6, action: Action.Subtract, expected: -34 },
  { a: 0, b: 22, action: Action.Subtract, expected: -22 },
  { a: -31, b: 0, action: Action.Subtract, expected: -31 },
  { a: 8, b: 1.1, action: Action.Subtract, expected: 6.9, close: true },
  { a: 4.2, b: 6, action: Action.Subtract, expected: -1.8, close: true },
  { a: 11.12, b: -3, action: Action.Subtract, expected: 14.12, close: true },
  { a: 28, b: -47.69, action: Action.Subtract, expected: 75.69, close: true },
  { a: 51.45, b: 13.73, action: Action.Subtract, expected: 37.72, close: true },
  { a: -1.34, b: -6.82, action: Action.Subtract, expected: 5.48, close: true },
  { a: -2.43, b: 8.25, action: Action.Subtract, expected: -10.68, close: true },
  { a: 5.56, b: -9.74, action: Action.Subtract, expected: 15.3, close: true },
  { a: 45.64, b: 0, action: Action.Subtract, expected: 45.64 },
  { a: 0, b: -83.29, action: Action.Subtract, expected: 83.29 },
  { a: 0, b: 0, action: Action.Subtract, expected: 0 },
];

const multiplyTestCases = [
  { a: 13, b: 32, action: Action.Multiply, expected: 416 },
  { a: -7, b: -12, action: Action.Multiply, expected: 84 },
  { a: 42, b: -19, action: Action.Multiply, expected: -798 },
  { a: -28, b: 6, action: Action.Multiply, expected: -168 },
  { a: 0, b: 22, action: Action.Multiply, expected: 0 },
  { a: -31, b: 0, action: Action.Multiply, expected: -0 },
  { a: 8, b: 1.1, action: Action.Multiply, expected: 8.8, close: true },
  { a: 4.2, b: 6, action: Action.Multiply, expected: 25.2, close: true },
  { a: 11.12, b: -3, action: Action.Multiply, expected: -33.36, close: true },
  { a: 8, b: -7.69, action: Action.Multiply, expected: -61.52, close: true },
  { a: 5.45, b: 1.73, action: Action.Multiply, expected: 9.4285, close: true },
  { a: -1.34, b: -6.2, action: Action.Multiply, expected: 8.308, close: true },
  { a: -2.3, b: 8.25, action: Action.Multiply, expected: -18.975, close: true },
  { a: 5.56, b: -9.4, action: Action.Multiply, expected: -52.264, close: true },
  { a: 45.64, b: 0, action: Action.Multiply, expected: 0 },
  { a: 0, b: -83.29, action: Action.Multiply, expected: -0 },
  { a: 0, b: 0, action: Action.Multiply, expected: 0 },
];

const divideTestCases = [
  { a: 13, b: 32, action: Action.Divide, expected: 0.406, close: true },
  { a: -7, b: -12, action: Action.Divide, expected: 0.583, close: true },
  { a: 42, b: -19, action: Action.Divide, expected: -2.21, close: true },
  { a: -28, b: 6, action: Action.Divide, expected: -4.666, close: true },
  { a: 0, b: 22, action: Action.Divide, expected: 0, close: true },
  { a: -31, b: 0, action: Action.Divide, expected: -Infinity },
  { a: 8, b: 1.1, action: Action.Divide, expected: 7.272, close: true },
  { a: 4.2, b: 6, action: Action.Divide, expected: 0.7, close: true },
  { a: 11.12, b: -3, action: Action.Divide, expected: -3.706, close: true },
  { a: 8, b: -7.69, action: Action.Divide, expected: -1.04, close: true },
  { a: 5.45, b: 1.73, action: Action.Divide, expected: 3.15, close: true },
  { a: -1.34, b: -6.2, action: Action.Divide, expected: 0.216, close: true },
  { a: -2.3, b: 8.25, action: Action.Divide, expected: -0.278, close: true },
  { a: 5.56, b: -9.4, action: Action.Divide, expected: -0.591, close: true },
  { a: 45.64, b: 0, action: Action.Divide, expected: Infinity },
  { a: 0, b: -83.29, action: Action.Divide, expected: -0 },
  { a: 0, b: 0, action: Action.Divide, expected: NaN },
];

const exponentiateTestCases = [
  { a: 3, b: 2, action: Action.Exponentiate, expected: 9 },
  { a: -7, b: -2, action: Action.Exponentiate, expected: 0.02, close: true },
  { a: 4, b: -9, action: Action.Exponentiate, expected: 0, close: true },
  { a: -2, b: 6, action: Action.Exponentiate, expected: 64 },
  { a: 0, b: 22, action: Action.Exponentiate, expected: 0 },
  { a: -31, b: 0, action: Action.Exponentiate, expected: 1 },
  { a: 8, b: 1.1, action: Action.Exponentiate, expected: 9.849, close: true },
  { a: 4.2, b: 6, action: Action.Exponentiate, expected: 5489.03, close: true },
  { a: 11.12, b: -3, action: Action.Exponentiate, expected: 0, close: true },
  { a: 8, b: -7.69, action: Action.Exponentiate, expected: 0, close: true },
  { a: 5.4, b: 1.7, action: Action.Exponentiate, expected: 17.58, close: true },
  { a: -1.3, b: -1, action: Action.Exponentiate, expected: -0.77, close: true },
  { a: -2.3, b: 1, action: Action.Exponentiate, expected: -2.3, close: true },
  { a: 5.5, b: -9.4, action: Action.Exponentiate, expected: 0, close: true },
  { a: 45.64, b: 0, action: Action.Exponentiate, expected: 1 },
  { a: 0, b: -83.29, action: Action.Exponentiate, expected: Infinity },
  { a: 0, b: 0, action: Action.Exponentiate, expected: 1 },
];

const invalidActionTestCases = [
  { a: 13, b: 32, action: '!', expected: null },
  { a: -7, b: -12, action: '@', expected: null },
  { a: 42, b: -19, action: '#', expected: null },
  { a: -28, b: 6, action: '$', expected: null },
  { a: 0, b: 22, action: '%', expected: null },
  { a: -31, b: 0, action: ';', expected: null },
  { a: 8, b: 1.1, action: '&', expected: null },
  { a: 4.2, b: 6, action: '"', expected: null },
  { a: 11.12, b: -3, action: '(', expected: null },
  { a: 28, b: -47.69, action: ')', expected: null },
  { a: 51.45, b: 13.73, action: '_', expected: null },
  { a: -1.34, b: -6.82, action: '=', expected: null },
  { a: -2.43, b: 8.25, action: '<', expected: null },
  { a: 5.56, b: -9.74, action: '>', expected: null },
  { a: 45.64, b: 0, action: '.', expected: null },
  { a: 0, b: -83.29, action: '?', expected: null },
  { a: 0, b: 0, action: ':', expected: null },
];

const invalidArgumentsTestCases = [
  { a: '13', b: 32, action: Action.Add, expected: null },
  { a: -7, b: '-12', action: Action.Add, expected: null },
  { a: '42', b: '-19', action: Action.Add, expected: null },
  { a: true, b: 6, action: Action.Add, expected: null },
  { a: 0, b: false, action: Action.Add, expected: null },
  { a: null, b: 0, action: Action.Add, expected: null },
  { a: 8, b: undefined, action: Action.Add, expected: null },
  { a: {}, b: 6, action: Action.Add, expected: null },
  { a: 11.12, b: [], action: Action.Add, expected: null },
  { a: '28', b: {}, action: Action.Add, expected: null },
  { a: [], b: '13.73', action: Action.Add, expected: null },
  { a: undefined, b: '-6.82', action: Action.Add, expected: null },
  { a: '-2.43', b: null, action: Action.Add, expected: null },
  { a: null, b: undefined, action: Action.Add, expected: null },
  { a: [], b: {}, action: Action.Add, expected: null },
  { a: null, b: {}, action: Action.Add, expected: null },
  { a: [], b: undefined, action: Action.Add, expected: null },
];

describe('simpleCalculator', () => {
  test.each(addTestCases)(
    'adding $a and $b expected to be $expected',
    ({ a, b, action, expected, close }) => {
      const result = simpleCalculator({ a, b, action });

      if (close) {
        expect(result).toBeCloseTo(expected);
      } else {
        expect(result).toBe(expected);
      }
    },
  );

  test.each(subtractTestCases)(
    'subtracting $b from $b expected to be $expected',
    ({ a, b, action, expected, close }) => {
      const result = simpleCalculator({ a, b, action });

      if (close) {
        expect(result).toBeCloseTo(expected);
      } else {
        expect(result).toBe(expected);
      }
    },
  );

  test.each(multiplyTestCases)(
    'multiplying $a and $b expected to be $expected',
    ({ a, b, action, expected, close }) => {
      const result = simpleCalculator({ a, b, action });

      if (close) {
        expect(result).toBeCloseTo(expected);
      } else {
        expect(result).toBe(expected);
      }
    },
  );

  test.each(divideTestCases)(
    'dividing $a by $b expected to be $expected',
    ({ a, b, action, expected, close }) => {
      const result = simpleCalculator({ a, b, action });

      if (close) {
        expect(result).toBeCloseTo(expected);
      } else {
        expect(result).toBe(expected);
      }
    },
  );

  test.each(exponentiateTestCases)(
    'exponentiating $a by $b expected to be $expected',
    ({ a, b, action, expected, close }) => {
      const result = simpleCalculator({ a, b, action });

      if (close) {
        expect(result).toBeCloseTo(expected);
      } else {
        expect(result).toBe(expected);
      }
    },
  );

  test.each(invalidActionTestCases)(
    'should calculate $a $action $b expected to be $expected',
    ({ a, b, action, expected }) => {
      const result = simpleCalculator({ a, b, action });
      expect(result).toBe(expected);
    },
  );

  test.each(invalidArgumentsTestCases)(
    'should calculate $a $action $b expected to be $expected',
    ({ a, b, action, expected }) => {
      const result = simpleCalculator({ a, b, action });
      expect(result).toBe(expected);
    },
  );
});
