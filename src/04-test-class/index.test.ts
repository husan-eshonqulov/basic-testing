import { random } from 'lodash';
import { getBankAccount, BankAccount, SynchronizationFailedError } from '.';

describe('BankAccount', () => {
  let account: BankAccount;

  beforeEach(() => {
    account = getBankAccount(77);
  });

  test('should create account with initial balance', () => {
    expect(account.getBalance()).toBe(77);
  });

  test('should throw InsufficientFundsError error when withdrawing more than balance', () => {
    expect(() => account.withdraw(82)).toThrow();
  });

  test('should throw error when transferring more than balance', () => {
    expect(() => account.transfer(91, getBankAccount(23))).toThrow();
  });

  test('should throw error when transferring to the same account', () => {
    expect(() => account.transfer(10, account)).toThrow();
  });

  test('should deposit money', () => {
    account.deposit(3);
    expect(account.getBalance()).toBe(80);
  });

  test('should withdraw money', () => {
    account.withdraw(17);
    expect(account.getBalance()).toBe(60);
  });

  test('should transfer money', () => {
    const anotherAccount = getBankAccount(48);
    account.transfer(13, anotherAccount);
    expect(account.getBalance()).toBe(64);
    expect(anotherAccount.getBalance()).toBe(61);
  });

  test('fetchBalance should return number in case if request did not failed', async () => {
    const mockRandom = jest.fn();
    mockRandom.mockReturnValueOnce(44).mockReturnValueOnce(1);

    (random as jest.Mock) = mockRandom;

    const balance = await account.fetchBalance();

    expect(balance).toBe(44);
  });

  test('should set new balance if fetchBalance returned number', async () => {
    const mockRandom = jest.fn();
    mockRandom.mockReturnValueOnce(36).mockReturnValueOnce(1);

    (random as jest.Mock) = mockRandom;

    await account.synchronizeBalance();

    expect(account.getBalance()).toBe(36);
  });

  test('should throw SynchronizationFailedError if fetchBalance returned null', async () => {
    const mockRandom = jest.fn();
    mockRandom.mockReturnValueOnce(91).mockReturnValueOnce(0);

    (random as jest.Mock) = mockRandom;

    await expect(account.synchronizeBalance()).rejects.toBeInstanceOf(
      SynchronizationFailedError,
    );
  });
});
