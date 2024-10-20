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
    const balance = await account.fetchBalance();
    if (balance) {
      expect(typeof balance).toBe('number');
      expect(balance).toBeGreaterThanOrEqual(0);
      expect(balance).toBeLessThanOrEqual(100);
    } else {
      expect(balance).toBeNull();
    }
  });

  test('should set new balance if fetchBalance returned number', async () => {
    try {
      await account.synchronizeBalance();
      const newBalance = account.getBalance();

      expect(typeof newBalance).toBe('number');
      expect(newBalance).toBeGreaterThanOrEqual(0);
      expect(newBalance).toBeLessThanOrEqual(100);
    } catch (err) {
      expect(err).toBeInstanceOf(SynchronizationFailedError);
    }
  });

  test('should throw SynchronizationFailedError if fetchBalance returned null', async () => {
    let didThrow = false;

    for (let i = 0; i <= 100; i++) {
      try {
        await account.synchronizeBalance();
      } catch (err) {
        if (err instanceof SynchronizationFailedError) {
          didThrow = true;
        }
      }
    }

    expect(didThrow).toBe(true);
  });
});
