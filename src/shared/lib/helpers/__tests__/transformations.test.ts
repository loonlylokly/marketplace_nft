import { mapArrToString } from '@/shared/lib/helpers/transformations';

describe('mapArrToString', () => {
  test('Корректное значение', () => {
    expect(mapArrToString([0, 1, 2, 3])).toEqual(['0', '1', '2', '3']);
  });

  test('Отрицательные числа', () => {
    expect(mapArrToString([-1, 0, -2, 1])).toEqual(['-1', '0', '-2', '1']);
  });

  test('Другие системы исчисления и экспоненциальная запись', () => {
    expect(mapArrToString([2, 0xff, 2e5])).toEqual(['2', '255', '200000']);
  });
});
