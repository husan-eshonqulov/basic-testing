import path from 'node:path';
import fs from 'node:fs';
import {
  doStuffByTimeout,
  doStuffByInterval,
  readFileAsynchronously,
} from './index';

describe('doStuffByTimeout', () => {
  beforeAll(() => {
    jest.useFakeTimers();
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  test('should set timeout with provided callback and timeout', () => {
    const callback = jest.fn();
    jest.spyOn(global, 'setTimeout');

    doStuffByTimeout(callback, 1000);
    jest.advanceTimersByTime(1000);

    expect(setTimeout).toBeCalledWith(callback, 1000);
  });

  test('should call callback only after timeout', () => {
    const callback = jest.fn();

    doStuffByTimeout(callback, 1000);

    expect(callback).not.toBeCalled();

    jest.advanceTimersByTime(1000);

    expect(callback).toBeCalled();
  });
});

describe('doStuffByInterval', () => {
  beforeAll(() => {
    jest.useFakeTimers();
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  test('should set interval with provided callback and timeout', () => {
    const callback = jest.fn();
    jest.spyOn(global, 'setInterval');

    doStuffByInterval(callback, 1000);

    jest.advanceTimersByTime(1000);

    expect(setInterval).toBeCalledWith(callback, 1000);
  });

  test('should call callback multiple times after multiple intervals', () => {
    const callback = jest.fn();

    doStuffByInterval(callback, 1000);
    jest.advanceTimersByTime(7000);

    expect(callback).toBeCalledTimes(7);
  });
});

describe('readFileAsynchronously', () => {
  test('should call join with pathToFile', async () => {
    const pathToFile = 'index.ts';

    jest.spyOn(path, 'join');

    await readFileAsynchronously(pathToFile);

    expect(path.join).toBeCalledWith(__dirname, pathToFile);
  });

  test('should return null if file does not exist', async () => {
    const pathToFile = 'noExistPath';

    await expect(readFileAsynchronously(pathToFile)).resolves.toBeNull();
  });

  test('should return file content if file exists', async () => {
    const pathToFile = path.basename(__filename);
    const mockReadFile = jest.fn();

    mockReadFile.mockResolvedValue('salom');
    fs.promises.readFile = mockReadFile;

    const content = await readFileAsynchronously(pathToFile);

    expect(content).toBe('salom');
  });
});
