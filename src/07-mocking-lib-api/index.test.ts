import axios, { AxiosInstance } from 'axios';
import { throttledGetDataFromApi, THROTTLE_TIME } from './index';

describe('throttledGetDataFromApi', () => {
  test('should create instance with provided base url', async () => {
    const relativePath = 'users';

    const axiosInstance: Partial<AxiosInstance> = {
      get: jest.fn().mockResolvedValue({ data: { id: 1, name: 'John Doe' } }),
    };
    const createSpy = jest.spyOn(axios, 'create');

    createSpy.mockReturnValue(axiosInstance as AxiosInstance);
    await throttledGetDataFromApi(relativePath);

    expect(createSpy).toBeCalledWith({
      baseURL: 'https://jsonplaceholder.typicode.com',
    });

    createSpy.mockRestore();
  });

  test('should perform request to correct provided url', async () => {
    const relativePath = 'users';

    const axiosInstance: Partial<AxiosInstance> = {
      get: jest.fn().mockReturnValue({ data: { id: 1, name: 'John Doe' } }),
    };
    const createSpy = jest.spyOn(axios, 'create');

    createSpy.mockReturnValue(axiosInstance as AxiosInstance);
    jest.useFakeTimers();
    jest.advanceTimersByTime(THROTTLE_TIME);
    await throttledGetDataFromApi(relativePath);

    expect(axiosInstance.get).toBeCalledWith('users');

    jest.useRealTimers();
  });

  test('should return response data', async () => {
    const relativePath = 'users';

    const axiosInstance: Partial<AxiosInstance> = {
      get: jest
        .fn()
        .mockResolvedValueOnce({ data: { id: 1, name: 'John Doe' } }),
    };
    const createSpy = jest.spyOn(axios, 'create');

    createSpy.mockReturnValue(axiosInstance as AxiosInstance);
    jest.useFakeTimers();
    jest.advanceTimersByTime(THROTTLE_TIME);

    await expect(throttledGetDataFromApi(relativePath)).resolves.toEqual({
      id: 1,
      name: 'John Doe',
    });

    jest.useRealTimers();
  });
});
