import { validateValue } from '@/shared/lib/helpers/validate';

describe('validateValue', () => {
  test('Корректное значение', () => {
    expect(validateValue(50)).toBe(true);
  });

  test('Меньше корректного', () => {
    expect(validateValue(-1)).toBe(false);
  });

  test('Больше корректного', () => {
    expect(validateValue(101)).toBe(false);
  });

  test('Пограничное значение снизу', () => {
    expect(validateValue(0)).toBe(true);
  });

  test('Больше корректного сверху', () => {
    expect(validateValue(100)).toBe(true);
  });
});
