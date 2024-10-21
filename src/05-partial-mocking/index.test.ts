import { mockOne, mockTwo, mockThree, unmockedFunction } from './index';

jest.mock('./index', () => {
  const originalModule =
    jest.requireActual<typeof import('./index')>('./index');

  return {
    __esModule: true,
    ...originalModule,
    mockOne: () => ({}),
    mockTwo: () => ({}),
    mockThree: () => ({}),
  };
});

describe('partial mocking', () => {
  afterAll(() => {
    jest.unmock('./index');
  });

  test('mockOne, mockTwo, mockThree should not log into console', () => {
    const mockLog = jest.fn();
    console.log = mockLog;

    mockOne();
    mockTwo();
    mockThree();

    expect(mockLog).not.toBeCalled();
  });

  test('unmockedFunction should log into console', () => {
    const mockLog = jest.fn();
    console.log = mockLog;

    unmockedFunction();

    expect(mockLog).toBeCalled();
  });
});
